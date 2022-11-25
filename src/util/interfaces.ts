export interface QueryString {
  s?: string;
  t?: string;
  e?: string;
}

export interface Episode {
  id: number;
  name: string;
  post_id: number;
  sort_order: string;
  source: string;
  url_player: string;
}

export interface TitleData {
  episodeCount: number;
  name: string;
  image: string;
  id: string; // Used to go to the title page
  episodes: Array<Episode>; // Sorted in ascending order
}

export type CatalogData = Array<TitleData>;

export enum SourceDataType {
  CATALOG,
  TITLE,
}
