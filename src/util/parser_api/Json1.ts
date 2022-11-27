import {
  CatalogData,
  EpisodeData,
  EpisodeListData,
  TitleData,
  SourceDataType,
} from "../interfaces.js";

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
  [SourceDataType.EPISODELIST]: (
    source: string,
    data: any
  ): EpisodeListData | void => {
    const episodes = data.data.map(
      (e: any) =>
        <EpisodeData>{
          id: e.id,
          episodeNumber: e.name,
          sort_order: e.sort_order,
          url_player: e.url_player,
        }
    );
    return <EpisodeListData>{
      episodes,
      totalPages: data.total_page,
      currentPage: data.current_page,
    };
  },
  [SourceDataType.EPISODE]: (source: string, data: any): EpisodeData | void => {
    return <EpisodeData>{
      id: data.data.post_id,
      name: data.data.name,
      episodeNumber: data.data.id,
      sort_order: data.data.sort_order,
      source: data.data.source,
      url_player: data.data.url_player,
    };
  },
};
