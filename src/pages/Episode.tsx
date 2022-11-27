import { useSearchParams } from "@solidjs/router";
import EpisodeList from "../components/EpisodeList";

export default () => {
  const [searchParams] = useSearchParams();
  return (
    <div class="flex bg-zinc-800 flex-w">
      <EpisodeList />
    </div>
  );
};
