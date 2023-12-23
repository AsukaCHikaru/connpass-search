import { component$ } from "@builder.io/qwik";
import styles from "./Header.module.css";

export const Header = component$(() => {
  return (
    <header class={styles["header-container"]}>
      <h1 class={styles["header-title"]}>
        <a href="/">connpass search</a>
      </h1>
      <h2 class={styles['header-desc']}>UNOFFICIAL connpass event lookup</h2>
    </header>
  );
});
