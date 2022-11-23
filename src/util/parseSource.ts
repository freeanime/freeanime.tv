import { Parser } from "./interfaces.js";
import Json1Parsers from "./parser_api/Json1.js";

export default (parser: Parser, source: string, data: object) => {
  switch (source) {
    case "gogoanime.mom":
    case "test.com":
      return Json1Parsers[parser](source, data);
    default:
      return undefined;
  }
};
