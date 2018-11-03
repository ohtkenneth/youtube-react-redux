import React from 'react';
import PropTypes from 'prop-types';
import VideoListEntry from './VideoListEntry';

var VideoList = ({videos, dispatch}) => {
  return (
    <div className="video-list">
      { videos.map((video, index) => {
        return <VideoListEntry key={index} video={video} dispatch={dispatch}/>
      })}
    </div>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

export default VideoList;
