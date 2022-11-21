import type { Component } from 'solid-js';
import { Routes, Route, Router } from "@solidjs/router"


import MainPage from './components/MainPage';
import SourcePage from './components/SourcePage';

const App: Component = () => (
  <div>
    
    <Router>
      <Routes>
        <Route path="/Home" element={<MainPage/>}/>
        <Route path="/" element={<SourcePage/>}/>
      </Routes>
    </Router>

    

  </div>
  );

export default App;
