import { render } from 'solid-js/web';
import { Router, Routes, Route, useNavigate } from "@solidjs/router";
import { createSignal } from 'solid-js'

import Hacker from "./assets/crime-hacker-icon.svg"

import Source from "./pages/[sourceDomain]";
import Episode from "./pages/[sourceDomain]/title/[titleId]/[episodeId]";

import './index.css';

function Index() {
  
  const navigate = useNavigate();

  const [url, setUrl] = createSignal("")

  const handleChange = (event: Event): void => {
    setUrl((event.target as HTMLInputElement).value)
  }

  return (
    <div class="bg-black w-screen h-screen flex justify-center items-center">
        <div class="bg-white rounded-xl border p-4">
            <div class="flex justify-center items-center"><img src={Hacker} class="h-15" alt="Hacker Logo" /></div>
            <br />
            <h1>Welcome to FreeAnime.tv!</h1>
            <h4>Please enter your source......</h4>
            <br />
            <br />
            <input id="txtBoxSource" placeholder='https://gogoanime.mom/' type="text" value={url()} onChange={handleChange}/>
            <button class="ml-4" onClick={() => navigate(`/${url()}`)}>Submit</button>
        </div>
    </div>
  )
}

render(() => (
  <Router>
    <Routes>
      <Route path="/" component={Index}/>
      <Route path="/:sourceDomain" component={Source}/>
      <Route path="/:sourceDomain/title/:titleId/:episodeId" component={Episode}/>
    </Routes>
  </Router>
), document.body);
