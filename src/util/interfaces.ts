export interface QueryString {
  s?: string;
  t?: string;
  e?: string;
  p?: string;
}

export interface EpisodeData {
  id: number; // post_id is the episode id
  episodeNumber: number; // episode 1,2,3,4....
  name: string;
  sort_order: string;
  source: string;
  url_player: string;
}

export interface TitleData {
  episodeCount: number;
  name: string;
  image: string;
  id: string; // Used to go to the title page
  episodes: Array<EpisodeData>; // Sorted in ascending order
  dubsub: string;
}

export type CatalogData = Array<TitleData>;

export interface EpisodeListData {
  episodes: Array<EpisodeData>;
  totalPages: number;
  currentPage: number;
}

export enum SourceDataType {
  CATALOG,
  TITLE,
  EPISODE_LIST,
  EPISODE,
}
