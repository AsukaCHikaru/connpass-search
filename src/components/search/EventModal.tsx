import { component$ } from "@builder.io/qwik";
import type { ConnpassEvent } from "~/types/connpass";
import { ModalBase } from "./ModalBase";

interface Props {
  event: ConnpassEvent;
  onClose: () => void;
}

export default component$<Props>(({ event, onClose }) => {
  return (
    <ModalBase onClose={onClose}>
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
    </ModalBase>
  );
});
