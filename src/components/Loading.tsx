import { type Signal, createContextId, component$ } from "@builder.io/qwik";
import styles from './Loading.module.css';

export const LoadingContext = createContextId<{
  loading: Signal<boolean>;
}>("loading");

export default component$(() => {
  return <div class={styles["loading-backdrop"]}>LOADING</div>;
});
