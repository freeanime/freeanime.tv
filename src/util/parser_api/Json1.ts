import { Catalog, Title, Parser } from "../interfaces.js";

export default {
  [Parser.CATALOG]: (source: string, data: object): Catalog | void => {},
  [Parser.TITLE]: (source: string, data: object): Title | void => {},
};
