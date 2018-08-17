import { connect } from 'react-redux';
import VideoList from '../components/VideoList';

const mapStateToProps = state => {
  console.log(state);
  return {
    // videos: state.selectVideo.videos
    videos: state.videosBySearch.items
  }
};

const VisibleVideoList = connect(mapStateToProps)(VideoList);

export default VisibleVideoList;
