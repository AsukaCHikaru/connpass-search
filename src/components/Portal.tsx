import { type Signal, createContextId } from "@builder.io/qwik";
import { type ConnpassEvent } from "~/types/connpass";

export const PortalContext = createContextId<{
  onClose: () => void;
  event: Signal<ConnpassEvent | null>;
}>("portal");
