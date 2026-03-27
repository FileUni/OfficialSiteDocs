#!/bin/sh

set -eu

RELEASES_JSON_URL="${FILEUNI_RELEASES_JSON_URL:-https://fileuni.com/api/downloads/releases}"
CHANNEL="${FILEUNI_CHANNEL:-auto}"
INSTALL_DIR="${FILEUNI_INSTALL_DIR:-}"
WITH_LUCI="${FILEUNI_WITH_LUCI:-auto}"
PRINT_URL=0

usage() {
  cat <<'EOF'
FileUni installer

Usage:
  sh install.sh [--channel auto|stable|pre] [--to DIR] [--with-luci|--without-luci] [--print-url]

Environment:
  FILEUNI_CHANNEL            Preferred release channel
  FILEUNI_INSTALL_DIR        Installation directory
  FILEUNI_WITH_LUCI          On OpenWrt: auto | true | false
  FILEUNI_RELEASES_JSON_URL  Override public releases JSON URL

Note:
  install.sh supports mutable Linux, OpenWrt, macOS, and FreeBSD hosts.
  On immutable Linux systems such as NixOS, use the platform-native flow instead.
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
    --print-url)
      PRINT_URL=1
      shift
      ;;
    --with-luci)
      WITH_LUCI=true
      shift
      ;;
    --without-luci)
      WITH_LUCI=false
      shift
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

is_openwrt() {
  if [ -f /etc/openwrt_release ]; then
    return 0
  fi

  if [ -r /etc/os-release ] && grep -qi '^ID=.*openwrt.*$' /etc/os-release; then
    return 0
  fi

  return 1
}

is_immutable_linux() {
  if [ "$(uname -s)" != "Linux" ]; then
    return 1
  fi

  if [ -e /run/current-system ]; then
    return 0
  fi

  if [ -r /etc/os-release ]; then
    if grep -qi '^ID=.*nixos.*$' /etc/os-release; then
      return 0
    fi

    if grep -qi '^VARIANT_ID=.*immutable.*$' /etc/os-release; then
      return 0
    fi
  fi

  return 1
}

ensure_supported_host() {
  os_name="$1"

  if [ "$os_name" != "linux" ]; then
    return
  fi

  if ! is_immutable_linux; then
    return
  fi

  echo "install.sh does not support immutable Linux systems such as NixOS." >&2
  echo "Use the platform-native flow instead. For NixOS, install FileUni with Nix." >&2
  exit 1
}

detect_os() {
  if is_openwrt; then
    printf '%s\n' "openwrt"
    return
  fi

  case "$(uname -s)" in
    Linux)
      printf '%s\n' "linux"
      ;;
    Darwin)
      printf '%s\n' "macos"
      ;;
    FreeBSD)
      printf '%s\n' "freebsd"
      ;;
    *)
      echo "Unsupported operating system: $(uname -s)" >&2
      exit 1
      ;;
  esac
}

detect_arch() {
  os_name="$(detect_os)"
  arch_raw="$(uname -m)"

  if [ "$os_name" = "openwrt" ]; then
    case "$arch_raw" in
      x86_64|amd64)
        printf '%s\n' "x64"
        ;;
      aarch64|arm64)
        printf '%s\n' "arm64"
        ;;
      i386|i486|i586|i686)
        printf '%s\n' "x86"
        ;;
      armv7*|armhf)
        printf '%s\n' "armv7"
        ;;
      *)
        echo "Unsupported OpenWrt architecture: ${arch_raw}" >&2
        exit 1
        ;;
    esac
    return
  fi

  case "$arch_raw" in
    x86_64|amd64)
      printf '%s\n' "x64"
      ;;
    aarch64|arm64)
      printf '%s\n' "arm64"
      ;;
    i386|i686)
      printf '%s\n' "x86"
      ;;
    armv7*|armv6*|arm)
      printf '%s\n' "arm"
      ;;
    *)
      echo "Unsupported architecture: ${arch_raw}" >&2
      exit 1
      ;;
  esac
}

detect_libc() {
  if [ "$(detect_os)" = "openwrt" ]; then
    printf '%s\n' "musl"
    return
  fi

  if [ "$(detect_os)" != "linux" ]; then
    printf '%s\n' ""
    return
  fi

  if command -v ldd >/dev/null 2>&1; then
    if ldd --version 2>&1 | grep -qi musl; then
      printf '%s\n' "musl"
      return
    fi
  fi

  if ls /lib/ld-musl-*.so.1 >/dev/null 2>&1 || ls /usr/lib/ld-musl-*.so.1 >/dev/null 2>&1; then
    printf '%s\n' "musl"
    return
  fi

  printf '%s\n' "gnu"
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

require_root() {
  if [ "$(id -u)" -ne 0 ]; then
    echo "This operation requires root privileges." >&2
    exit 1
  fi
}

resolve_openwrt_luci_mode() {
  case "$WITH_LUCI" in
    auto)
      if [ -d /usr/lib/lua/luci ] || uci -q get luci.main.lang >/dev/null 2>&1; then
        printf '%s\n' "1"
      else
        printf '%s\n' "0"
      fi
      ;;
    true|yes|on|1)
      printf '%s\n' "1"
      ;;
    false|no|off|0)
      printf '%s\n' "0"
      ;;
    *)
      echo "Invalid OpenWrt LuCI mode: ${WITH_LUCI}" >&2
      echo "Expected: auto | true | false" >&2
      exit 1
      ;;
  esac
}

json_get_string() {
  key_escaped="$(printf '%s' "$1" | sed 's/[][(){}.^$?+*|/]/\\&/g')"
  printf '%s' "$JSON_CONTENT" | tr -d '\n' | sed -n "s/.*\"${key_escaped}\"[[:space:]]*:[[:space:]]*\"\\([^\"]*\\)\".*/\\1/p"
}

json_get_first_string() {
  for candidate in "$@"; do
    value="$(json_get_string "$candidate")"
    if [ -n "$value" ]; then
      printf '%s\n' "$value"
      return 0
    fi
  done

  return 1
}

resolve_target_id() {
  os_name="$1"
  arch_name="$2"
  libc_name="$3"

  case "$os_name" in
    openwrt)
      case "$arch_name" in
        x64)
          printf '%s\n' "cli-openwrt-x64"
          ;;
        arm64)
          printf '%s\n' "cli-openwrt-arm64"
          ;;
        x86)
          printf '%s\n' "cli-openwrt-x86"
          ;;
        armv7)
          printf '%s\n' "cli-openwrt-armv7"
          ;;
        *)
          return 1
          ;;
      esac
      ;;
    linux)
      case "$arch_name" in
        x64)
          if [ "$libc_name" = "musl" ]; then
            printf '%s\n' "cli-linux-x64-musl"
          else
            printf '%s\n' "cli-linux-x64"
          fi
          ;;
        arm64)
          if [ "$libc_name" = "musl" ]; then
            printf '%s\n' "cli-linux-arm64-musl"
          else
            printf '%s\n' "cli-linux-arm64"
          fi
          ;;
        x86)
          if [ "$libc_name" = "musl" ]; then
            printf '%s\n' "cli-linux-x86-musl"
          else
            printf '%s\n' "cli-linux-x86-gnu"
          fi
          ;;
        arm)
          if [ "$libc_name" = "musl" ]; then
            printf '%s\n' "cli-linux-armv7-musl"
          else
            printf '%s\n' "cli-linux-arm-gnu"
          fi
          ;;
        *)
          return 1
          ;;
      esac
      ;;
    macos)
      case "$arch_name" in
        arm64)
          printf '%s\n' "cli-macos-arm64"
          ;;
        x64)
          printf '%s\n' "cli-macos-x64"
          ;;
        *)
          return 1
          ;;
      esac
      ;;
    freebsd)
      case "$arch_name" in
        x64)
          printf '%s\n' "cli-freebsd-x64"
          ;;
        *)
          return 1
          ;;
      esac
      ;;
    *)
      return 1
      ;;
  esac
}

resolve_legacy_target_key() {
  os_name="$1"
  arch_name="$2"
  libc_name="$3"
  channel_key="$4"

  case "$os_name" in
    openwrt)
      case "$arch_name" in
        x64)
          legacy_arch="x86_64"
          ;;
        arm64)
          legacy_arch="aarch64"
          ;;
        x86)
          legacy_arch="i686"
          ;;
        armv7)
          legacy_arch="armv7"
          ;;
        *)
          return 1
          ;;
      esac
      printf '%s\n' "cli-linux-${legacy_arch}-musl.${channel_key}"
      ;;
    linux)
      case "$arch_name" in
        x64)
          legacy_arch="x86_64"
          ;;
        arm64)
          legacy_arch="aarch64"
          ;;
        x86)
          legacy_arch="i686"
          ;;
        arm)
          if [ "$libc_name" = "musl" ]; then
            legacy_arch="armv7"
          else
            legacy_arch="arm"
          fi
          ;;
        *)
          return 1
          ;;
      esac
      printf '%s\n' "cli-linux-${legacy_arch}-${libc_name}.${channel_key}"
      ;;
    macos)
      case "$arch_name" in
        arm64)
          legacy_arch="aarch64"
          ;;
        x64)
          legacy_arch="x86_64"
          ;;
        *)
          return 1
          ;;
      esac
      printf '%s\n' "cli-macos-${legacy_arch}-darwin.${channel_key}"
      ;;
    freebsd)
      if [ "$arch_name" != "x64" ]; then
        return 1
      fi
      printf '%s\n' "cli-freebsd-x86_64-freebsd.${channel_key}"
      ;;
    *)
      return 1
      ;;
  esac
}

resolve_luci_target_key() {
  channel_key="$1"
  printf '%s\n' "luci-openwrt-all.${channel_key}"
}

resolve_luci_legacy_key() {
  channel_key="$1"
  printf '%s\n' "luci-app-openwrt-all-luci.${channel_key}"
}

install_openwrt_packages() {
  openwrt_with_luci="$1"

  if [ -n "$INSTALL_DIR" ]; then
    echo "--to is not supported on OpenWrt package installs." >&2
    exit 1
  fi

  if ! command -v opkg >/dev/null 2>&1; then
    echo "opkg is required on OpenWrt." >&2
    exit 1
  fi

  require_root

  LUCI_URL=""
  if [ "$openwrt_with_luci" = "1" ]; then
    LUCI_KEY="$(resolve_luci_target_key "$CHANNEL_KEY")"
    LUCI_LEGACY_KEY="$(resolve_luci_legacy_key "$CHANNEL_KEY")"
    LUCI_URL="$(json_get_first_string "$LUCI_KEY" "$LUCI_LEGACY_KEY" || true)"
    if [ -z "$LUCI_URL" ]; then
      echo "Unable to resolve the OpenWrt LuCI package from ${RELEASES_JSON_URL}." >&2
      echo "Target: luci-openwrt-all (channel: ${CHANNEL_KEY})" >&2
      exit 1
    fi
  fi

  if [ "$PRINT_URL" -eq 1 ]; then
    printf '%s\n' "$DOWNLOAD_URL"
    if [ -n "$LUCI_URL" ]; then
      printf '%s\n' "$LUCI_URL"
    fi
    exit 0
  fi

  TMP_DIR="$(mktemp -d)"
  trap 'rm -rf "$TMP_DIR"' EXIT INT TERM

  CLI_IPK_PATH="${TMP_DIR}/fileuni.ipk"
  download_file "$DOWNLOAD_URL" "$CLI_IPK_PATH"

  LUCI_IPK_PATH=""
  if [ -n "$LUCI_URL" ]; then
    LUCI_IPK_PATH="${TMP_DIR}/luci-app-fileuni.ipk"
    download_file "$LUCI_URL" "$LUCI_IPK_PATH"
  fi

  echo "Release metadata: ${RELEASES_JSON_URL}"
  echo "Resolved channel: ${CHANNEL_KEY}"
  echo "Target platform: ${OS_NAME}/${ARCH_NAME}/${LIBC_NAME}"
  echo "OpenWrt LuCI package: $( [ -n "$LUCI_URL" ] && printf '%s' enabled || printf '%s' disabled )"

  opkg update
  if [ -n "$LUCI_IPK_PATH" ]; then
    opkg install "$CLI_IPK_PATH" "$LUCI_IPK_PATH"
    echo "FileUni CLI and LuCI app installed successfully."
    echo "Open LuCI and navigate to Services -> FileUni."
  else
    opkg install "$CLI_IPK_PATH"
    echo "FileUni CLI package installed successfully."
  fi

  exit 0
}

OS_NAME="$(detect_os)"
ensure_supported_host "$OS_NAME"
ARCH_NAME="$(detect_arch)"
LIBC_NAME="$(detect_libc)"

TARGET_ID="$(resolve_target_id "$OS_NAME" "$ARCH_NAME" "$LIBC_NAME")" || {
  echo "Unsupported platform combination: ${OS_NAME}/${ARCH_NAME}${LIBC_NAME:+/${LIBC_NAME}}" >&2
  exit 1
}

CHANNEL_KEY="recommended"
if [ "$CHANNEL" = "stable" ]; then
  CHANNEL_KEY="stable"
elif [ "$CHANNEL" = "pre" ]; then
  CHANNEL_KEY="prerelease"
fi

JSON_CONTENT="$(fetch_text "$RELEASES_JSON_URL")"
LEGACY_KEY="$(resolve_legacy_target_key "$OS_NAME" "$ARCH_NAME" "$LIBC_NAME" "$CHANNEL_KEY" || true)"
DOWNLOAD_URL="$(json_get_first_string "${TARGET_ID}.${CHANNEL_KEY}" "$LEGACY_KEY" || true)"

if [ -z "$DOWNLOAD_URL" ]; then
  echo "Unable to resolve a FileUni download URL from ${RELEASES_JSON_URL}." >&2
  echo "Target: ${TARGET_ID} (channel: ${CHANNEL_KEY})" >&2
  exit 1
fi

if [ "$OS_NAME" = "openwrt" ]; then
  OPENWRT_WITH_LUCI="$(resolve_openwrt_luci_mode)"
  install_openwrt_packages "$OPENWRT_WITH_LUCI"
fi

if [ "$PRINT_URL" -eq 1 ]; then
  printf '%s\n' "$DOWNLOAD_URL"
  exit 0
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

echo "Release metadata: ${RELEASES_JSON_URL}"
echo "Resolved channel: ${CHANNEL_KEY}"
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
    if command -v unzip >/dev/null 2>&1; then
      unzip -q "$ARCHIVE_PATH" -d "$EXTRACT_DIR"
    elif command -v bsdtar >/dev/null 2>&1; then
      bsdtar -xf "$ARCHIVE_PATH" -C "$EXTRACT_DIR"
    else
      echo "unzip or bsdtar is required to extract $ARCHIVE_PATH" >&2
      exit 1
    fi
    ;;
esac

BINARY_PATH="$(find "$EXTRACT_DIR" -type f -name 'fileuni' | head -n 1)"
if [ -z "$BINARY_PATH" ]; then
  echo "Unable to locate the extracted fileuni binary." >&2
  exit 1
fi

install -m 755 "$BINARY_PATH" "${INSTALL_DIR}/fileuni"

echo "FileUni installed at ${INSTALL_DIR}/fileuni"

case ":${PATH}:" in
  *:"${INSTALL_DIR}":*)
    ;;
  *)
    echo "Add ${INSTALL_DIR} to your PATH if it is not already available."
    ;;
esac

echo "Run: fileuni --help"
