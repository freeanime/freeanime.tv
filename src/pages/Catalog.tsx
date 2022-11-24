import { useSearchParams } from "@solidjs/router";
import { createResource, For } from "solid-js";
import { CatalogData, SourceDataType, TitleData } from "../util/interfaces.js";
import Card from "../components/Card";
import fetchData from "../util/fetchData.js";
import Title from "./Title.jsx";

export default () => {
  const [searchParams] = useSearchParams();
  const [catalog] = createResource(searchParams.s, (source) =>
    fetchData(SourceDataType.CATALOG, source)
  );

  return (
    <div>
      <div>this is the source catalog page</div>
      <For each={catalog() as CatalogData}>
        {(title: TitleData) => <Card data={title} />}
      </For>
    </div>
  );
};
