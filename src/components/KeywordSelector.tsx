import { component$, $ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { useSearchQuery } from "~/hooks/useSearchQuery";
import styles from "./KeywordSelector.module.css";

interface Props {
  parameter: string;
  keywords: string[];
  title: string;
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

export default component$<Props>(({ parameter, keywords, title }) => {
  const nav = useNavigate();
  const searchQuery = useSearchQuery();

  const handleClick = $(async (keyword: string) => {
    const newQuery = Object.fromEntries(
      Object.entries({
        ...searchQuery.value,
        [parameter]: toggle(keyword, searchQuery.value[parameter]),
      }).map(([key, value]) => [key, value.join(",")])
    );
    const searchParams = new URLSearchParams(newQuery);
    await nav(`/?${searchParams.toString()}`);
  });

  return (
    <>
      <h3 class={styles["keyword-header"]}>{title}</h3>
      <div class={styles["keyword-container"]}>
        {keywords.map((keyword) => (
          <button
            key={`keyowrd-${keyword}`}
            onClick$={() => handleClick(keyword)}
            class={styles["keyword-button"]}
            data-actived={searchQuery.value[parameter]?.includes(keyword)}
          >
            {keyword}
          </button>
        ))}
      </div>
    </>
  );
});
