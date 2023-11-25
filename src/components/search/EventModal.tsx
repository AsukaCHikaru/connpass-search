import { type Signal, component$ } from "@builder.io/qwik";
import type { ConnpassEvent } from "~/types/connpass";
import styles from "./EventModal.module.css";

interface Props {
  ref: Signal<HTMLDialogElement | undefined>;
  event: ConnpassEvent;
  onClose: () => void;
}

export default component$<Props>(({ event, ref, onClose }) => {
  return (
    <dialog ref={ref} onClick$={onClose}>
      <div class={styles.modal}>
        <button class={styles["close-button"]} onClick$={onClose}>
          X
        </button>
        <h2>{event.title}</h2>
        {event.catch && <h6>{event.catch}</h6>}
        <p dangerouslySetInnerHTML={event.description}></p>
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
    </dialog>
  );
});
