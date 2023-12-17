import { component$ } from "@builder.io/qwik";
import KeywordSelector from "./KeywordSelector";
import styles from './SearchPreference.module.css';

export default component$(() => {
  return (
    <div class={styles['preference-wrapper']}>
      <KeywordSelector keywords={["javascript", "python", "php", "AI"]} />
    </div>
  );
});
