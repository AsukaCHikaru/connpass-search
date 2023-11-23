import { component$ } from "@builder.io/qwik";
import type { ConnpassEvent } from "~/types/connpass";
import styles from '../../styles/EventCard.module.css'

interface Props {
  event: ConnpassEvent;
}

export default component$<Props>(({ event }) => {
  return (
    <div class={styles.card}>
      <h5>{event.title}</h5>
      {event.catch && <h6>{event.catch}</h6>}
      <p>{event.address} {event.place}</p>
      <p>{event.started_at}</p>
      <p>{event.accepted}/{event.limit}</p>
      <a href={event.event_url} target="_blank" rel="noopener noreferrer">link</a>
    </div>
  );
});
