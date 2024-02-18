import { type Signal, createContextId } from "@builder.io/qwik";

export const LoadingContext = createContextId<{
  loading: Signal<boolean>;
}>("loading");
