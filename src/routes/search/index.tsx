import { component$, useStore } from "@builder.io/qwik";
import { routeLoader$, useNavigate } from "@builder.io/qwik-city";
import { fetchEvents } from "~/services/eventService";
import type { ConnpassEventResponse } from "~/types/connpass";

export const useEvents = routeLoader$(async (requestEvent) => {
  const keyword = requestEvent.query.get("keyword") || "";
  const data = (await fetchEvents({ keyword })) as ConnpassEventResponse;
  return data;
});

const toggle: <T>(value: T, list: T[]) => T[] = (value, list) => {
  const set = new Set(list);
  if (set.has(value)) {
    set.delete(value);
  } else {
    set.add(value);
  }
  return Array.from(set);
};

export default component$(() => {
  const category = useStore<{ list: string[] }>({ list: [] });
  const events = useEvents();
  const nav = useNavigate();

  return (
    <div>
      <div style={{ display: "flex" }}>
        {["javascript", "python", "php", "AI"].map((c) => (
          <button
            key={`category-${c}`}
            onClick$={async () => {
              category.list = toggle(c, category.list);
              await nav(
                `/search?keyword=${encodeURIComponent(category.list.join(","))}`
              );
            }}
          >
            {c}
          </button>
        ))}
      </div>
      <ul>
        {events.value.events.map((event) => (
          <li key={event.event_id}>{event.catch}</li>
        ))}
      </ul>
    </div>
  );
});
