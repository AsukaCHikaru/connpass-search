import {
  $,
  component$,
  useContextProvider,
  useSignal,
} from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchEvents } from "~/services/eventService";
import type { ConnpassEvent, ConnpassEventResponse } from "~/types/connpass";
import EventList from "~/components/search/EventList";
import Layout from "~/components/search/Layout";
import SearchPreference from "~/components/search/SearchPreference";
import { PortalContext } from "~/components/search/Portal";

export const useEvents = routeLoader$(async (requestEvent) => {
  const keyword = requestEvent.query.get("keyword") || "";
  const data = (await fetchEvents({ keyword })) as ConnpassEventResponse;
  return data;
});

export default component$(() => {
  const events = useEvents();
  const selectedEvent = useSignal<ConnpassEvent | null>(null);
  const handleModalClose = $(() => {
    selectedEvent.value = null;
  });
  useContextProvider(PortalContext, {
    onClose: handleModalClose,
    event: selectedEvent,
  });

  const handleCardClick = $((event: ConnpassEvent) => {
    selectedEvent.value = event;
  });

  return (
    <Layout>
      <SearchPreference />
      <EventList
        eventList={events.value.events}
        onCardClick={handleCardClick}
      />
    </Layout>
  );
});
