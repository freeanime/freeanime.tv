import { useSearchParams } from "@solidjs/router";
import { Component, createResource, For } from "solid-js";
import { fetchEpisodeList } from "../util/fetchData.js";
import { EpisodeData, SourceDataType } from "../util/interfaces.js";
import QueryA from "./QueryA.jsx";

const EpisodeSquare: Component<{ data: EpisodeData }> = (props) => {
  return (
    <QueryA
      setParams={{ e: props.data.id }}
      class="rounded-md bg-neutral-600 hover:bg-neutral-400 m-1 w-[30px] h-[20px]"
    >
      <p class="font-sans font-medium text-center text-sm text-neutral-300 hover:text-neutral-900">
        {props.data.episodeNumber}
      </p>
    </QueryA>
  );
};

const EpisodeList: Component = () => {
  const [searchParams] = useSearchParams();
  const [episodeList] = createResource(
    () => [searchParams.s, searchParams.t],
    ([source, title]) =>
      fetchEpisodeList(SourceDataType.EPISODELIST, source, title, 1)
  );
  return (
    <div class="flex flex-wrap justify-center m-3 p-3 max-w-[300px] max-h-[750px] bg-gray-900 rounded-md">
      <For each={episodeList()?.episodes}>
        {(episode: EpisodeData) => <EpisodeSquare data={episode} />}
      </For>
    </div>
  );
};

export default EpisodeList;
