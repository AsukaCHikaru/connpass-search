import {
  $,
  component$,
  useContextProvider,
  useSignal,
} from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchEvents } from "~/services/eventService";
import type { ConnpassEvent, ConnpassEventResponse } from "~/types/connpass";
import EventList from "~/components/EventList";
import Layout from "~/components/Layout";
import SearchPreference from "~/components/SearchPreference";
import { PortalContext } from "~/components/Portal";

export const useEvents = routeLoader$(async (requestEvent) => {
  const queries = Object.fromEntries(requestEvent.query.entries())
  const data = (await fetchEvents(queries)) as ConnpassEventResponse;
  return data;
});

export default component$(() => {
  const events = useEvents();
  const selectedEvent = useSignal<ConnpassEvent | null>(null);
  const handleModalClose = $(() => {
    selectedEvent.value = null;
    document.body.style.overflow = 'scroll';
  });
  useContextProvider(PortalContext, {
    onClose: handleModalClose,
    event: selectedEvent,
  });

  const handleCardClick = $((event: ConnpassEvent) => {
    selectedEvent.value = event;
    document.body.style.overflow = 'hidden'
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
