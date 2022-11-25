import { SourceDataType } from "./interfaces.js";
import Json1Parsers from "./parser_api/Json1.js";

export const fetchCatalog = async (
  sourceDataType: SourceDataType,
  source: string
) => {
  switch (source) {
    case "gogoanime.mom":
    case "ww4.placeholder.com": {
      const data = await (
        await fetch(
          `https://${source}/my-ajax?type=1&page=1&limit=20&action=load_main_content_home`
        )
      ).json();
      return Json1Parsers[sourceDataType](source, data);
    }
    default:
      return undefined;
  }
};

export const fetchEpisodeList = async (source: string, title: string) => {
  const data = await (await fetch(`https://${source}/movie/${title}/`)).text();
  const movieIdIndex = data.indexOf("movie_id =");
  const firstQuoteIndex = data.indexOf("'", movieIdIndex) + 1;
  const secondQuoteIndex = data.indexOf("'", firstQuoteIndex);
  const movieId = data.substring(firstQuoteIndex, secondQuoteIndex);
  const episodeList = await (
    await fetch(
      `https://${source}/my-ajax?page=1&limit=100&movie_id=${movieId}&action=load_list_episode&time=2022-11-26-01-30-00`
    )
  ).json();
  return episodeList;
};
