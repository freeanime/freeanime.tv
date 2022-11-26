import { Component, splitProps, untrack } from "solid-js";
import { A, AnchorProps, SetParams, useLocation } from "@solidjs/router";

interface QueryAnchorProps extends Omit<AnchorProps, "href"> {
  setParams: SetParams;
}

export function mergeSearchString(search: string, params: SetParams) {
  const merged = new URLSearchParams(search);
  Object.entries(params).forEach(([key, value]) =>
    value == null || value === ""
      ? merged.delete(key)
      : merged.set(key, String(value))
  );
  const s = merged.toString();
  return s ? `?${s}` : "";
}

// Use replace={true} to have the query keys replace instead of append
const QueryA: Component<QueryAnchorProps> = (props) => {
  const location = useLocation();
  const searchString = untrack(() =>
    mergeSearchString(props.replace ? "" : location.search, props.setParams)
  );
  const [, rest] = splitProps(props, ["setParams", "replace"]);
  return (
    <A {...rest} href={location.pathname + searchString + location.hash} />
  );
};

export default QueryA;
