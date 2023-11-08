import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

const CONNPASS_API_ENDPOINT = "https://connpass.com/api/v1/event/";

export const fetchEvents = async () => {
  const response: Response = await fetch(CONNPASS_API_ENDPOINT, {
    headers: { Accept: "application/json" },
  });
  const data = await response.json();
  return data;
};

export const useEvents = routeLoader$(async () => {
  const data = await fetchEvents();
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
