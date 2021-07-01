import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getServicesbyID } from "../../../actions/service";
import Bullet from "../../../images/COLOR CHANGER.png";
import Services from "../../pages/Services";

const ServicesInfo = ({
  getServicesbyID,
  service: { services, service, loading, _id },
  match,
}) => {
  useEffect(() => {
    getServicesbyID(match.params.id);
  }, [getServicesbyID, match.params.id]);

  return loading === true || null ? (
    <h2>Loading...</h2>
  ) : (
    <Fragment>
      <Services />

      <div className='info'>
        <div className='services-info'>
          <div className='title'>
            <span>{service.number}</span>
            <h2>{service.title}</h2>
          </div>

          <h3>
            Timeline:<p>{service.timeline}</p>
          </h3>
          <h3>
            Investment:
            <p className='margin'>
              {service.investment} <span>{service.price}</span>
            </p>
          </h3>

          <p className='desc'>{service.description}</p>

          <h3 className='incl'>What's Included</h3>
          <ul>
            {service.deliverables.length > 0 ? (
              service.deliverables.map((d) => {
                return (
                  <div className='deliverable' key={d}>
                    <img src={Bullet} alt='bullet' /> <li>{d}</li>
                  </div>
                );
              })
            ) : (
              <h4>No deliverables listed</h4>
            )}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

ServicesInfo.propTypes = {
  getServicesbyID: PropTypes.func.isRequired,
  service: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  service: state.service,
});

export default connect(mapStateToProps, { getServicesbyID })(ServicesInfo);
