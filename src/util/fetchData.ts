import { SourceDataType } from "./interfaces.js";
import Json1Parsers from "./parser_api/Json1.js";

export default async (sourceDataType: SourceDataType, source: string) => {
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
