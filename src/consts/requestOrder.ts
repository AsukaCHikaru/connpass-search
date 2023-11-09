export const EVENT_REQUEST_ORDER = {
  UPDATED: 1,
  START: 2,
  PUBLISHED: 3,
} as const;
export type EventRequestOrder = typeof EVENT_REQUEST_ORDER[keyof typeof EVENT_REQUEST_ORDER];