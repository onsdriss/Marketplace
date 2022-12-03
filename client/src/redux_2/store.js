import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import productReducer from "./productRedux";
import orderReducer from "./orderRedux";
import postReducer from "./postRedux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { orderListReducer,orderDetailsReducer,orderDeliveredReducer} from './reducers/OrderReducers';
import { userDetailsReducer} from './reducers/UserReducers';

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

//LOGIN
const userInfoFromStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo'))
: null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
 }

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  post: postReducer,
  order: orderReducer,
  ordersL: orderListReducer,
  orderDetails:orderDetailsReducer,
  orderDelivered: orderDeliveredReducer,
  userDetails: userDetailsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  initialState,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
