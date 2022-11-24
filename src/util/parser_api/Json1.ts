import { CatalogData, TitleData, SourceDataType } from "../interfaces.js";

export default {
  [SourceDataType.CATALOG]: (source: string, data: any): CatalogData | void => {
    return data.data.map(
      (t: any) =>
        <TitleData>{
          episodeCount: t.total_episode,
          name: t.post_title,
          image: `https://statics.${source}/${t.image}`,
          id: t.post_name,
          episodes: JSON.parse(t.episodes),
        }
    );
  },
  [SourceDataType.TITLE]: (source: string, data: any): TitleData | void => {
    return <TitleData>{
      episodeCount: data.data.total_episode,
      name: data.data.post_title,
      image: `https://statics.${source}/${data.data.image}`,
      id: data.data.post_name,
      episodes: JSON.parse(data.data.episodes),
    };
  },
};
