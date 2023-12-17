import { component$ } from "@builder.io/qwik";
import KeywordSelector from "./KeywordSelector";
import styles from './SearchPreference.module.css';
import { KEYWORDS, PREFECTURES, generateMonths } from "~/consts/requestOrder";

export default component$(() => {
  return (
    <div class={styles['preference-wrapper']}>
      <KeywordSelector parameter="keyword_or"  keywords={KEYWORDS} />
      <KeywordSelector parameter="keyword_or" keywords={PREFECTURES} />
      <KeywordSelector parameter="ym" keywords={generateMonths()} />
    </div>
  );
});
