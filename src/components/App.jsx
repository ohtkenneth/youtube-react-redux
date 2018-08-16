import React, { Component } from 'react';
import Search from './Search';
// import VideoPlayer from './VideoPlayer';
// import VideoList from './VideoList';
import VisibleVideoPlayer from '../containers/VisibleVideoPlayer';
import VisibleVideoList from '../containers/VisibleVideoList';

function App(props) {
  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VisibleVideoPlayer/>
        </div>
        <div className="col-md-5">
          <VisibleVideoList dispatch={props.dispatch}/>
        </div>
      </div>
    </div>
  )
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
