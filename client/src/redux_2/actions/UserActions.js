import axios from 'axios'
import {
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
  } from '../constants/userConstants'


//GET DETAILS
export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_DETAILS_REQUEST,
      })
  
      const token = window.localStorage.getItem("currentUser")
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    
      const {data} = await axios.get(`http://localhost:5000/api/users/find/${id}`,config);
  
      dispatch({
        type: USER_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (error) {
        const message = error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        
      dispatch({
        type: USER_DETAILS_FAIL,
        payload: message,
      });
      
    }
  };