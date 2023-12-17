import { component$ } from "@builder.io/qwik";
import KeywordSelector from "./KeywordSelector";
import styles from './SearchPreference.module.css';
import { KEYWORDS, PREFECTURES } from "~/consts/requestOrder";

export default component$(() => {
  return (
    <div class={styles['preference-wrapper']}>
      <KeywordSelector keywords={KEYWORDS} />
      <KeywordSelector keywords={PREFECTURES} />
    </div>
  );
});
