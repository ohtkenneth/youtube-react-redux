import React, { Component } from 'react';
import Search from './Search';
import VisibleVideoPlayer from '../containers/VisibleVideoPlayer';
import VisibleVideoList from '../containers/VisibleVideoList';

const App = (props) => {
  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search dispatch={props.dispatch}/>
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
  );
};

export default App;
