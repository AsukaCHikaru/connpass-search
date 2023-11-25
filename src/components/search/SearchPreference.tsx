import { component$ } from "@builder.io/qwik";
import KeywordSelector from "./KeywordSelector";

export default component$(() => {
  return (
    <div style={{ display: "flex" }}>
      <KeywordSelector keywords={["javascript", "python", "php", "AI"]} />
    </div>
  );
});
