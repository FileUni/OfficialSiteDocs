#!/bin/sh

set -eu

API_BASE="${FILEUNI_API_BASE:-https://fileuni.com/api/downloads/resolve}"
CHANNEL="${FILEUNI_CHANNEL:-auto}"
INSTALL_DIR="${FILEUNI_INSTALL_DIR:-}"

usage() {
  cat <<'EOF'
FileUni installer

Usage:
  sh install.sh [--channel auto|stable|pre] [--to DIR]

Environment:
  FILEUNI_CHANNEL      Preferred release channel
  FILEUNI_INSTALL_DIR  Installation directory
  FILEUNI_API_BASE     Override website resolver API
EOF
}

while [ "$#" -gt 0 ]; do
  case "$1" in
    --channel)
      CHANNEL="${2:-}"
      shift 2
      ;;
    --to)
      INSTALL_DIR="${2:-}"
      shift 2
      ;;
    --help|-h)
      usage
      exit 0
      ;;
    pre|stable|auto)
      CHANNEL="$1"
      shift
      ;;
    *)
      echo "Unknown argument: $1" >&2
      usage >&2
      exit 1
      ;;
  esac
done

fetch_text() {
  if command -v curl >/dev/null 2>&1; then
    curl -fsSL "$1"
    return
  fi

  if command -v wget >/dev/null 2>&1; then
    wget -qO- "$1"
    return
  fi

  echo "curl or wget is required." >&2
  exit 1
}

download_file() {
  if command -v curl >/dev/null 2>&1; then
    curl -fsSL "$1" -o "$2"
    return
  fi

  wget -qO "$2" "$1"
}

detect_os() {
  case "$(uname -s)" in
    Linux)
      echo "linux"
      ;;
    Darwin)
      echo "macos"
      ;;
    FreeBSD)
      echo "freebsd"
      ;;
    *)
      echo "Unsupported operating system: $(uname -s)" >&2
      exit 1
      ;;
  esac
}

detect_arch() {
  case "$(uname -m)" in
    x86_64|amd64)
      echo "x86_64"
      ;;
    aarch64|arm64)
      echo "aarch64"
      ;;
    *)
      echo "Unsupported architecture: $(uname -m)" >&2
      exit 1
      ;;
  esac
}

detect_libc() {
  if [ "$(detect_os)" != "linux" ]; then
    echo ""
    return
  fi

  if command -v ldd >/dev/null 2>&1; then
    if ldd --version 2>&1 | grep -qi musl; then
      echo "musl"
      return
    fi
  fi

  if ls /lib/ld-musl-*.so.1 >/dev/null 2>&1 || ls /usr/lib/ld-musl-*.so.1 >/dev/null 2>&1; then
    echo "musl"
    return
  fi

  echo "gnu"
}

ensure_install_dir() {
  if [ -n "$INSTALL_DIR" ]; then
    mkdir -p "$INSTALL_DIR"
    return
  fi

  if [ "$(id -u)" -eq 0 ]; then
    INSTALL_DIR="/usr/local/bin"
  else
    INSTALL_DIR="${HOME}/.local/bin"
  fi

  mkdir -p "$INSTALL_DIR"
}

OS_NAME="$(detect_os)"
ARCH_NAME="$(detect_arch)"
LIBC_NAME="$(detect_libc)"

QUERY="${API_BASE}?channel=${CHANNEL}&kind=cli&os=${OS_NAME}&arch=${ARCH_NAME}"
if [ -n "$LIBC_NAME" ]; then
  QUERY="${QUERY}&libc=${LIBC_NAME}"
fi

DOWNLOAD_URL="$(fetch_text "$QUERY" | tr -d '\r\n')"
if [ -z "$DOWNLOAD_URL" ]; then
  echo "Unable to resolve a FileUni download URL." >&2
  exit 1
fi

ensure_install_dir

TMP_DIR="$(mktemp -d)"
ARCHIVE_PATH="${TMP_DIR}/fileuni-archive"
trap 'rm -rf "$TMP_DIR"' EXIT INT TERM

case "$DOWNLOAD_URL" in
  *.tar.xz)
    ARCHIVE_PATH="${ARCHIVE_PATH}.tar.xz"
    ;;
  *.zip)
    ARCHIVE_PATH="${ARCHIVE_PATH}.zip"
    ;;
  *)
    echo "Unsupported archive format: $DOWNLOAD_URL" >&2
    exit 1
    ;;
esac

echo "Resolved channel: ${CHANNEL}"
echo "Target platform: ${OS_NAME}/${ARCH_NAME}${LIBC_NAME:+/${LIBC_NAME}}"
echo "Installing to: ${INSTALL_DIR}"

download_file "$DOWNLOAD_URL" "$ARCHIVE_PATH"

EXTRACT_DIR="${TMP_DIR}/extract"
mkdir -p "$EXTRACT_DIR"

case "$ARCHIVE_PATH" in
  *.tar.xz)
    tar -xJf "$ARCHIVE_PATH" -C "$EXTRACT_DIR"
    ;;
  *.zip)
    if ! command -v unzip >/dev/null 2>&1; then
      echo "unzip is required to extract $ARCHIVE_PATH" >&2
      exit 1
    fi
    unzip -q "$ARCHIVE_PATH" -d "$EXTRACT_DIR"
    ;;
esac

BINARY_PATH="$(find "$EXTRACT_DIR" -type f -name 'fileuni' | head -n 1)"
if [ -z "$BINARY_PATH" ]; then
  echo "Unable to locate the extracted fileuni binary." >&2
  exit 1
fi

install -m 755 "$BINARY_PATH" "${INSTALL_DIR}/fileuni"

echo "FileUni installed at ${INSTALL_DIR}/fileuni"
if "${INSTALL_DIR}/fileuni" --version >/dev/null 2>&1; then
  "${INSTALL_DIR}/fileuni" --version
fi

case ":${PATH}:" in
  *:"${INSTALL_DIR}":*)
    ;;
  *)
    echo "Add ${INSTALL_DIR} to your PATH if it is not already available."
    ;;
esac

echo "Run: fileuni --help"
