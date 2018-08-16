import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer';

const mapStateToProps = state => {
  console.log(state);
  return {
    currentVideo: state.selectVideo.currentVideo
  };
};

const VisibleVideoPlayer = connect(mapStateToProps)(VideoPlayer);

export default VisibleVideoPlayer;
