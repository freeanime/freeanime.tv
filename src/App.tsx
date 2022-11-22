import { useSearchParams } from "@solidjs/router";
import { Switch, Match } from "solid-js";

import Root from "./pages/Root";
import Episode from "./pages/Episode";
import Title from "./pages/Title";
import Source from "./pages/Source";

export default () => {
  const [searchParams] = useSearchParams();
  return (
    <Switch fallback={<Root />}>
      <Match when={searchParams.e}>
        <Episode />
      </Match>
      <Match when={searchParams.t}>
        <Title />
      </Match>
      <Match when={searchParams.s}>
        <Source />
      </Match>
    </Switch>
  );
};
