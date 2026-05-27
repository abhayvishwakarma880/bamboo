export type EventType = 'corporate' | 'social';

const DEFAULT_PORTFOLIO_ID_BY_EVENT_TYPE: Record<EventType, number> = {
  corporate: 27,
  social: 30,
};

const SLUG_TO_ID: Record<string, number> = {
  'bamboo-corporate': 27,
  'bamboo-social': 30,
};

const ID_TO_SLUG: Record<number, string> = {
  27: 'bamboo-corporate',
  30: 'bamboo-social',
};

// Helper to convert any path value (slug or ID) to a resolved portfolioId number
export const resolvePortfolioId = (value: string | null | undefined): number | undefined => {
  if (!value) return undefined;
  const trimmed = value.trim();
  
  if (trimmed in SLUG_TO_ID) {
    return SLUG_TO_ID[trimmed];
  }
  
  const parsed = Number(trimmed);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : undefined;
};

// Helper to convert a portfolioId number to its path value slug or string
export const getPortfolioPathValue = (portfolioId: number): string => {
  return ID_TO_SLUG[portfolioId] ?? String(portfolioId);
};

const getStorageKeyForEventType = (eventType: EventType) => `bg.portfolio.${eventType}`;

const parsePortfolioId = (rawValue: string | null | undefined) => {
  return resolvePortfolioId(rawValue);
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
  const pathValue = getPortfolioPathValue(portfolioId);
  return eventType === 'social' ? `/social-profile/${pathValue}` : `/corporate-profile/${pathValue}`;
};

export const getDefaultPortfolioIdForEventType = (eventType: EventType): number => {
  return (
    getPortfolioIdFromCurrentUrl() ??
    getStoredPortfolioId(eventType) ??
    DEFAULT_PORTFOLIO_ID_BY_EVENT_TYPE[eventType]
  );
};
