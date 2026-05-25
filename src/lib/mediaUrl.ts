const getBackendBaseCandidate = () => {
  const explicitBase =
    import.meta.env.VITE_BASE_URL?.trim() ||
    import.meta.env.VITE_BACKEND_URL?.trim() ||
    import.meta.env.VITE_ACCESS_REQUEST_API_BASE?.trim() ||
    '';

  if (!explicitBase) {
    return '';
  }

  return explicitBase
    .replace(/\/api\/accessrequest\/?$/i, '')
    .replace(/\/api\/?$/i, '')
    .replace(/\/+$/, '');
};

const isLocalDevOrigin = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  return ['localhost', '127.0.0.1', '::1'].includes(window.location.hostname);
};

export const BACKEND_BASE_URL = getBackendBaseCandidate();

export const resolveBackendMediaUrl = (url?: string) => {
  const value = url?.trim() ?? '';

  if (!value) return '';
  if (/^(data|blob):/i.test(value)) return value;

  if (/^https?:\/\//i.test(value)) {
    try {
      const absolute = new URL(value);
      const backendOrigin = BACKEND_BASE_URL ? new URL(BACKEND_BASE_URL).origin : '';

      if (backendOrigin && absolute.origin === backendOrigin && absolute.pathname.startsWith('/uploads/')) {
        if (isLocalDevOrigin()) {
          return `${absolute.pathname}${absolute.search}${absolute.hash}`;
        }

        return absolute.toString();
      }
    } catch {
      return value;
    }

    return value;
  }

  const normalizedPath = value.startsWith('/') ? value : `/${value}`;
  if (normalizedPath.startsWith('/uploads/')) {
    if (isLocalDevOrigin()) {
      return normalizedPath;
    }

    return BACKEND_BASE_URL ? `${BACKEND_BASE_URL}${normalizedPath}` : normalizedPath;
  }

  return BACKEND_BASE_URL ? `${BACKEND_BASE_URL}${normalizedPath}` : normalizedPath;
};