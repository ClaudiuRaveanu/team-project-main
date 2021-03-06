import {Grid, Typography, Paper, Toolbar, AppBar, List, ListItem, Fab, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { useAuth } from './AuthContext/use-auth'

const url = 'http://localhost:3000/Books'
const userUrl = 'http://localhost:3000/Users/currentUser'
const updateUser = 'http://localhost:3000/Users/update/'

const BooksView = () => {

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
            maxWidth: "14vw",
            width: "12vw",
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
            justifyContent: 'center',
            fullWidth: true
        },
        customWidth: {
            maxWidth: 500,
          },
    });

    const [access, setAccess] = useState(true);

    const [redirect, setR] = useState(false);

    const [open, setOpen] = useState(false);

    const [userData, setUser] = useState([]);
    var clicks = useState([]);

    const [booksNr, setNumber] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:3000/Books/total', {withCredentials: true}).then((res) => {
            setNumber(res.data);
            console.log(booksNr);
        }).catch((e) => {console.log(e)});
    }, [])

    const classes = useStyles();

    const [data,setData] = useState([]);
    useEffect(() => {
        axios.get(url, { withCredentials: true }).then( (res) => { 
            setData(res.data)
        }).catch( (e) => console.log(e) )
    },[])

    useEffect(() => {
        if (auth.user !== undefined) {
            axios.get(userUrl, {withCredentials: true}).then( (res) => {
                setUser(res.data);
                console.log(userData);
            }).catch( (e) => console.log(e) ) 
        }
    }, [])

    for (var i = 0; i < booksNr; i++)
    {
        clicks.push({ clicked: 0 });
    }

    const check = (bk, index) => {
        if (auth.user === null || auth.user === undefined) {
            setOpen(true);
            setTimeout(() => { setR(true) }, 3000);
        } else if (!clicks[index].clicked) {
            clicks[index].clicked = 1;
            console.log("pressed");
            userData.wishlist.push({ book_id: bk });
            data[index - 2].stock -= 1;
            axios.patch(url + '/update/' + bk, data[index - 2], { withCredentials: true }).then( (res) => { } ).catch( (e) => { console.log(e) });
            axios.patch(updateUser + userData._id, userData, { withCredentials: true }).then( (res) => { } ).catch( (e) => { console.log(e) });
        }
    }

    if (redirect)
        return <Redirect to='/login'/>
    
    return (
        <Grid container>

            <Grid container direction="row" justify="space-evenly">
            <AppBar position='static' style={{background: '#757de8', marginTop: 'auto'}}>
                <Toolbar gutterbottom="true">
                    <Paper style={paperStyle} elevation={0}>
                        <Button href="/" style={btnStyle}>Acas??</Button>
                        {/* <Button href="/wishlist" style={btnStyle}>Wishlist</Button> */}
                        <Typography variant='h6' style={container}>Bibliotech UVT</Typography>
                        {/* <Button href="/add-book" style={btnStyle}>Adaug?? carte</Button> */}
                        <Button style={btnStyle} href="/reserve">Rezerv?? o carte</Button>
                    </Paper>
                </Toolbar>
            </AppBar>
            </Grid>
            
            <Paper style={{ margin: "auto", width: 'auto', padding: '0',
                background: 'transparent', overflow:'auto', maxWidth:'100%', textAlign: 'center' }} elevation={0}>
                    




                    
                <Grid container justify="space-evenly" alignItems="flex-start" direction="row" style={{ background:"transparent", width:"90%", margin:"auto" }}>

                { data.map( (carte, index) => (
                
                    <Grid item xs={2} key={index} style={{margin:"1.3vw"}}>
                        
                    <Card className={classes.root} style={{ margin:"auto" }}>
                        
                        <Link to = {{ pathname:'/view-book', state: { data: data[index] } }} className={classes.actions} color="primary">

                        <CardActionArea style={{ maxWidth:"14vw", minWidth:"12vw" }}>
                            <CardMedia className={classes.media} image={data[index].cover} title={data[index].title}></CardMedia>
                                <CardContent>
                                    <Typography gutterBottom color="textPrimary" variant='body1' align="center" component="h2" style={{ height:"5vw", fontSize:"1.1vw" }}>
                                    <u>{data[index].title}</u>
                                    </Typography>
                                    <Typography noWrap variant="body2" component="p" style={{ color:"#335ebd", marginBottom:'0px', marginTop:"8px", fontSize:"0.97vw" }}>
                                    {data[index].author}
                                    </Typography>
                                </CardContent>
                        </CardActionArea>
                        </Link> 
                        <CardActions className={classes.actions}>
                            <Button style={{ fontSize: "0.67vw", marginTop:"-10px" }} aria-label="wishlist" 
                                color={auth.user === undefined ? "secondary" : "primary"} variant="outlined"
                                disabled={data[index].stock === 0 ? true : ((clicks !== undefined && clicks[index + 2].clicked === 1) ? true : false)}
                                onClick={() => { check(data[index]._id, index + 2); }}>
                                    {data[index].stock === 0 ? 'stoc insuficient' : 'adaug?? ??n wishlist'}
                            </Button>
                        </CardActions>
                        
                    </Card>
                        
                    </Grid>
                    
                ))
                }

                <Snackbar open={open} message="Nu sunte??i logat. Redirec??ionare..."></Snackbar>

                </Grid>

            </Paper>

            <Fab style={{ margin:0, top:'auto', right:30, bottom:30, left:'auto', position:'fixed' }} color="primary" href="/wishlist"><ShoppingCart /></Fab>

        </Grid>
    );
};

export default BooksView;