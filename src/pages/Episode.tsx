import { useSearchParams } from "@solidjs/router";
import { createResource } from "solid-js";
import EpisodeList from "../components/EpisodeList";
import { fetchEpisodeData } from "../util/fetchData.js";
import { EpisodeData, SourceDataType } from "../util/interfaces.js";

export default () => {
  const [searchParams] = useSearchParams();
  // const pageNumber =
  //   searchParams.p === undefined ? 1 : parseInt(searchParams.p, 10);
  const [episodeData] = createResource(
    () => [searchParams.s, searchParams.t, searchParams.p],
    ([source, title, page]) =>
      fetchEpisodeData(SourceDataType.EPISODELIST, source, title, page)
  );

  return (
    <div class="flex w-full flex-grow">
      <iframe
        class="w-[1280px] h-[720px] m-3 p-3"
        src={
          episodeData()?.episodes.find(
            (ep: EpisodeData) => ep.id.toString() === searchParams.e
          )?.url_player
        }
      />
      <EpisodeList data={episodeData()} />
    </div>
  );
};
