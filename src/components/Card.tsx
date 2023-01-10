import { Component } from "solid-js";
import { TitleData } from "../util/interfaces.js";

import "../assets/index.css";
import QueryA from "./QueryA.jsx";

const Card: Component<{ data: TitleData }> = (props) => {
  return (
    <div class="flex-1 min-w-[180px] max-w-[210px] m-3 flex flex-col">
      <QueryA
        setParams={{
          t: props.data.id,
          e: props.data.episodes[props.data.episodes.length - 1].id,
        }}
      >
        <img
          src={props.data.image}
          class="object-cover rounded-sm w-full h-[300px]"
        />
        <div class="text-left text-[#aaaa] text-sm px-2 py-2">
          {props.data.name}
          {props.data.dubsub}
        </div>
      </QueryA>
    </div>
  );
};

export default Card;
