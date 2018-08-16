import { combineReducers } from 'redux';
import { selectVideoFromList } from './actions';
import exampleVideoData from './data/exampleData.js';
// reducer to consume actions regarding the video player
const initialState = {
  currentVideo: '4ZAEBxGipoA',
  videos: exampleVideoData,
};

export function selectVideo(state = initialState, action) {
  if (action.type === 'SELECT_VIDEO') {
    // find the selected video using action.videoId
    const newState = Object.assign({}, state, {
      currentVideo: state.videos.find((video) => video.id.videoId = action.videoId).id.videoId
    });
    return newState;
  }
  return state;
}

function videos(
  state = {
    isFetching: false,
    items: [],
  },
  action,
) {
  if (action.type === 'REQUEST_VIDEOS') {
    return Object.assign({}, state, {
      isFetching: true,
    });
  }
  if (action.type === 'RECEIVE_VIDEOS') {
    return Object.assign({}, state, {
      isFetching: false,
      items: action.videos,
    });
  }
}

function videosBySearch(state = {}, action) {
  switch (action.type) {
    case 'REQUEST_VIDEOS':
    case 'RECEIVE_VIDEOS':
      return Object.assign({}, state, {
        // videos
        videos: videos(state, action)
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  selectVideo,
  videosBySearch,
});

export default rootReducer;
