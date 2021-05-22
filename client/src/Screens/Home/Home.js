import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'

import { Grid, Typography, AppBar, } from '@material-ui/core'

import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from '../AuthContext/use-auth'



import BookList from '../BookList/BookList';
import UserList from '../Users/UserList';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      marginBottom:5
    },
    appBar: {
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20,
    },
    table: {
        minWidth: 650,
      },
    paper:{
        margin:15
    },
    link:{
        marginBottom:10
    }
  }));




const Home = () => {

    const classes = useStyles();
    const history = useHistory()
    
    const [showBooks,setShowBooks] = useState(false);
    const [showUsers,setShowUsers] = useState(false);
    
    const auth = useAuth();

    
    return(
        <>
            <AppBar position='static' className={classes.appBar}>
                <Typography variant="h6" className={classes.title}>
                    Staff panel
                </Typography>
                <button onClick = {() => history.push('/login')}>LogIn</button>
            </AppBar>
            
            
            <Grid container> 

            <Grid item xs={6}>
            <Typography variant="h6" className={classes.title}>
                    Management
            </Typography>
            {showBooks && <BookList />}
            {showUsers && <UserList />}
            

            </Grid>

            <Grid item xs={6}>
            <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.title}>
                   Book Management
            </Typography>
            
            <h4 onClick={
                () => {
                    setShowBooks(!showBooks);
                    setShowUsers(false);
                }
            }>Book</h4>
            </Paper>

            <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.title}>
                   User Management
            </Typography>
            
            <h4
            className={classes.link}
            onClick={ () => {
                setShowUsers(!showUsers);
                setShowBooks(false);
            }}
            
            >Users</h4>
            </Paper>
            </Grid>
             
            <button onClick={() => {
                auth.signout()
                
                }}>Logout</button>
                
            </Grid>
            
        </>
    );
};

export default Home;