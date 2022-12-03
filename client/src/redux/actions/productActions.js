import axios from 'axios'
 import {
   PRODUCT_LIST_REQUEST,
   PRODUCT_LIST_SUCCESS,
   PRODUCT_LIST_FAIL,
   PRODUCT_DETAILS_REQUEST,
   PRODUCT_DETAILS_SUCCESS,
   PRODUCT_DETAILS_FAIL,
   PRODUCT_CREATE_REVIEW_REQUEST,
   PRODUCT_CREATE_REVIEW_SUCCESS,
   PRODUCT_CREATE_REVIEW_FAIL,
 } from '../constants/productConstants'
 import { useSelector } from "react-redux";

 export const listProducts = () => async (dispatch) => {
   try {
     dispatch({ type: PRODUCT_LIST_REQUEST })

     const { data } = await axios.get('http://localhost:5000/api/products')

     dispatch({
       type: PRODUCT_LIST_SUCCESS,
       payload: data,
     })
   } catch (error) {
     dispatch({
       type: PRODUCT_LIST_FAIL,
       payload:
         error.response && error.response.data.message
           ? error.response.data.message
           : error.message,
     })
   }
 }


//ajout_review
export const createProductReview = (productId, review) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_REVIEW_REQUEST,
    })

    //get the current user
    const token = window.localStorage.getItem("currentUser")
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }

      const { data } =await axios.post(`http://localhost:5000/api/products/${productId}/review`, review,config)

    dispatch({
      type: PRODUCT_CREATE_REVIEW_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

