
import React from 'react';
//import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import DashboardScreen from './Screens/Dashboard';
import BooksView from './Screens/BooksView';
import BookReserve from './Screens/BookReserve';
import {AddBook as oldAdd} from './Screens/AddBook';
import AddReview from './Screens/AddReview';
import ViewWishlist from './Screens/ViewWishlist';
import ViewBook from './Screens/ViewBook';
import Home from './Screens/Home/Home';
import AddBook from './Screens/Form/Form';
import BookDetail from './Screens/BookDetail/BookDetail';
import BookList from './Screens/BookList/BookList';

// export function getCurrentDate(separator='') {
//     let myCurrentDate = new Date();
//     let date = myCurrentDate.getDate();
//     let month = myCurrentDate.getMonth() + 1;
//     let year = myCurrentDate.getFullYear();

//     return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
// }

function App() {
return (
    <Router>
        <Switch>
            <Route exact path="/">
                <DashboardScreen/>
            </Route>
            <Route path="/reserve">
                <BookReserve/>
            </Route>
            <Route path='/add-book'>
                <AddBook />
            </Route>
            <Route path="/register">
                <RegisterScreen/>
            </Route>
            <Route path="/signin">
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
        </Switch>
    </Router>
    );
}

export default App;
