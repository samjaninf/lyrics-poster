import { connect } from 'react-redux';

import Poster from './Poster';
import * as actions from '../../../redux/actions';


// map Redux state to component props
function mapStateToProps(state) {
	return {
		fontSize: state.fontSize,
		imageAspectRatio: state.imageAspectRatio,
		imageHeight: state.imageHeight,
		imageURL: state.imageURL,
		lyrics: state.lyrics
	};
}

// map Redux actions to component props
function mapDispatchToProps(dispatch) {
	return {
		setImage: (newImageAspectRatio, newImageURL) =>
			dispatch(actions.setImage(newImageAspectRatio, newImageURL))
	};
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Poster);