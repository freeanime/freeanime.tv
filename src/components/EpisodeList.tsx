import { useSearchParams } from "@solidjs/router";
import {
  Component,
  createEffect,
  createSignal,
  For,
  Index,
  Show,
} from "solid-js";
import { fetchEpisodeData } from "../util/fetchData.js";
import {
  EpisodeData,
  EpisodeListData,
  SourceDataType,
} from "../util/interfaces.js";
import QueryA from "./QueryA.jsx";

const EpisodeSquare: Component<{ data: EpisodeData }> = (props) => {
  const [searchParams] = useSearchParams();
  return (
    <Show
      when={props.data.id.toString() !== searchParams.e}
      fallback={
        <QueryA
          setParams={{ e: props.data.id }}
          class="rounded-md bg-[#29e] m-1 w-[30px] h-[20px]"
        >
          <p class="font-sans font-medium text-center text-sm flex-grow text-[#111]">
            {String(props.data.episodeNumber).padStart(3, "0")}
          </p>
        </QueryA>
      }
    >
      <QueryA
        setParams={{ e: props.data.id }}
        class="rounded-md bg-[#111] hover:bg-[#29e] m-1 w-[30px] h-[20px]"
      >
        <p class="font-sans font-medium text-center text-sm text-neutral-300 text-[#aaa]">
          {String(props.data.episodeNumber).padStart(3, "0")}
        </p>
      </QueryA>
    </Show>
  );
};

const EpisodeList: Component<{ data?: EpisodeListData }> = (props) => {
  const [separators, setSeparators] = createSignal<Array<string>>([]);
  const [episodes, setEpisodes] = createSignal<Array<EpisodeData>>();
  const [searchParams] = useSearchParams();

  createEffect(() => {
    const totalPages = props.data?.totalPages;
    if (totalPages) {
      const tempSeparators: string[] = [];
      for (let i = totalPages; i > 0; i -= 1) {
        const maxEpisode = i * 100;
        const minEpisode = maxEpisode - 99;
        tempSeparators.push(
          `${String(minEpisode).padStart(3, "0")}-${maxEpisode}`
        );
      }
      setSeparators(tempSeparators);
    }
  });

  createEffect(() => {
    if (props.data?.episodes) setEpisodes(props.data?.episodes);
  });

  const fetchEpisodes = async (page: string) => {
    const episodeListData = await fetchEpisodeData(
      SourceDataType.EPISODE_LIST,
      searchParams.s,
      searchParams.t,
      page
    );
    setEpisodes(episodeListData.episodes);
  };

  return (
    <div>
      <div class="mt-1 pt-3 max-w-[300px] max-h-[50px] bg-[#222] flex rounded-md ml-3 mt-6 p-3">
        <select onChange={(e) => fetchEpisodes(e.currentTarget.value)}>
          <Index each={separators()}>
            {(separator, i) => <option value={i + 1}>{separator()}</option>}
          </Index>
        </select>
      </div>
      <div class="flex flex-wrap m-3 p-3 w-[300px] bg-[#222] rounded-md">
        <For
          each={episodes()}
          fallback={
            <div class="rounded-md bg-[#29e] m-1 w-[30px] h-[20px] animate-pulse" />
          }
        >
          {(episode: EpisodeData) => <EpisodeSquare data={episode} />}
        </For>
      </div>
    </div>
  );
};

export default EpisodeList;
