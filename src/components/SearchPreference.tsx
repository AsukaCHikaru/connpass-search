import { component$ } from "@builder.io/qwik";
import KeywordSelector from "./KeywordSelector";
import styles from './SearchPreference.module.css';
import { KEYWORDS, PREFECTURES, generateMonths } from "~/consts/requestOrder";

export default component$(() => {
  return (
    <div class={styles['preference-wrapper']}>
      <KeywordSelector title="キーワード" parameter="keyword_or"  keywords={KEYWORDS} />
      <KeywordSelector title="エリア" parameter="keyword_or" keywords={PREFECTURES} />
      <KeywordSelector title="開催月" parameter="ym" keywords={generateMonths()} />
    </div>
  );
});
