import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    isFetching: false,
    error: false,
  },
  reducers: {
   
    //ADD
    addPostStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addPostSuccess: (state, action) => {
      state.isFetching = false;
      state.posts.push(action.payload);
    },
    addPostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  addPostStart,
  addPostSuccess,
  addPostFailure,
} = postSlice.actions;

export default postSlice.reducer;
