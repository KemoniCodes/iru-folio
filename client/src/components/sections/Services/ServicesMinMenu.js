import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ServicesMinMenu = ({
  service: { service, _id, number, title, minTitle, loading },
}) => {
  return loading === true || null ? (
    <h2>Loading...</h2>
  ) : (
    <Fragment>
      <Link to={`${_id}`}>
        <span>{number}</span>
        <h2>{minTitle}</h2>
      </Link>
    </Fragment>
  );
};

ServicesMinMenu.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServicesMinMenu;
