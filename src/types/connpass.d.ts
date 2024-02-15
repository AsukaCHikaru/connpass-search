import type { EventRequestOrder } from "~/consts/requestOrder";

// ref: https://connpass.com/about/api/
type ConnpassEvent = {
  event_id: number;
  title: string;
  catch: string;
  description: string;
  event_url: string;
  hash_tag: string;
  started_at: string;
  ended_at: string;
  limit: number | null;
  event_type: string;
  series: {
    id: number;
    title: string;
    url: string;
  }
  address: string;
  place: string;
  lat: string;
  lon: string;
  owner_id: number;
  owner_nickname: string;
  owner_display_name: string;
  accepted: number;
  waiting: number;
  updated_at: string;
};

export type ConnpassEventResponse = {
  results_returned: number;
  results_available: number;
  results_start: number;
  events: ConnpassEvent[];
};

export type ConnpassEventRequestQuery = {
  event_id?: number;
  keyword?: string;
  keyword_or?: string;
  ym?: string;
  ymd?: string;
  nickname?: string;
  owner_nickname?: string;
  series_id?: number;
  start?: number;
  order?: EventRequestOrder;
  count?: number;
  format?: string;
}