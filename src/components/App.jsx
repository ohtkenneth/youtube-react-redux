import React, { Component } from 'react';
import Search from './Search';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideoId: '4ZAEBxGipoA',
      currentTitle: 'React JS Tutorial for Beginners - 1 - Introduction',
      currentDescription: 'WHatever',
      videoList: []
    };

    // this.searchVideos();
  }
  // method to pass down to videoListEntry to call when a click occures to set state with clicked video
  onVideoClicked(data) {
    this.setState({
      currentVideoId: data.videoid,
      currentTitle: data.title,
      currentDescription: data.description
    });
  }
  searchVideos(searchTerm) {
    const _this = this;

    // $.ajax({
    //   url: 'https://www.googleapis.com/youtube/v3/search?',
    //   data: {
    //     q: searchTerm || 'dogs',
    //     maxResults: 5,
    //     part: 'snippet',
    //     key: window.YOUTUBE_API_KEY
    //   },
    //   videoEmbeddable: true,
    //   type: 'GET',
    //   success: function(data) {
    //     const firstVideo = data.items[0];
    //
    //     _this.setState({
    //       currentVideoId: searchTerm ? _this.state.currentVideoId : firstVideo.id.videoId,
    //       currentTitle: searchTerm ? _this.state.currentTitle : firstVideo.snippet.title,
    //       currentDescription: searchTerm ? _this.state.currentDescription : firstVideo.snippet.description,
    //       videoList: data.items
    //     });
    //   },
    //   error: function(data) {
    //     console.log(data);
    //   }
    // });
  };
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            {/* <div><h5><em>search</em> view goes here</h5></div> */}
            <Search videoSearched={this.searchVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}
            <VideoPlayer video={this.state}/>
          </div>
          <div className="col-md-5">
            {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
            <VideoList videoList={this.state.videoList} videoClicked={this.onVideoClicked.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
