import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
    useHistory,
    useLocation
  } from "react-router-dom";

import Home from '../Home/Home';
import LoginPage from '../Auth/Login';
import BookDetail from '../BookDetail/BookDetail';
import AddBook from '../Form/Form';
import BookList from '../BookList/BookList';
import { useAuth } from '../AuthContext/use-auth';
import LoginScreen from '../LoginScreen';
import RegisterScreen from '../RegisterScreen';
import DashboardScreen from '../Dashboard';
import BooksView from '../BooksView';
import BookReserve from '../BookReserve';
import {AddBook as oldAdd} from '../AddBook';
import AddReview from '../AddReview';
import ViewWishlist from '../ViewWishlist';
import ViewBook from '../ViewBook';

const PrivateRoute = ( {children , ...rest} ) => {
  const auth = useAuth();

  return(
    <Route { ...rest} render={() => {
      return auth.user === undefined ? <Redirect to='/login'/> : children

    }}/>
  );
} 

const Navbar = (props) => {
    const auth = useAuth()
    return(
        
        
          
            
            <Router>
            <Switch>
            <PrivateRoute path='/addBook'>
                <AddBook />
            </PrivateRoute>
            <Route path='/bookList'>
                <BookList />
            </Route>

            <Route path="/login-old">
              <LoginPage />
            </Route>

            <PrivateRoute path="/reserve">
                <BookReserve/>
            </PrivateRoute>
            <Route path='/add-book'>
                <AddBook />
            </Route>
            <Route path="/register">
                <RegisterScreen/>
            </Route>
            <Route path="/login">
                <LoginScreen/>
            </Route>
            <Route path="/books">
                <BooksView/>
            </Route>
            <Route path="/add-review">
                <AddReview/>
            </Route>
            <Route path="/wishlist">
                <ViewWishlist/>
            </Route>
            <Route path="/view-book">
                <ViewBook />
            </Route>
            <Route path="/details">
                <BookDetail />
            </Route>
            <Route path="/dashboard">
                <Home />
            </Route>



            <Route exact path="/">
                <DashboardScreen/>
            </Route>
            </Switch>
            
            </Router>
            
            
            
          
            
    );
}

export default Navbar;