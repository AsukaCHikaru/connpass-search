import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import KeywordSelector from "~/components/search/KeywordSelector";
import { fetchEvents } from "~/services/eventService";
import type { ConnpassEventResponse } from "~/types/connpass";

export const useEvents = routeLoader$(async (requestEvent) => {
  const keyword = requestEvent.query.get("keyword") || "";
  const data = (await fetchEvents({ keyword })) as ConnpassEventResponse;
  return data;
});

export default component$(() => {
  const events = useEvents();

  return (
    <div>
      <div style={{ display: "flex" }}>
        <KeywordSelector keywords={["javascript", "python", "php", "AI"]} />
      </div>
      <ul>
        {events.value.events.map((event) => (
          <li key={event.event_id}>{event.catch}</li>
        ))}
      </ul>
    </div>
  );
});
