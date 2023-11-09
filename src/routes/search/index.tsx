import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchEvents } from "~/services/eventService";
import type { ConnpassEventResponse } from "~/types/connpass";

export const useEvents = routeLoader$(async () => {
  const data = (await fetchEvents()) as ConnpassEventResponse;
  return data;
});

export default component$(() => {
  const events = useEvents();
  return (
    <div>
      <ul>
        {events.value.events.map((event) => (
          <li key={event.event_id}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
});
