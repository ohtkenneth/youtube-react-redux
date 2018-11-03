import React from 'react';
import PropTypes from 'prop-types';
import { selectVideoFromList } from '../actions';

var VideoListEntry = ({video, dispatch}) => {

  var onClickHandler = (event) => {
    dispatch(selectVideoFromList(event.target.dataset.videoid))
  };

  return (
    <div id="videoData" className="video-list-entry media" data-videoid={video.id.videoId} onClick={onClickHandler}>
      <div className="media-left media-middle" data-videoid={video.id.videoId} onClick={onClickHandler}>
        <img className="media-object" data-videoid={video.id.videoId} src={video.snippet.thumbnails.default.url} alt="" onClick={onClickHandler}/>
      </div>
      <div className="media-body" data-videoid={video.id.videoId} onClick={onClickHandler}>
        <div className="video-list-entry-title" data-videoid={video.id.videoId} onClick={onClickHandler}>{video.snippet.title}</div>
        <div className="video-list-entry-detail" data-videoid={video.id.videoId} onClick={onClickHandler}>{video.snippet.description}</div>
      </div>
    </div>
  )
};

VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

export default VideoListEntry;
