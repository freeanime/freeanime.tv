import { useSearchParams } from "@solidjs/router";
import { Switch, Match, Show } from "solid-js";

import Root from "./pages/Root";
import Episode from "./pages/Episode";
import Title from "./pages/Title";
import Catalog from "./pages/Catalog";
import NavBar from "./components/NavBar";

import "./assets/index.css";

export default () => {
  console.warn(
    "WHOLE PAGE RENDER! UNLESS THIS WAS INTENTIONAL, SEEING THIS MORE THAN ONCE IS BAD!"
  );
  const [searchParams] = useSearchParams();
  return (
    <Show when={searchParams.s} fallback={<Root />}>
      <NavBar />
      <div class="max-w-[1450px] mx-auto">
        <Switch fallback={<Catalog />}>
          <Match when={searchParams.e}>
            <Episode />
          </Match>
          <Match when={searchParams.t}>
            <Title />
          </Match>
        </Switch>
      </div>
    </Show>
  );
};
