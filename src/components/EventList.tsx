import { component$ } from "@builder.io/qwik";
import { type ConnpassEvent } from "~/types/connpass";
import styles from "./EventList.module.css";
import EventCard from "./EventCard";

interface Props {
  eventList: ConnpassEvent[];
  onCardClick: (event: ConnpassEvent) => void;
}

export default component$<Props>(({ eventList, onCardClick }) => {
  return (
    <div class={styles["list-wrapper"]}>
      <div class={styles["card-list"]}>
        {eventList.map((event) => (
          <EventCard key={event.event_id} event={event} onClick={onCardClick} />
        ))}
      </div>
    </div>
  );
});
