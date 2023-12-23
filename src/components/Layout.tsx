import { Slot, component$, useContext } from "@builder.io/qwik";
import styles from "./Layout.module.css";
import { PortalContext } from "./Portal";
import EventModal from "./EventModal";

export default component$(() => {
  const portal = useContext(PortalContext);
  return (
    <>
      {portal.event.value !== null && (
        <EventModal event={portal.event.value} onClose={portal.onClose} />
      )}
      <div class={styles.layout}>
        <Slot />
      </div>
    </>
  );
});
