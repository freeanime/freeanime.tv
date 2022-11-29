import { useSearchParams } from "@solidjs/router";
import { Switch, Match, Show } from "solid-js";

import Root from "./pages/Root";
import Episode from "./pages/Episode";
import Title from "./pages/Title";
import Catalog from "./pages/Catalog";
import NavBar from "./components/NavBar";

import "./assets/index.css";

const Footer = () => {
  return (
    <footer id="footer" class="mt-3sticky mx-auto max-w-[1600px]">
      <hr class="border-[#666]" />
      <div class="flex flex-wrap justify-between text-[#666] text-sm m-6">
        <span>
          Disclaimer: FreeAnime.tv does not store any files on its server. All
          contents are provided by non-affiliated third parties.
        </span>
        <span>
          FreeAnime.tv is open source. Help improve it
          <a
            href="https://github.com/freeanime/freeanime.tv"
            class="fa fa-github text-xl ml-2"
          />
        </span>
      </div>
    </footer>
  );
};

export default () => {
  console.warn(
    "WHOLE PAGE RENDER! UNLESS THIS WAS INTENTIONAL, SEEING THIS MORE THAN ONCE IS BAD!"
  );
  const [searchParams] = useSearchParams();
  return (
    <Show when={searchParams.s} fallback={<Root />}>
      <NavBar />
      <div class="max-w-[1600px] mx-auto h-min-[100vh]">
        <Switch fallback={<Catalog />}>
          <Match when={searchParams.e}>
            <Episode />
          </Match>
          <Match when={searchParams.t}>
            <Title />
          </Match>
        </Switch>
      </div>
      <Footer />
    </Show>
  );
};
