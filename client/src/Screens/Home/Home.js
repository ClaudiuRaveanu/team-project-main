import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import { Grid, Typography, AppBar, Button } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Link } from 'react-router-dom';

import BookDetail from '../BookDetail/BookDetail';
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

const url = 'http://localhost:3000/books'


const Home = () => {

    const classes = useStyles();

    const [data,setData] = useState([]);
    const [showBooks,setShowBooks] = useState(false);
    const [showUsers,setShowUsers] = useState(false);
    
    

    const preventDefault = (event) => event.preventDefault();
    return(
        <>
            <AppBar position='static' className={classes.appBar}>
                <Typography variant="h6" className={classes.title}>
                    Staff panel
                </Typography>
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
            <Link 
            className={classes.link}
            onClick={ () => {
                setShowBooks(!showBooks);
                setShowUsers(false);
            }
            } 
            
            
            >Books</Link>
            </Paper>

            <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.title}>
                   User Management
            </Typography>
            <Link 
            className={classes.link}
            onClick={ () => {
                setShowUsers(!showUsers);
                setShowBooks(false);
            }}
            
            >Users</Link>
            </Paper>
            </Grid>
             
                
                
            </Grid>
            
        </>
    );
};

export default Home;