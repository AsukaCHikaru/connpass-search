import { Slot, component$ } from "@builder.io/qwik";
import styles from './Layout.module.css';

export default component$(() => {
  return (
    <div class={styles.layout}>
      <Slot />
    </div>
  );
});
