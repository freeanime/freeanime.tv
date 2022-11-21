import { Component } from 'solid-js';
import NavBar from '../components/NavBar';
import { getSourceList } from '../util/sources_util';

const picksources: Component = () => {

  let sourceList = getSourceList()

  return (
    <div>
      <NavBar />
      <div>Sources: {sourceList}</div>
    </div>
  )
}

export default picksources;
