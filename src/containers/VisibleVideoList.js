import { connect } from 'react-redux';
import VideoList from '../components/VideoList';

const mapStateToProps = state => {
  return {
    videos: state.selectVideo.videos
  }
};

const VisibleVideoList = connect(mapStateToProps)(VideoList);

export default VisibleVideoList;
