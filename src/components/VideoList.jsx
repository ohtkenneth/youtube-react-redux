import React from 'react';
import VideoListEntry from './VideoListEntry';

var VideoList = ({videoList, videoClicked}) => (
  <div className="video-list">
    { videoList.map((video, index) => {
      return <VideoListEntry key={index} video={video} videoClicked={videoClicked}/>
    })}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// VideoList.propTypes = {
//   videos: React.PropTypes.array.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.

export default VideoList;
