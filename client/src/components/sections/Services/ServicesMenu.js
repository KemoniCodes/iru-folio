import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ServicesMenu = ({
  service: { service, _id, number, title, minTitle },
}) => {
  return (
    <Fragment>
      <Link to={`${_id}`}>
        <span>{number}</span>
        <h2>{title}</h2>
      </Link>
    </Fragment>
  );
};

ServicesMenu.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServicesMenu;
