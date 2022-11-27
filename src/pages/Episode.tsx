import { useSearchParams } from "@solidjs/router";
import { createResource } from "solid-js";
import EpisodeList from "../components/EpisodeList";
import { fetchEpisodeData } from "../util/fetchData.js";
import { EpisodeData, SourceDataType } from "../util/interfaces.js";

export default () => {
  const [searchParams] = useSearchParams();
  const [episodeData] = createResource(
    () => [searchParams.s, searchParams.t],
    ([source, title]) =>
      fetchEpisodeData(SourceDataType.EPISODELIST, source, title, 1)
  );

  const url = episodeData()?.episodes.find(
    (ep: EpisodeData) => ep.id.toString() === searchParams.e
  );

  return (
    <div class="flex bg-zinc-800 w-full">
      <EpisodeList data={episodeData()} />
      <iframe
        class="w-full"
        src={
          episodeData()?.episodes.find(
            (ep: EpisodeData) => ep.id.toString() === searchParams.e
          )?.url_player
        }
      />
      <p>{JSON.stringify(url)}</p>
    </div>
  );
};
