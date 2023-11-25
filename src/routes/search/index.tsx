import { $, component$, useSignal, useStore } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchEvents } from "~/services/eventService";
import type { ConnpassEvent, ConnpassEventResponse } from "~/types/connpass";
import EventModal from "~/components/search/EventModal";
import EventList from "~/components/search/EventList";
import Layout from "~/components/search/Layout";
import SearchPreference from "~/components/search/SearchPreference";

export const useEvents = routeLoader$(async (requestEvent) => {
  const keyword = requestEvent.query.get("keyword") || "";
  const data = (await fetchEvents({ keyword })) as ConnpassEventResponse;
  return data;
});

export default component$(() => {
  const events = useEvents();
  const selectedEvent = useStore<{ event: ConnpassEvent | null }>({
    event: null,
  });
  const modalRef = useSignal<HTMLDialogElement>();

  const handleCardClick = $((event: ConnpassEvent) => {
    selectedEvent.event = event;
    modalRef.value?.showModal();
  });

  const handleModalClose = $(() => {
    modalRef.value?.close();
  });

  return (
    <>
      {selectedEvent.event && (
        <EventModal
          event={selectedEvent.event}
          ref={modalRef}
          onClose={handleModalClose}
        />
      )}
      <Layout>
        <SearchPreference />
        <EventList
          eventList={events.value.events}
          onCardClick={handleCardClick}
        />
      </Layout>
    </>
  );
});
