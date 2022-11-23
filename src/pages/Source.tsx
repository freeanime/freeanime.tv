import { useSearchParams } from "@solidjs/router";
import { createSignal } from "solid-js";

export default () => {
  const [searchParams] = useSearchParams();
  const [catalog, setCatalog] = createSignal([]);

  return (
    <div>
      <div>this is the source catalog page</div>
    </div>
  );
};
