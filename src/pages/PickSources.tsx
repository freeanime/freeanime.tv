import { Component } from "solid-js";
import { getSourceList } from "../util/sources_util";

const picksources: Component = () => {
  const sourceList = getSourceList();

  return (
    <div>
      <div>Sources: {sourceList}</div>
    </div>
  );
};

export default picksources;
