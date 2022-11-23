export interface QueryString {
  s?: string;
  t?: string;
  e?: string;
}

export interface Title {
  episodeCount: number;
  name: string;
  image: string;
  id: string; // Used to go to the title page
  episodes: Array<string>; // Sorted in ascending order
}

export type Catalog = Array<Title>;

export enum Parser {
  CATALOG,
  TITLE,
}
