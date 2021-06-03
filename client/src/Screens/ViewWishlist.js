import React, {useState, useEffect } from 'react';
import {Grid, Typography, Paper, Toolbar, AppBar, List, ListItem, Link as MaterialLink } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom';
import { useAuth } from './AuthContext/use-auth'
import axios from 'axios';
// import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
// import IconButton from '@material-ui/core/IconButton';

const userUrl = 'http://localhost:3000/Users/currentUser'
const wishes = 'http://localhost:3000/Users/wishlist'
const updateUser = 'http://localhost:3000/Users/deleteWishlist'

export default function ViewWishlist() {

    const paperStyle = { padding: '0px 0px', width: 'auto', margin: '4px auto', textAlign: 'top-center', background: 'transparent', display: 'flex' }
    const btnStyle = { width: '12vw', background: '#3f51b5', color: '#FFFFFF', height: '2.4vw', marginLeft: '40px', marginRight: '40px'}
    // const boxStyle = { background:'#FFFFFF', textAlign:'center', padding:'2px 2px', marginTop:9, justifyContent:'center', height:500 }
    // const narrowBox = { background:'#FFFFFF', textAlign:'center', padding:'0px 10px', width:'15%', margin:0, height:'100%'};
    const container = { display: 'flex', justifyContent: 'center', fontSize:'1.12vw' }

    // let day = getCurrentDate('-');
    // const datas = [{ startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Just for the sake of working' }];

    const auth = useAuth();

    const useStyles = makeStyles({
        root: {
            maxWidth: '14vw',
            width: '12vw',
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
            fullWidth: true,
            justifyContent: 'center',
        },
        customWidth: {
            maxWidth: 500,
          },
    });

    const [userData, setUser] = useState([]);

    const [data, setData] = useState([]);

    const [wishBooks, setWish] = useState([]);

    const [booksNr, setNumber] = useState(0);


    useEffect(() => {
        async function call3(){axios.get('http://localhost:3000/Books/total', {withCredentials: true}).then((res) => { 
            setNumber(res.data);
            console.log(booksNr);
        }).catch((e) => {console.log(e)});}

        async function call() {
            
                axios.get(wishes, { withCredentials: true }).then( (res) => {
                    setWish(res.data)
                    console.log(res.data)
                }).catch( (e) => console.log(e) )
           
        }

        async function call2(){if (auth.user !== undefined) {
            axios.get(userUrl, {withCredentials: true}).then( (res) => {
                setUser(res.data); call();
            }).catch( (e) => console.log(e) ) 
        }}

        call2();
        call3();
    }, []);

    const classes = useStyles();

    const handleDeleteReview = async (request) =>{

        await axios.patch(updateUser,request).then( (res) => console.log(res)).catch( (e) => console.log(e))
    }
    
    return (
        <Grid container>

            <Grid container direction="row" justify="space-evenly">
            <AppBar position='static' style={{background: '#757de8', marginTop: 'auto'}}>
                <Toolbar gutterbottom="true">
                    <Paper style={paperStyle} elevation={0}>
                        <Button href="/" style={btnStyle}>Acasă</Button>
                        <Typography variant='h6' style={container}>Bibliotech UVT</Typography>
                        {/* <Button href="/add-book" style={btnStyle}>Adaugă carte</Button> */}
                        {/* <Button style={btnStyle} href="/book-a-book">Rezervă o carte</Button> */}
                        <Button href="/books" style={btnStyle}>Cărți</Button>
                    </Paper>
                </Toolbar>
            </AppBar>
            </Grid>

            { (auth.user === undefined) ? 
                <Paper style={{ margin: "auto", width: 'auto', padding: '0',
                background: 'transparent', overflow:'auto', maxWidth:'100%', textAlign: 'center' }} elevation={0}>
                <MaterialLink style={{ fontSize: '25px', marginTop: 30}} color="secondary" href="/login" underline="always">
                    Wishlist-ul nu a putut fi găsit fiindcă nu sunteți logat. Intrați în cont.
                </MaterialLink> 
                </Paper>
                
                : (wishBooks === undefined) ? 

                <Paper style={{ margin: "auto", width: 'auto', padding: '0',
                background: 'transparent', overflow:'auto', maxWidth:'100%', textAlign: 'center' }} elevation={0}>
                <MaterialLink style={{ fontSize: '25px'}} variant="String" underline="always">
                    Wishlist-ul dumneavoastră nu conține nicio carte.
                </MaterialLink> 
                </Paper>

                :
            
            <Paper style={{ margin: "auto", width: '90%', padding: '0',
                background: 'transparent', overflow:'auto', maxWidth:'100%', textAlign: 'center' }} elevation={0}>
                

                <Grid align="center" style={{ marginBottom:10, marginTop:20 }}>
                    <MaterialLink style={{ fontSize:'25px' }} variant='string' underline='always' color='textPrimary'>Wishlist-ul meu</MaterialLink>
                </Grid>

                <Grid container justify="space-evenly" alignItems="flex-start" direction="row" style={{ background:"transparent", width:"90%", margin:"auto" }}>

                { wishBooks.map( (carte, index) => (

                    <Grid item xs={2} key={index} style={{margin:"1.3vw"}}>

                    <Card className={classes.root} style={{ margin: "auto" }}>

                        <Link to = {{ pathname:'/view-book', state: { data: wishBooks[index] } }} className={classes.actions} color="primary">

                        <CardActionArea style={{ maxWidth:"14vw", minWidth:"12vw" }}>
                            <CardMedia className={classes.media} image={wishBooks[index].cover} title={wishBooks[index].title}></CardMedia>
                                <CardContent>
                                    <Typography gutterBottom color="textPrimary" variant='body1' align="center" component="h2" style={{ height:"5vw", fontSize:"1.1vw" }}>
                                        {wishBooks[index].title}
                                    </Typography>
                                    <Typography noWrap variant="body2" component="p" style={{ color:"#335ebd", marginBottom:'0px', marginTop:"8px", fontSize:"0.97vw" }}>
                                        {wishBooks[index].author}
                                    </Typography>
                                </CardContent>
                        </CardActionArea>
                        </Link>
                    <CardActions>
                        <Button style={{ fontSize: "0.8vw", marginTop:"-10px" }} fullWidth aria-label="wishlist" color="secondary" variant="outlined"
                            onClick={() => {
                                console.log(wishBooks)

                                console.log(index);
                                console.log(userData);
                                const request = {
                                    _id:userData._id,
                                    wishlist_id: userData.wishlist[index]._id
                                }
                                console.log(userData.wishlist[index]._id);
                                userData.wishlist?.splice(index);
                                handleDeleteReview(request);
                                axios.patch(updateUser + wishBooks[index]._id, userData, { withCredentials: true }).then( (res) => { console.log(res) } ).catch( (e) => { console.log(e) });
                                window.location.reload();
                            } }>Nu o mai vreau</Button>
                    </CardActions>
                </Card>

                </Grid>
                ))}


                </Grid>

            </Paper>

            }

        </Grid>
    );
}
