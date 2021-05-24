import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import {Grid, Typography, Paper, Toolbar, AppBar, List, ListItem, Link as MaterialLink } from '@material-ui/core';
// import { getCurrentDate } from '../App';
// import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useAuth } from './AuthContext/use-auth';

export default function Dashboard() {

    const paperStyle = { padding: '0px 0px', width: 'auto', margin: '0px auto', textAlign: 'center', background: 'transparent', display: 'flex' }
    const btnStyle = { width: '12vw', background: '#3f51b5', color: '#FFFFFF', height: '2.4vw', marginLeft: '40px', marginRight: '40px'}
    // const boxStyle = { background:'#FFFFFF', textAlign:'center', padding:'2px 2px', marginTop:9, justifyContent:'center', height:500 }
    // const narrowBox = { background:'#FFFFFF', textAlign:'center', padding:'0px 10px', width:'15%', margin:0, height:'100%'};
    const container = { display: 'flex', justifyContent: 'center', fontSize:'1.12vw' }

    // let day = getCurrentDate('-');
    // const datas = [{ startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Just for the sake of working' }];

    const useStyles = makeStyles({
        root: {
            width: "14vw",
            margin: '0.9vw',
        },
        media: {
            height: 0,
            paddingTop: '150%',
            objectFit: 'cover',
        },
        body: {
            alignSelf: 'end',
            textAlign: 'center',
            justifyContent: 'center',
        },
        actions: {
            display: 'flex',
            justifyContent: 'center',
        },
        customWidth: {
            maxWidth: 500,
        },
    });

    const classes = useStyles();

    const url = 'http://localhost:3000/books/random';

    // var random = Math.floor(Math.random() * 5);

    const [data,setData] = useState([]);
    useEffect(() => {
        axios.get(url, { withCredentials: true }).then( (res) => { 
            setData(res.data)
        }).catch( (e) => console.log(e) )
    },[])

    const auth = useAuth();

    console.log(auth.user);

    const preventDefault = (event) => event.preventDefault();
  
    return (
        <Grid>
            <AppBar position='static' style={{background: '#757de8', marginTop: 'auto', justifyContent:'center', flexDirection:'column', textAlign:'center'}}>
                <Toolbar gutterbottom="true">
                    <Paper style={paperStyle} elevation={0}>
                        <Button style={btnStyle} href="/reserve">Rezervă o carte</Button>
                        <Button href="/wishlist" style={btnStyle}>Wishlist</Button>
                        <Typography variant='h6' display='block' style={container}>Bibliotech UVT</Typography>
                        <Button href="/add-book" style={btnStyle}>Adaugă carte</Button>
                        <Button href="/books" style={btnStyle}>Cărți</Button>
                    </Paper>
                </Toolbar>
            </AppBar>
                <Paper style={{ padding: '20px 20px', width: '50vw', margin: '20px auto', flexDirection:'column', display: 'flex' }} elevation={5}>
                    <Grid align="center" style={{ marginBottom:25 }}>
                        <MaterialLink style={{ fontSize:'25px' }} underline="always" variant='string' color='textPrimary'>Bun venit, {auth.user}!</MaterialLink>
                    </Grid>
                    <Paper style={{padding: '0px 0px', width: 'auto', margin: '0px auto', textAlign: 'center', background: 'transparent', display: 'flex'}} elevation={0}>

                        <form>
                        <Paper style={{padding: '0px 0px', width: '100%', margin: '0px auto', flexDirection:'column', display: 'flex'}} elevation={0}>

                            <Grid align='center' style={{ width:'100%', marginBottom:20 }}>
                                <Typography>Astăzi nu aveți nicio carte de predat.</Typography>
                            </Grid>

                            <Grid align="center" style={{ width:'100%', marginBottom:0 }}>
                                <Paper elevation={3} style={{padding:'5px 5px'}}><Typography>Sugestia săptămânii</Typography></Paper>
                                <Card className={classes.root} key={data._id}>
                                <Link to = {{ pathname:'/view-book', state: { data: data } }} className={classes.actions} style={{ color: '#000' }}>
                                    <CardActionArea>
                                        <CardMedia className={classes.media} image={data.cover} title={data.title}></CardMedia>
                                    <CardContent>
                                        <Typography color="textPrimary" variant='body1' align="center" component="h2" style={{ height:"2.1vw", fontSize:"0.98vw", marginBottom:"20px" }}>
                                            <u>{data.title}</u>
                                        </Typography>
                                        <Typography noWrap align="center" variant="body2" component="p" style={{ color:"#335ebd", marginBottom:'0px', fontSize:"0.9vw" }}>
                                            {data.author}
                                        </Typography>
                                    </CardContent>
                                    </CardActionArea>
                                    </Link>
                                    <CardActions>
                                        <Button className={classes.actions} startIcon={<AddShoppingCart/ >} color="primary" variant="outlined" style={{ fontSize:"0.9vw"}} fullWidth>
                                            Adaugă în wishlist
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Paper>
                        {/* <Button href="/addBook">Redirect</Button> */}
                        </form>
                    </Paper>
                </Paper>
        </Grid>
    );
}
