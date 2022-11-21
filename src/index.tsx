import { render } from "solid-js/web";
import { Router, Routes, Route, useNavigate } from "@solidjs/router";

import source from "./pages/source";
import episode from "./pages/episode";

import Hacker from "./assets/crime-hacker-icon.svg";
import "./index.css";

function index() {
  const navigate = useNavigate();

  return (
    <div class="bg-black w-screen h-screen flex justify-center items-center">
      <div class="bg-white rounded-xl border p-4">
        <div class="flex justify-center items-center">
          <img src={Hacker} class="h-15" alt="Hacker Logo" />
        </div>
        <br />
        <h1>Welcome to FreeAnime.tv!</h1>
        <h4>Please enter your source......</h4>
        <br />
        <br />
        <input id="txtBoxSource" placeholder="gogoanime.mom" type="text" />
        <button
          class="ml-4"
          onClick={() =>
            navigate(
              `/${
                (document.getElementById("txtBoxSource") as HTMLInputElement)
                  .value
              }`
            )
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
}

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={index} />
        <Route path="/:sourceDomain" component={source} />
        <Route
          path="/:sourceDomain/title/:titleId/:episodeId"
          component={episode}
        />
      </Routes>
    </Router>
  ),
  document.body
);
