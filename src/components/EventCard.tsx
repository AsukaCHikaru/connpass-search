import { component$ } from "@builder.io/qwik";
import type { ConnpassEvent } from "~/types/connpass";
import styles from "./EventCard.module.css";

interface Props {
  event: ConnpassEvent;
  onClick: (event: ConnpassEvent) => void;
}

export default component$<Props>(({ event, onClick }) => {
  return (
    <div class={styles.card} onClick$={() => onClick(event)}>
      <h5>{event.title}</h5>
      {event.catch && <h6>{event.catch}</h6>}
      <p>
        {event.address} {event.place}
      </p>
      <p>{event.started_at}</p>
      <p>
        {event.accepted}/{event.limit}
      </p>
      <a href={event.event_url} target="_blank" rel="noopener noreferrer">
        link
      </a>
    </div>
  );
});
