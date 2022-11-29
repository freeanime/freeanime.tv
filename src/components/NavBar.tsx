import { useSearchParams } from "@solidjs/router";
import logo from "../assets/logo.svg";
import QueryA from "./QueryA";

export default () => {
  const [searchParams] = useSearchParams();
  return (
    <header class="bg-[#222]">
      <nav class="flex justify-between mx-auto max-w-[1600px] h-[66px] py-[8px] text-[#aaa]">
        <div class="flex items-center leading-[0]">
          <QueryA setParams={{ s: searchParams.s }} replace={true} class="m-4">
            <img
              src={logo}
              width="50"
              height="50"
              class="inline align-baseline"
            />
            <span class="font-bold text-4xl leading-[0]">
              <span class="text-accent">F</span>ree
              <span class="text-accent">A</span>nime.tv
            </span>
          </QueryA>
          <QueryA setParams={{ s: searchParams.s }} replace={true} class="m-4">
            Updated
          </QueryA>
          <QueryA
            setParams={{ s: searchParams.s, n: "l" }}
            replace={true}
            class="m-4"
          >
            Anime List
          </QueryA>
          <QueryA
            setParams={{ s: searchParams.s, n: "g" }}
            replace={true}
            class="m-4"
          >
            Genres
          </QueryA>
        </div>
        <div class="flex items-center">
          <div class="m-4 bg-[#111] rounded-md">
            <QueryA setParams={{ s: searchParams.s, n: "s" }} replace={true}>
              <i class="fa fa-magnifying-glass text-lg pl-3 pr-1" />
            </QueryA>
            <input
              type="text"
              placeholder="Search Anime..."
              class="placeholder-secondary bg-[#111] py-1.5 min-w-[300px] rounded-md pl-2"
            />
          </div>
          <button class="m-4 bg-[#111] px-4 rounded-md">
            <i class="fa fa-cog text-xl py-1 pr-1" />
            Settings
          </button>
        </div>
      </nav>
    </header>
  );
};
