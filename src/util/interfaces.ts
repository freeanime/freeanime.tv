export interface QueryString {
  s?: string;
  t?: string;
  e?: string;
}

export interface EpisodeData {
  id: number;
  name: string;
  post_id: number; // post_id is the episode id
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
}

export type CatalogData = Array<TitleData>;

export enum SourceDataType {
  CATALOG,
  TITLE,
}
