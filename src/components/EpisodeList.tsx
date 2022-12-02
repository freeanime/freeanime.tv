import { useSearchParams } from "@solidjs/router";
import {
  Component,
  createEffect,
  createSignal,
  For,
  Index,
  Show,
} from "solid-js";
import { createStore } from "solid-js/store";
import { EpisodeData, EpisodeListData } from "../util/interfaces.js";
import QueryA from "./QueryA.jsx";

const EpisodeSquare: Component<{ data: EpisodeData }> = (props) => {
  const [searchParams] = useSearchParams();
  return (
    <Show
      when={props.data.id.toString() !== searchParams.e}
      fallback={
        <QueryA
          setParams={{ e: props.data.id }}
          class="rounded-md bg-[#2299ee] m-1 w-[30px] h-[20px]"
        >
          <p class="font-sans font-medium text-center text-sm flex-grow text-[#f8fafc]">
            {String(props.data.episodeNumber).padStart(3, "0")}
          </p>
        </QueryA>
      }
    >
      <QueryA
        setParams={{ e: props.data.id }}
        class="rounded-md bg-neutral-600 hover:bg-[#2299ee] m-1 w-[30px] h-[20px]"
      >
        <p class="font-sans font-medium text-center text-sm text-neutral-300 hover:text-[#f8fafc]">
          {String(props.data.episodeNumber).padStart(3, "0")}
        </p>
      </QueryA>
    </Show>
  );
};

const EpisodePageSelector: Component<{ data?: EpisodeListData }> = (props) => {
  const [currentPage, setCurrentPage] = createSignal(props.data?.currentPage);

  // const separators: string[] = [];

  const [separators, setSeparators] = createStore<Array<string>>([]);

  createEffect(() => {
    const totalPages = props.data?.totalPages;
    if (totalPages) {
      const tempSeparators: string[] = [];
      for (let i = 1; i <= totalPages; i += 1) {
        const maxEpisode = i * 100;
        const minEpisode = maxEpisode - 99;
        tempSeparators.push(
          `${String(minEpisode).padStart(3, "0")}-${maxEpisode}`
        );
      }
      setSeparators(tempSeparators);
    }
  });

  return (
    <div>
      <div class="mt-1 pt-3 max-w-[300px] max-h-[50px] bg-black flex rounded-md ml-3 mt-6 p-3">
        {/* <QueryA class="bg-white" setParams={{ p: 2 }}>
          Separators
        </QueryA> */}
        <div class="bg-white">{separators}</div>
        <Index each={separators}>
          {(separator) => <text class="text-white">{separator()}</text>}
        </Index>
      </div>
    </div>
  );
};

const EpisodeList: Component<{ data?: EpisodeListData }> = (props) => {
  return (
    <>
      <div>
        <EpisodePageSelector data={props.data} />
        <div class="flex flex-wrap justify-center m-3 p-3 w-[300px] h-[650px] bg-black rounded-md">
          <For
            each={props.data?.episodes}
            fallback={
              <div class="rounded-md bg-[#2299ee] m-1 w-[30px] h-[20px] animate-pulse" />
            }
          >
            {(episode: EpisodeData) => <EpisodeSquare data={episode} />}
          </For>
        </div>
      </div>
    </>
  );
};

export default EpisodeList;
