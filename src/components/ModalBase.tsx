import { Slot, component$ } from "@builder.io/qwik";
import styles from "./ModalBase.module.css";

interface Props {
  onClose: () => void;
}

export const ModalBase = component$<Props>(({ onClose }) => {
  return (
    <div class={styles["modal-base-anchor"]}>
      <div class={styles["modal-base"]}>
        <div class={styles["modal-overlay"]} onClick$={onClose} />
        <div class={styles["modal-content"]}>
          <button class={styles["modal-close-btn"]} onClick$={onClose} />
          <Slot />
        </div>
      </div>
    </div>
  );
});
