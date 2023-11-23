import type { ConnpassEventRequestQuery, ConnpassEventResponse } from "~/types/connpass";

const CONNPASS_API_ENDPOINT = "https://connpass.com/api/v1/event/";

const serializeQuery = (query?: ConnpassEventRequestQuery) => {
  if (!query) {
    return "";
  }

  const searchParams = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    searchParams.set(key, value.toString());
  });
  return `?${searchParams.toString()}`;
};

export const fetchEvents = async (query?: ConnpassEventRequestQuery) => {
  const serializedQuery = serializeQuery(query);
  const response: Response = await fetch(CONNPASS_API_ENDPOINT + serializedQuery, {
    headers: { Accept: "application/json" },
  });
  const data = await response.json();
  return data as ConnpassEventResponse;
};
