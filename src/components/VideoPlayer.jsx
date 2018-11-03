import React from 'react';
import PropTypes from 'prop-types';
var VideoPlayer = ({video, currentVideo}) => {
  const videoUrl = `https://www.youtube.com/embed/${currentVideo}?autoplay=1`;

  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoUrl} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
      </div>
    </div>
  );
};

VideoPlayer.propTypes = {
  video: PropTypes.object.isRequired
};

export default VideoPlayer;
