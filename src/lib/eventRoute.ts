export type EventType = 'corporate' | 'social';

const DEFAULT_PORTFOLIO_ID_BY_EVENT_TYPE: Record<EventType, number> = {
  corporate: 27,
  social: 30,
};

const getStorageKeyForEventType = (eventType: EventType) => `bg.portfolio.${eventType}`;

const parsePortfolioId = (rawValue: string | null | undefined) => {
  if (!rawValue) {
    return undefined;
  }

  const parsedValue = Number(rawValue.trim());
  return Number.isInteger(parsedValue) && parsedValue > 0 ? parsedValue : undefined;
};

const getPortfolioIdFromCurrentUrl = () => {
  if (typeof window === 'undefined') {
    return undefined;
  }

  const searchParams = new URLSearchParams(window.location.search);
  return parsePortfolioId(searchParams.get('portfolioId'));
};

const getStoredPortfolioId = (eventType: EventType) => {
  if (typeof window === 'undefined') {
    return undefined;
  }

  return parsePortfolioId(window.localStorage.getItem(getStorageKeyForEventType(eventType)));
};

export const rememberPortfolioIdForEventType = (eventType: EventType, portfolioId: number | undefined) => {
  if (typeof window === 'undefined') {
    return;
  }

  if (typeof portfolioId !== 'number' || !Number.isInteger(portfolioId) || portfolioId <= 0) {
    return;
  }

  window.localStorage.setItem(getStorageKeyForEventType(eventType), String(portfolioId));
};

export const getPostVerificationRoute = (portfolioId: number, eventType: EventType = 'corporate') => {
  return eventType === 'social' ? `/social-profile/${portfolioId}` : `/corporate-profile/${portfolioId}`;
};

export const getDefaultPortfolioIdForEventType = (eventType: EventType): number => {
  return (
    getPortfolioIdFromCurrentUrl() ??
    getStoredPortfolioId(eventType) ??
    DEFAULT_PORTFOLIO_ID_BY_EVENT_TYPE[eventType]
  );
};
