import { combineReducers } from 'redux';
import { selectVideoFromList } from './actions';
import exampleVideoData from './data/exampleData.js';

// reducer to consume actions regarding the video player
const selectVideoInitialState = {
  currentVideo: '4ZAEBxGipoA',
};
export function selectVideo(state = selectVideoInitialState, action) {
  if (action.type === 'SELECT_VIDEO') {
    // find the selected video using action.videoId
    const newState = Object.assign({}, state, {
      // set current video
      currentVideo: state.videos.find((video) => video.id.videoId = action.videoId).id.videoId
    });
    return newState;
  }
  return state;
}

// function to handle async actions
function videos(
  state = {
    items: [],
    isFetching: false,
  },
  action,
) {
  // fetchVideos aync action gets videos and sets isFetching to true
  if (action.type === 'REQUEST_VIDEOS') {
    return Object.assign({}, state, {
      isFetching: true,
    });
  }
  // fetchVideos upon resolving returns payload with items
  if (action.type === 'RECEIVE_VIDEOS') {
    return Object.assign({}, state, {
      isFetching: false,
      items: action.videos,
    });
  }
}

const videosBySearchInitialState = {
  items: [],
  isFetching: false,
};
// actual reducer
function videosBySearch(state = videosBySearchInitialState, action) {
  switch (action.type) {
    case 'REQUEST_VIDEOS':
    case 'RECEIVE_VIDEOS':
      // on receive videos, updates state with results
      return Object.assign({}, state, videos(state, action));
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  selectVideo,
  videosBySearch,
});

export default rootReducer;
