import { $, component$, useSignal, useStore } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import EventCard from "~/components/search/EventCard";
import KeywordSelector from "~/components/search/KeywordSelector";
import { fetchEvents } from "~/services/eventService";
import type { ConnpassEvent, ConnpassEventResponse } from "~/types/connpass";
import styles from "../../styles/index.module.css";
import EventModal from "~/components/search/EventModal";

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
      <div>
        <div style={{ display: "flex" }}>
          <KeywordSelector keywords={["javascript", "python", "php", "AI"]} />
        </div>
        <div class={styles["card-list"]}>
          {events.value.events.map((event) => (
            <EventCard
              key={event.event_id}
              event={event}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </>
  );
});
