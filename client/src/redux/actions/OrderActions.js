import axios from 'axios'
import {
    ORDER_CREATE_RESET,
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
    ORDER_PAY_FAIL,
    ORDER_LIST_MY_SUCCESS,
    ORDER_LIST_MY_FAIL,
    ORDER_LIST_MY_REQUEST,
  } from '../constants/orderConstants'

  import {
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAIL,
    ORDER_LIST_REQUEST,
    ORDER_DELIVERED_REQUEST,
    ORDER_DELIVERED_SUCCESS,
    ORDER_DELIVERED_FAIL
  } from '../constants/orderConstants'
  import {CART_CLEAR_ITEMS} from '../constants/CartConstants'
  import { logout  } from './UserActions';
  
//CREATE ORDER
export const createOrder = (order) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_CREATE_REQUEST,
      })
      
      const token = window.localStorage.getItem("currentUser")
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
      //const user = useSelector((state) => state.user.currentUser);
  
      const { data } = await axios.post(`http://localhost:5000/api/orders`, order, config)
  
      dispatch({
        type: ORDER_CREATE_SUCCESS,
        payload: data,
      })
      dispatch({
        type: CART_CLEAR_ITEMS,
        payload: data,
      })
      
      localStorage.removeItem("cartItems")
    } catch (error) {
        const message = error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        if(message == "Not authorizes , token failed") {
            dispatch(logout());
        }
      dispatch({
        type: ORDER_CREATE_FAIL,
        payload: message,
      });
    }
};


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


//ORDER PAY
export const payOrder = (orderId,paymentResult) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_PAY_REQUEST,
    })
    
    const token = window.localStorage.getItem("currentUser")
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const { data } = await axios.put(`http://localhost:5000/api/orders/${orderId}/pay`, paymentResult, config)

    dispatch({
      type: ORDER_PAY_SUCCESS,
      payload: data,
    })
  } catch (error) {
      const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
      if(message == "Not authorizes , token failed") {
          dispatch(logout());
      }
    dispatch({
      type: ORDER_PAY_FAIL,
      payload: message,
    });
  }
};

//USER ORDERS
export const listMyOrders = () => async (dispatch) => {
  try {
    dispatch({
      type: ORDER_LIST_MY_REQUEST,
    })
    
    const token = window.localStorage.getItem("currentUser")
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const { data } = await axios.get(`http://localhost:5000/api/orders/get`, config)

    dispatch({
      type: ORDER_LIST_MY_SUCCESS,
      payload: data,
    })
  } catch (error) {
      const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
      if(message == "Not authorizes , token failed") {
          dispatch(logout());
      }
    dispatch({
      type: ORDER_LIST_MY_FAIL,
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

