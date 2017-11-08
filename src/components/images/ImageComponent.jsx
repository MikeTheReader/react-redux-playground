import React from 'react';
import PropTypes from 'prop-types';

const ImageComponent = ({ image }) => {
    if (!image) {
        return (<div>None</div>);
    }

    return (
        <div className="ui card">
            <div className="image">
                <img src={image.thumbnailUrl} alt={image.title} />
            </div>
            <div className="content">
                <div className="description">{image.title}</div>
            </div>
        </div>
    );
};

ImageComponent.propTypes = {
    image: PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string,
        thumbnailUrl: PropTypes.string,
    }),
};

ImageComponent.defaultProps = {
    image: null,
};

export default ImageComponent;
