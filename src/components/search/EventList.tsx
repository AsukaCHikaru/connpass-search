import { component$ } from "@builder.io/qwik";
import { type ConnpassEvent } from "~/types/connpass";
import styles from "../../styles/index.module.css";
import EventCard from "./EventCard";

interface Props {
  eventList: ConnpassEvent[];
  onCardClick: (event: ConnpassEvent) => void;
}

export default component$<Props>(({eventList, onCardClick}) => {
  return (
    <div class={styles['card-list']}>
      {" "}
      {eventList.map((event) => (
        <EventCard
          key={event.event_id}
          event={event}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
});
