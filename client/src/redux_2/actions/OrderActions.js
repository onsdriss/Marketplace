import axios from 'axios'
import {
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAIL,
    ORDER_LIST_REQUEST,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    ORDER_DELIVERED_REQUEST,
    ORDER_DELIVERED_SUCCESS,
    ORDER_DELIVERED_FAIL
  } from '../constants/orderConstants'

//GET ALL ORDERS
export const listOrders = () => async (dispatch) => {
  try {
    dispatch({ type: ORDER_LIST_REQUEST })

    const token = window.localStorage.getItem("currentUser")
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    const { data } = await axios.get('http://localhost:5000/api/orders', config)

    dispatch({
      type: ORDER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


//GET DETAILS
export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    })

    const token = window.localStorage.getItem("currentUser")
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  
    const {data} = await axios.get(`http://localhost:5000/api/orders/${id}`);

    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
      const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
      
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: message,
    });
    
  }
};

//ORDER DELIVER
export const deliverOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DELIVERED_REQUEST,
    })

    const token = window.localStorage.getItem("currentUser")
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  
    const {data} = await axios.put(`http://localhost:5000/api/orders/${order._id}/delivered`,{},config);

    dispatch({
      type: ORDER_DELIVERED_SUCCESS,
      payload: data,
    })
  } catch (error) {
      const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
      
    dispatch({
      type: ORDER_DELIVERED_FAIL,
      payload: message,
    });
    
  }
};