import { useSearchParams } from "@solidjs/router";
import svgHacker from "../assets/crime-hacker-icon.svg";
import { getSourceList, setFirstSource } from "../util/sources_util";
import "../assets/index.css";

export default () => {
  const sourceList = getSourceList();
  const [, setSearchParams] = useSearchParams();
  if (sourceList) setSearchParams({ s: sourceList[0] });

  return (
    <div class="bg-black w-screen h-screen flex justify-center items-center">
      <div class="bg-white rounded-xl border p-4">
        <div class="flex justify-center items-center">
          <img src={svgHacker} class="h-15" alt="Hacker Logo" />
        </div>
        <br />
        <h1>Welcome to FreeAnime.tv!</h1>
        <h4>Please enter your source......</h4>
        <br />
        <br />
        <input id="txtBoxSource" placeholder="gogoanime.mom" type="text" />
        <button
          class="ml-4"
          onClick={() => {
            const sourceDomain = (
              document.getElementById("txtBoxSource") as HTMLInputElement
            ).value;
            setFirstSource(sourceDomain);
            setSearchParams({ s: sourceDomain });
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
