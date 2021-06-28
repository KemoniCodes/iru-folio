import axios from "axios";


import { GET_SERVICES, GET_SERVICE, SERVICE_ERROR } from "./types";

//Get All Services
export const getServices = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/services");
    dispatch({
      type: GET_SERVICES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get Services by ID
export const getServicesbyID = (serviceId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/services/${serviceId}`);
    dispatch({
      type: GET_SERVICE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
