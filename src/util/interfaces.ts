export interface QueryString {
  s?: string;
  t?: string;
  e?: string;
}

export interface TitleData {
  episodeCount: number;
  name: string;
  image: string;
  id: string; // Used to go to the title page
  episodes: Array<string>; // Sorted in ascending order
}

export type CatalogData = Array<TitleData>;

export enum SourceDataType {
  CATALOG,
  TITLE,
}
