import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './_routeButton.scss';

const RouteButton = ({title, url, ownclass}) => {
  return (
    <Link to={url} className={`route-button ${ownclass}`}>
      {title}
    </Link>
  );
};

RouteButton.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  ownclass: PropTypes.string
}

export default RouteButton;
