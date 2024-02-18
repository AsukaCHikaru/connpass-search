import { component$ } from "@builder.io/qwik";
import styles from "./Footer.module.css";

export const Footer = component$(() => {
  return (
    <footer class={styles["footer-container"]}>
      <p class={styles["footer-disclaimer"]}>
        {`connpass search is an independent website and is not associated with BeProud or copnnpass.\nconnpass is registered trademarks of BeProud Inc..`}
      </p>
      <a
        href="https://github.com/AsukaCHikaru/connpass-search"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </footer>
  );
});
