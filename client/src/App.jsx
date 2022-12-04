import Product from "./pages/Products/Product";
import Home from "./pages/Home";
import ProductList from "./pages/Products/ProductList";
import Register from "./pages/Login_Rege/Register";
import Cart from "./pages/Orders/Cart";
import Products from "./pages/Products/Products";
import Applications from "./pages/Applications/Applications";
import ApplicationList from "./pages/Applications/ApplicationList";
import TrackOrders from "./pages/Orders/TrackOrders";
import './App.css';
import Single from "./pages/SinglePost/SinglePost";
//import Wishlist  from './components/wishlist/Wishlist';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Wishlist from "./pages/Wishlist";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import ShippingScreen from "./pages/Orders/ShippingScreen";
import PaymentScreen from "./pages/Orders/PaymentScreen";
import PlaceOrder from "./pages/Orders/PlaceOrder";
import OrderScreen from "./pages/Orders/OrderScreen";
import Navbar from "./components/navbar/Navbar";
import Navbar2 from "./components/Navbar2";
import ApplicationType from "./pages/Applications/ApplicationType";
import Faq from "./pages/FAQ/Faq";
import Steps from "./pages/ROS/Steps";
import Mainn from "./pages/ROS/Mainn";

import HomeBackend from "./pages/Backend/home/HomeBackend";
import UserList from "./pages/Backend/userList/UserList";
import User from "./pages/Backend/user/User";
//import Write from "./pages/Backend/writeArticle/Write";
import NewUser from "./pages/Backend/newUser/NewUser";
import OrderList from "./pages/Backend/orders/OrderList";
import OrderD from "./pages/Backend/orders/OrderD";
import ProductAnalytics from "./pages/Backend/analytics/ProductAnalytics";
import ProductList2 from "./pages/Backend/productList2/ProductList2";
import Topbar from "./components/Backend/topbar/Topbar";
import Sidebar from "./components/Backend/sidebar/Sidebar";
import Login2 from "./pages/Login_Rege/Login2";
import ForgottenPassword from "./pages/ForgottenPassword/ForgottenPassword";
import Pp from "./pages/Backend/product/Pp";
import ResetPass from "./pages/ForgottenPassword/ResetPass";
//import Write2 from "./pages/Backend/writeArticle/Write2";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const admin = useSelector((state) => state.user?.currentUser?.isAdmin);

  //const userLogin = useSelector((state) => state.userLogin)
  //const { user  } = userLogin
  

  return (
    <Router>
     
      <Switch>
        <Route exact path="/">
          {admin ? <Redirect to="/backend" /> : <Home />}
          
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/applications">
          <Applications />
        </Route>
        <Route path="/wishlist">
          <Wishlist />
        </Route>
        <Route path="/contactus">
          <Contact />
        </Route>
        <Route path="/applicationList/:application">
          <ApplicationList />
        </Route>
        <Route path="/applicationType/:type">
          <ApplicationType />
        </Route>
        <Route path="/post">
          <Blog />
        </Route>
        <Route path="/posts/:postId">
          <Single />
        </Route>
        <Route path="/trackOrders">
          <TrackOrders />
        </Route>
        
        <Route path="/steps">
          <Steps/>
        </Route>
        <Route path="/mainn">
          <Mainn/>
        </Route>
        <Route path="/forgottenpassword">
          <ForgottenPassword/>
        </Route>
        <Route path="/reset-password/:id">
          <ResetPass/>
        </Route>
        <Route path="/FAQ" component={Faq}/>
        <Route path="/shipping" component={ShippingScreen}/>
        <Route path="/payment" component={PaymentScreen}/>
        <Route path="/placeorder" component={PlaceOrder}/>
        <Route path="/order/:id" component={OrderScreen}/>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login2/>}
          
        </Route>

      
       
        {/********** backend ************************************************************************************************/}
       

        
        {admin && (
          <>
          <Topbar/>
        <div className="container2">
        <Sidebar />
        <Route exact path="/backend">
            <HomeBackend />
        </Route>
        <Route path="/backend/users">
            <UserList />
        </Route>
        <Route path="/backend/user/:userId">
            <User />
        </Route>
        <Route path="/backend/newUser">
            <NewUser />
        </Route>
        <Route path="/backend/orders">
            <OrderList />
        </Route>
        <Route path="/backend/order/:orderId">
            <OrderD />
        </Route>
        <Route path="/backend/analytics">
            <ProductAnalytics />
        </Route>
        {/*<Route path="/backend/articles">
            <Write />
        </Route>*/}
        <Route path="/backend/products">
            <ProductList2 />
        </Route>
        <Route path="/backend/product">
            <Pp />
        </Route>
    
        
        </div>
        </>
        )}
  
      </Switch>
    </Router>
  );
};

export default App;
