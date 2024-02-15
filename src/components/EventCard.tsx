import { component$ } from "@builder.io/qwik";
import type { ConnpassEvent } from "~/types/connpass";
import styles from "./EventCard.module.css";

const getHeadcountLabel = (accepted: number, limit: number | null) => {
  if (limit === null) {
    return `${accepted}人（定員なし）`;
  }

  return `${accepted} / ${limit}人`;
};

interface Props {
  event: ConnpassEvent;
  onClick: (event: ConnpassEvent) => void;
}

export default component$<Props>(({ event, onClick }) => {
  console.log(event);
  const time = new Date(event.started_at).toLocaleString("ja-jp", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div class={styles.card} onClick$={() => onClick(event)}>
      <h5>{event.title}</h5>
      {event.catch && <h6>{event.catch}</h6>}
      <p>
        {event.address} {event.place}
      </p>
      <p>{time}</p>
      <p>{getHeadcountLabel(event.accepted, event.limit)}</p>
      <a href={event.event_url} target="_blank" rel="noopener noreferrer">
        connpass link
      </a>
    </div>
  );
});
