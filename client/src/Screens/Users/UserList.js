import React, {useState,useEffect} from 'react';
import { Typography } from '@material-ui/core';
import axios from 'axios'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const url = 'http://localhost:3000/users/getUsers'

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


const UserList = () => {
    const classes = useStyles();
    const [data,setData] = useState([]);
    useEffect(() => {
        axios.get(url, { withCredentials: true }).then( (res) => { 
            setData(res.data)
            console.log(res.data)
         }).catch( (e) => console.log(e) )
    },[])

    return(
        <>
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
                                                pathname:'/UserDetails',
                                                state:
                                                { data: data[index] }
                                        }}
                                     >{row.username}</Link>
                                    }
                                    </TableCell>
                                    <TableCell >{row.surname}</TableCell>
                                </TableRow>
                                    
                            )
                            )}
                        </TableBody>
                        </Table>
                    </TableContainer>
        </>
    )
}

export default UserList;