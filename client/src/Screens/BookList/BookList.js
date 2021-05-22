import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import { Grid, Typography, AppBar, Button, Container } from '@material-ui/core'
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

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20,
    },
    table: {
        minWidth: 650,
      },
    link:{
        marginTop:30
    },
    typo:{
        marginBottom:30,
        alignSelf:'center'
    }
  }));

const url = 'http://localhost:3000/Books'


const BookList = () => {

    const classes = useStyles();

    const [data,setData] = useState([]);
    useEffect(() => {
        axios.get(url, { withCredentials: true }).then( (res) => { 
            setData(res.data)
            console.log(res.data[0])
         }).catch( (e) => console.log(e) )
    },[])
    

    const preventDefault = (event) => event.preventDefault();
    return(
        <>
            
                <Typography className={classes.typo} >Book List</Typography>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label='simple table'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Number</TableCell>
                                    <TableCell>Book name</TableCell>
                                    <TableCell>Author</TableCell>
                                </TableRow>
                            </TableHead>
                        
                        <TableBody>
                            { data.map( (row, index) =>(

                                <TableRow key = {row._id}>
                                    <TableCell>{index}</TableCell>
                                    <TableCell component="th" scope="row">
                                    {  
                                     <Link 
                                        to = {{
                                                pathname:'/details',
                                                state:
                                                { data: data[index] }
                                        }}
                                     >{row.title}</Link>
                                    }
                                    </TableCell>
                                    <TableCell >{row.author}</TableCell>
                                </TableRow>
                                    
                            )
                            )}
                        </TableBody>
                        </Table>
                    </TableContainer>
                
                <Container className={classes.link}> 
                <Button component={Link} to='/add-book'>Add Books</Button>               
                
                </Container>  
                
        </>
    );
};

export default BookList;