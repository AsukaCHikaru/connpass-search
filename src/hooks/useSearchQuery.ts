import { useComputed$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export const useSearchQuery = () => {
  const location = useLocation();
  const searchQuery = useComputed$(() => {
    const { searchParams } = location.url;
    return {
      keyword: (searchParams.get("keyword") || "").split(",").filter(Boolean),
    };
  });

  return searchQuery;
};
