import React from 'react';
import PropTypes from 'prop-types';
import { fetchVideos } from '../actions';

var Search = ({videoSearched, dispatch}) => {
  let keyStrokeCounter = 0;
  let debounceTimeout = null;

  const onButtonClick = function() {
    dispatch(fetchVideos(document.getElementsByClassName('form-control')[0].value))
  };

  const onKeyStroke = function(event) {
    if (event.key === 'Enter') {
      onButtonClick();
      keyStrokeCounter = 0;
    }
  
    if (keyStrokeCounter === 4) {
      onButtonClick();
      keyStrokeCounter = 0;
    }
  
    keyStrokeCounter += 1;
  
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
  
      debounceTimeout = setTimeout(() => {
        onButtonClick();
      }, 1000);
    } else {
      debounceTimeout = setTimeout(() => {
        onButtonClick();
      }, 1000);
    }
  }

  return (
    <div className="search-bar form-inline">
      {/* <input className="form-control" type="text" onKeyPress={onKeyStroke.bind(this)}/> */}
      <input className="form-control" type="text"/>
      <button className="btn hidden-sm-down" onClick={onButtonClick}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

Search.propTypes = {
  videoSearched: PropTypes.object.isRequired
};

export default Search;
