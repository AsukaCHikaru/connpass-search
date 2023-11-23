import { component$, $ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { useSearchQuery } from "~/hooks/useSearchQuery";

interface Props {
  keywords: string[];
}

const toggle = (value: string, list: string[]) => {
  const set = new Set(list);
  if (set.has(value)) {
    set.delete(value);
  } else {
    set.add(value);
  }
  return Array.from(set);
};

export default component$<Props>(({ keywords }) => {
  const nav = useNavigate();
  const searchQuery = useSearchQuery();

  const handleClick = $(async (keyword: string) => {
    const newQuery = {
      ...searchQuery.value,
      keyword: toggle(keyword, searchQuery.value.keyword).join(","),
    };
    const searchParams = new URLSearchParams(newQuery);
    await nav(`/search?${searchParams.toString()}`);
  });

  return (
    <div>
      <ul>
        {keywords.map((keyword) => (
          <li key={`keyowrd-${keyword}`}>
            <button
              onClick$={() => handleClick(keyword)}
              style={{
                fontWeight: searchQuery.value.keyword.includes(keyword)
                  ? 900
                  : 300,
              }}
            >
              {keyword}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});
