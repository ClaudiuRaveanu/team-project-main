
import React from 'react';
//import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { ProvideAuth } from './Screens/AuthContext/use-auth';
import Navbar from './Screens/Navbar/Navbar';

// export function getCurrentDate(separator='') {
//     let myCurrentDate = new Date();
//     let date = myCurrentDate.getDate();
//     let month = myCurrentDate.getMonth() + 1;
//     let year = myCurrentDate.getFullYear();

//     return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
// }

function App() {
return (
    <ProvideAuth>
        <>
            <Navbar></Navbar>
        </>
    </ProvideAuth>
    );
}

export default App;
