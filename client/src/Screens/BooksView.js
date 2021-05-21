import {Grid, Typography, Paper, Toolbar, AppBar, List, ListItem, Fab } from '@material-ui/core';
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
import { Link } from 'react-router-dom';

const url = 'http://localhost:3000/Books'

const BooksView = () => {

    const paperStyle = { padding: '0px 0px', width: 'auto', margin: '4px auto', textAlign: 'top-center', background: 'transparent', display: 'flex' }
    const btnStyle = { width: '12vw', background: '#3f51b5', color: '#FFFFFF', height: '2.4vw', marginLeft: '40px', marginRight: '40px'}
    // const boxStyle = { background:'#FFFFFF', textAlign:'center', padding:'2px 2px', marginTop:9, justifyContent:'center', height:500 }
    // const narrowBox = { background:'#FFFFFF', textAlign:'center', padding:'0px 10px', width:'15%', margin:0, height:'100%'};
    const container = { display: 'flex', justifyContent: 'center', fontSize:'1.12vw' }

    // let day = getCurrentDate('-');
    // const datas = [{ startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Just for the sake of working' }];

    const useStyles = makeStyles({
        root: {
            maxWidth: "12vw",
            width: "10vw",
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

    const [book,setBook] = useState({
        title: "",
        author:"",
        editure:"",
        description:"",
        avg_grade:"",
        pages:"",
        reviews:"",
        publish_date:"",
        genre:""
    });

    const classes = useStyles();

    const [data,setData] = useState([]);
    useEffect(() => {
        axios.get(url).then( (res) => { 
            setData(res.data)
        }).catch( (e) => console.log(e) )
    },[])

    const preventDefault = (event) => event.preventDefault();
    
    return (
        <Grid container>

            <Grid container direction="row" justify="space-evenly">
            <AppBar position='static' style={{background: '#757de8', marginTop: 'auto'}}>
                <Toolbar gutterbottom="true">
                    <Paper style={paperStyle} elevation={0}>
                        <Button href="/" style={btnStyle}>Acasă</Button>
                        <Button href="/wishlist" style={btnStyle}>Wishlist</Button>
                        <Typography variant='h6' style={container}>Bibliotech UVT</Typography>
                        <Button href="/add-book" style={btnStyle}>Adaugă carte</Button>
                        <Button style={btnStyle} href="/book-a-book">Rezervă o carte</Button>
                    </Paper>
                </Toolbar>
            </AppBar>
            </Grid>
            
            <Paper style={{ margin: "auto", width: 'auto', padding: '0',
                background: 'transparent', overflow:'auto', maxWidth:'100%', textAlign: 'center' }} elevation={0}>
                    
                <Grid container justify="space-evenly" alignItems="flex-start" direction="row" style={{ background:"transparent", width:"90%", margin:"auto" }}>

                { data.map( (carte, index) => (
                
                    <Grid item xs={2} key={index} style={{margin:"0.9vw"}}>
                        
                    <Card className={classes.root} style={{ margin:"auto" }}>
                        
                        <Link to = {{ pathname:'/view-book', state: { data: data[index] } }} className={classes.actions} color="primary">

                        <CardActionArea style={{ maxWidth:"12vw", minWidth:"10vw" }}>
                            <CardMedia className={classes.media} image={data[index].cover} title={data[index].title}></CardMedia>
                                <CardContent>
                                    <Typography gutterBottom color="textPrimary" variant='body1' align="center" component="h2" style={{ height:"3.2vw", fontSize:"0.91vw" }}>
                                    {data[index].title}
                                    </Typography>
                                    <Typography noWrap variant="body2" component="p" style={{ color:"#335ebd", marginBottom:'0px', marginTop:"8px", fontSize:"0.82vw" }}>
                                    {data[index].author}
                                    </Typography>
                                </CardContent>
                        </CardActionArea>
                        </Link>
                        <CardActions className={classes.actions}>
                            <Button style={{ fontSize: "0.67vw", marginTop:"-10px" }} aria-label="wishlist" color="primary" variant="outlined">adaugă în wishlist</Button>
                        </CardActions>
                        
                    </Card>
                        
                    </Grid>
                    
                ))
                }

                </Grid>

            </Paper>

            <Fab style={{ margin:0, top:'auto', right:30, bottom:30, left:'auto', position:'fixed' }} color="primary" href="/wishlist"><ShoppingCart /></Fab>

        </Grid>
    );
};

export default BooksView;