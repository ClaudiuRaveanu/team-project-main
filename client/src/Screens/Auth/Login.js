import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext/use-auth';
import { Redirect } from 'react-router-dom'




const urlUser = 'http://localhost:3000/Users/user'

const LogIn = () => {

    
    
    const [user,setUser] = useState({
        username:"",
        password:""
    });

    const [redirectRef,setRedirectRef] = useState(false);

    const auth = useAuth();

    
    const getUser = () => {
        axios.get(urlUser, { withCredentials: true }).then( (res) => console.log(res.data))
    }

    const setRedirect = () => {
        setRedirectRef(true);
    }

    if(redirectRef === true) {
        return <Redirect  to='/' />
    }

    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="username" onChange={ (e) => setUser({...user, username: e.target.value})}/>
            <input type="password" placeholder="password" onChange={ (e) => setUser({...user, password: e.target.value})}/>
            <button onClick={() => {
                auth.signin(user,setRedirect)
                
            }
            
        
        }
            
            >Login</button>
            <button onClick={getUser}>User</button>
        </div>
    );
}

export default LogIn;