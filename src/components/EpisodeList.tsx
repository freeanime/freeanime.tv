import { useSearchParams } from "@solidjs/router";
import { Component, createSignal, For, Show } from "solid-js";
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
          <p class="font-sans font-medium text-center text-sm text-[#f8fafc]">
            {props.data.episodeNumber}
          </p>
        </QueryA>
      }
    >
      <QueryA
        setParams={{ e: props.data.id }}
        class="rounded-md bg-neutral-600 hover:bg-[#2299ee] m-1 w-[30px] h-[20px]"
      >
        <p class="font-sans font-medium text-center text-sm text-neutral-300 hover:text-[#f8fafc]">
          {props.data.episodeNumber}
        </p>
      </QueryA>
    </Show>
  );
};

// const EpisodePageSelector: Component<{ data?: EpisodeListData }> = (
//   props
// ) => { };

const EpisodeList: Component<{ data?: EpisodeListData }> = (props) => {
  return (
    <>
      {/* <EpisodePageSelector /> */}
      {/* <div class="mt-1 pt-3 w-[300px] h-[50px] bg-freeAnime-boxGray">Hello</div> */}
      <div class="flex flex-wrap justify-center m-3 p-3 w-[300px] h-[710px] bg-black rounded-md">
        <For each={props.data?.episodes}>
          {(episode: EpisodeData) => <EpisodeSquare data={episode} />}
        </For>
      </div>
    </>
  );
};

export default EpisodeList;
