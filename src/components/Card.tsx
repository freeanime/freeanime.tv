import { Component } from "solid-js";
import { TitleData } from "../util/interfaces.js";

import "../assets/index.css";
import QueryA from "./QueryA.jsx";

const Card: Component<{ data: TitleData }> = (props) => {
  return (
    <div class="bg-slate-200 flex-1 min-w-[180px] max-w-[210px] m-3 flex flex-col">
      <QueryA
        setParams={{
          t: props.data.id,
          e: props.data.episodes[0].id,
        }}
      >
        <img src={props.data.image} class="object-cover w-full h-[300px]" />
        <div class="text-center px-2 py-2">{props.data.name}</div>
      </QueryA>
    </div>
  );
};

export default Card;
