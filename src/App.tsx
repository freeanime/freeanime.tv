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
      <div class="mx-auto bg-freeAnime-bgGray">
        <div class="max-w-[1750px] mx-auto">
          <Switch fallback={<Catalog />}>
            <Match when={searchParams.e}>
              <Episode />
            </Match>
            <Match when={searchParams.t}>
              <Title />
            </Match>
          </Switch>
        </div>
        <div class="max-w-[1750px] mx-auto">
          <hr class="border-[#666] mt-3" />
          <footer id="footer" class="mt-3 h-[50px] sticky top-[100vh]">
            <div class="justify-between flex flex-wrap">
              <p class="text-[#666] self-left">
                Disclaimer: FreeAnime.tv does not store any files on its server.
                All contents are provided by non-affiliated third parties.
              </p>
              <p class="text-[#666] self-right">
                FreeAnime.tv is open source. Help improve it
              </p>
            </div>
          </footer>
        </div>
      </div>
    </Show>
  );
};
