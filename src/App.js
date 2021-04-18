import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import BookEvent from './components/Dashboard/BookEvent/BookEvent';
import BookingList from './components/Dashboard/BookingList/BookingList';
import AddTestimonial from './components/AddTestimonial/AddTestimonial';
import OrderList from './components/Dashboard/OrderList/OrderList';
import AddService from './components/AddService/AddService';
import AddAdmin from './components/AddAdmin/AddAdmin';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ManageService from './components/Dashboard/ManageService/ManageService';

export const UserContext = createContext(); 

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/addBooking">
            <BookEvent></BookEvent>
          </Route>
          <PrivateRoute path="/bookings">
            <BookingList></BookingList>
          </PrivateRoute>
          <Route path="/addTestimonial">
            <AddTestimonial></AddTestimonial>
          </Route>
          <PrivateRoute path="/orders">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/AddService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/AddAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <ManageService></ManageService>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;