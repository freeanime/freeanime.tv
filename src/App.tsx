import { useSearchParams } from "@solidjs/router";
import { Switch, Match, Show } from "solid-js";

import Root from "./pages/Root";
import Episode from "./pages/Episode";
import Title from "./pages/Title";
import Catalog from "./pages/Catalog";
import NavBar from "./components/NavBar";

export default () => {
  const [searchParams] = useSearchParams();
  return (
    <Show when={searchParams.s} fallback={<Root />}>
      <NavBar />
      <Switch fallback={<Catalog />}>
        <Match when={searchParams.e}>
          <Episode />
        </Match>
        <Match when={searchParams.t}>
          <Title />
        </Match>
      </Switch>
    </Show>
  );
};
