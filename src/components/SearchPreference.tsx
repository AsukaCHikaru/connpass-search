import { $, component$ } from "@builder.io/qwik";
import KeywordSelector from "./KeywordSelector";
import styles from "./SearchPreference.module.css";
import { KEYWORDS, PREFECTURES, generateMonths } from "~/consts/requestOrder";
import { useSearchQuery } from "~/hooks/useSearchQuery";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const searchQuery = useSearchQuery();
  const nav = useNavigate();
  const activeSearchPreferences = Object.values(searchQuery.value).flat();

  const handleClearClick = $(() => {
    nav("/");
  });

  return (
    <div class={styles["preference-wrapper"]}>
      {activeSearchPreferences.length ? (
        <div class={styles["active-preference-container"]}>
          <button
            class={styles["clear-preference-btn"]}
            onClick$={handleClearClick}
          >
            CLEAR
          </button>
          <ul>
            {activeSearchPreferences.map((preference) => (
              <li key={preference}>{preference}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <KeywordSelector
        title="開催月"
        parameter="ym"
        keywords={generateMonths()}
      />
      <KeywordSelector
        title="キーワード"
        parameter="keyword_or"
        keywords={KEYWORDS}
      />
      <KeywordSelector
        title="エリア"
        parameter="keyword_or"
        keywords={PREFECTURES}
      />
    </div>
  );
});
