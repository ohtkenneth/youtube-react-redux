import axios from 'axios';
// type: select video
// text: videoId
export function selectVideoFromList(videoId) {
  return {
    type: 'SELECT_VIDEO',
    videoId,
  }
};

function requestVideos(searchTerm) {
  return {
    type: 'REQUEST_VIDEOS',
    searchTerm,
  }
}

function receiveVideos(searchTerm, data) {
  return {
    type: 'RECEIVE_VIDEOS',
    searchTerm,
    videos: data,
  }
}

export function fetchVideos(searchTerm) {
  return function(dispatch) {
    // app is informed that api call is occuring
    dispatch(requestVideos(searchTerm));

    return axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&maxResults=5&part="snippet"&key=${window.YOUTUBE_API_KEY}`)
      .then((data) => {
        console.log(data);
        receiveVideos(searchTerm, data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
