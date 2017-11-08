import { connect } from 'react-redux';
import ImageComponent from 'components/images/ImageComponent';

function mapStateToProps(state) {
    return {
        image: state.images.image,
    };
}

export default connect(mapStateToProps)(ImageComponent);
