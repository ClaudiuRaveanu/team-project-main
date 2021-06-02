import React, { useState } from 'react';
import { TextField, Typography, Button, Grid, Grow, Container, Paper} from '@material-ui/core';
import { useLocation , useHistory} from 'react-router-dom';
import useStyles from './styles';
import axios from 'axios';

const updateURL = 'http://localhost:3000/books/update/';
const deleteURL = 'http://localhost:3000/users/delete/'

const UserDetail = (  ) => {
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();
    const data =  location.state?.data;
    
    const [user,setUser] = useState({
        borrowings:data.borrowings,
        surname:data.surname,
        username:data.username,
        id:data._id,
        email:data.email,
        id_nr:data.id_nr,
        password:data.password,
        phone_nr:data.phone_nr,
        reservations:data.reservations,
        wishlist:data.wishlist


    });

    
    const handleDelete = () =>{
        console.log(data._id)
        axios.delete(deleteURL + data._id, { withCredentials: true }).then( (res) => console.log(res)).catch( (e) => console.log(e));
       
    }
    
    return (
        
         <Container >
            <Container >
            <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} noValidate autoComplete="off"
            onSubmit={() => console.log('ciapo')}
            >
        <TextField
            name="email" 
            variant='outlined'
            fullWidth
            label="Email"
            value={user.email}
            onChange={() => {}}
            />
            <TextField
            name="username" 
            variant='outlined'
            fullWidth
            label="Username"
            value={user.username}
            onChange={() => {}}
            />
            <TextField
            name="id" 
            variant='outlined'
            fullWidth
            label="Id"
            value={user.id}
            onChange={() => {}}
            />
            <TextField
            name="password" 
            variant='outlined'
            fullWidth
            label="Password"
            value={user.password}
            onChange={() => {}}
            />
            <TextField
            name="phone_nr" 
            variant='outlined'
            fullWidth
            label="Phone"
            value={user.phone_nr}
            onChange={() => {}}
            />
            <TextField
            name="reservations" 
            variant='outlined'
            fullWidth
            label="Reservations"
            value={user.reservations}
            onChange={() => {}}
            />
            <TextField
            name="borrowings" 
            variant='outlined'
            fullWidth
            label="Borrowings"
            value={user.borrowings}
            onChange={() => {}}
            />
            <TextField
            name="wishlist" 
            variant='outlined'
            fullWidth
            label="Wishlist"
            value={user.wishlist}
            onChange={() => {}}
            />
            

            <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='primary'
            size='large'
            type='submit'
            >Update</Button>
            
            
            </form>

            </Paper>

            <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='primary'
            size='large'
            onClick={() => history.push('/admin')}
            >Get Back</Button>
             <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='secondary'
            size='large'
            type='button'
            onClick={ () => handleDelete()}
            >Delete</Button>
        </Container>
        </Container>
        
    );
}

export default UserDetail;