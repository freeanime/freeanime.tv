import { useSearchParams } from "@solidjs/router";
import { Component, createResource } from "solid-js";
import { fetchEpisodeList } from "../util/fetchData.js";

const EpisodeCatalog: Component = () => {
  const [searchParams] = useSearchParams();
  const [episodeList] = createResource(
    [searchParams.s, searchParams.t],
    ([source, title]) => {
      fetchEpisodeList(source, title);
    }
  );
  return (
    <div>
      <h2>EpisodeCatalog {JSON.stringify(episodeList())} Test</h2>
    </div>
  );
};

export default EpisodeCatalog;
