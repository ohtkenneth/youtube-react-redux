import React from 'react';
import { selectVideoFromList } from '../actions';

var VideoListEntry = ({video, dispatch}) => {
  //console.log(video);

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

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// VideoListEntry.propTypes = {
//   video: React.PropTypes.object.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default VideoListEntry;
