import { Component } from "solid-js";
import { TitleData } from "../util/interfaces.js";

const Card: Component<{ data: TitleData }> = (props) => {
  return (
    <div>
      <img src={props.data.image} />
      <div>{props.data.name}</div>
    </div>
  );
};

export default Card;
