import { Component, For } from "solid-js";
import { EpisodeData, EpisodeListData } from "../util/interfaces.js";
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

const EpisodeList: Component<{ data?: EpisodeListData }> = (props) => {
  return (
    <>
      <div class="flex flex-wrap justify-center m-3 p-3 w-[300px] h-[750px] bg-gray-900 rounded-md">
        <For each={props.data?.episodes}>
          {(episode: EpisodeData) => <EpisodeSquare data={episode} />}
        </For>
      </div>
    </>
  );
};

export default EpisodeList;
