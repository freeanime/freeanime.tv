import { Component } from "solid-js";
import { useSearchParams } from "@solidjs/router";
import { TitleData } from "../util/interfaces.js";

import "../assets/index.css";

const Card: Component<{ data: TitleData }> = (props) => {
  const [, setSearchParams] = useSearchParams();

  return (
    <div class="bg-slate-200 flex-1 min-w-[180px] max-w-[210px] m-3 flex flex-col">
      <img src={props.data.image} class="object-cover w-full h-[300px]" />
      <div class="text-center px-2 py-2">
        <a
          onClick={() => {
            setSearchParams({
              t: props.data.name,
              e: props.data.episodes[0].id,
            });
          }}
        >
          {props.data.name}
        </a>
      </div>
    </div>
  );
};

export default Card;
