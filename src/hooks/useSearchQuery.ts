import { useComputed$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export const useSearchQuery = () => {
  const location = useLocation();
  const searchQuery = useComputed$(() => {
    const { searchParams } = location.url;
    return Object.fromEntries(
      Array.from(searchParams.entries()).map(([key, value]) => [
        key,
        value.split(",").filter(Boolean),
      ])
    );
  });

  return searchQuery;
};
