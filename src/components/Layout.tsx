import { Slot, component$, useContext } from "@builder.io/qwik";
import styles from "./Layout.module.css";
import { PortalContext } from "./Portal";
import EventModal from "./EventModal";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default component$(() => {
  const portal = useContext(PortalContext);
  return (
    <>
      <div class={styles.layout}>
        {portal.event.value !== null && (
          <EventModal event={portal.event.value} onClose={portal.onClose} />
        )}
        <Header />
        <div class={styles["layout-grid"]}>
          <Slot />
        </div>
        <Footer />
      </div>
    </>
  );
});
