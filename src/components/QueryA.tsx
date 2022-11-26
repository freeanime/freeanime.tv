import { Component, splitProps, untrack } from "solid-js";
import {
  A,
  AnchorProps,
  SetParams,
  useLocation,
  _mergeSearchString,
} from "@solidjs/router";

interface QueryAnchorProps extends Omit<AnchorProps, "href"> {
  setParams: SetParams;
}

// Use replace={true} to have the query keys replace instead of append
const QueryA: Component<QueryAnchorProps> = (props) => {
  const location = useLocation();
  const searchString = untrack(() =>
    _mergeSearchString(props.replace ? "" : location.search, props.setParams)
  );
  const [, rest] = splitProps(props, ["setParams", "replace"]);
  return (
    <A {...rest} href={location.pathname + searchString + location.hash} />
  );
};

export default QueryA;
