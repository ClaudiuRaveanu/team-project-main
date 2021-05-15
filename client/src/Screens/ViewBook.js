import React, { useState } from 'react';
import {Grid, Typography, Paper, Toolbar, AppBar, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Icon from '@material-ui/core/Icon';
import { useLocation , useHistory} from 'react-router-dom';

export default function ViewBook() {

    const paperStyle = { padding: '0px 0px', width: 'auto', margin: '4px auto', textAlign: 'top-center', background: 'transparent', display: 'flex' }
    const btnStyle = { width: '12vw', background: '#3f51b5', color: '#FFFFFF', height: '2.4vw', marginLeft: '40px', marginRight: '40px'}
    // const boxStyle = { background:'#FFFFFF', textAlign:'center', padding:'2px 2px', marginTop:9, justifyContent:'center', height:500 }
    // const narrowBox = { background:'#FFFFFF', textAlign:'center', padding:'0px 10px', width:'15%', margin:0, height:'100%'};
    const container = { display: 'flex', justifyContent: 'center', fontSize:'1.12vw' }
    const paper2 = { padding: '40px 40px', width: '50vw', margin: '40px auto', flexDirection:'column', display: 'flex'}
    const paper3 = { padding: '0px 0px', width: '50%', margin: '0px auto', flexDirection:'column', display: 'flex'}

    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: "15vw",
            margin: '0vw',
        },
        media: {
            height: 0,
            width: 'auto',
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
        customAuto: {
            maxWidth: 'auto',
            '& > * + *': {
                marginTop: theme.spacing(3),
            },
        },
    }));

    const location = useLocation();
    const history = useHistory();
    const data =  location.state?.data;

    const classes = useStyles();

    const [book,setBook] = useState({
        title: data.title,
        author:data.author,
        editure:data.editure,
        description:data.description,
        genre:data.genre,
        cover:data.cover,
        avg_grade:data.avg_grade,
        pages:data.pages,
        reviews:data.reviews,
        publish_date:data.publish_date,
        stock:data.stock
    });

    return (
        <Grid container direction="column">

            <AppBar position='static' style={{background: '#757de8', marginTop: 'auto'}}>
                <Toolbar gutterbottom="true">
                    <Paper style={paperStyle} elevation={0}>
                        <Button href="/" style={btnStyle}>Acasă</Button>
                        <Button href="/wishlist" style={btnStyle}>Wishlist</Button>
                        <Typography variant='h6' style={container}>Bibliotech UVT</Typography>
                        <Button href="/books" style={btnStyle}>Cărți</Button>
                        <Button style={btnStyle} href="/book-a-book">Rezervă o carte</Button>
                    </Paper>
                </Toolbar>
            </AppBar>
            <Paper elevation={5} style={paper2}>
                <form>
                    <Paper elevation={0} style={{padding: '0px 0px', width: 'auto', margin: '0px auto', textAlign: 'center', background: 'transparent', display: 'flex'}}>

                        <Paper style={paper3} elevation={0}>
                        <Grid align="left" style={{ marginBottom:30, width:'130%', flexDirection:'row', display:'flex' }}>
                            <TextField label='Titlu' inputProps={{ readOnly:true, }}
                            value={book.title}
                            onChange={(e) => setBook({ ...book, title: e.target.value})}
                            variant='outlined' style={{ width:'100%'}}>{data.title}</TextField>
                            <TextField label='Număr pagini' display='inline' inputProps={{ readOnly:true, }} 
                            variant='outlined' style={{ marginTop:0, marginLeft:30, width:'30%'}}
                            value={book.pages}
                            onChange={(e) => setBook({ ...book, pages: e.target.value})}>{data.pages}</TextField>
                        </Grid>
                        <Grid align="left" style={{ marginBottom:30, flexDirection:'row', display:'flex', width:'130%' }}>
                            <TextField label='Autor' variant='outlined' style={{ width:'70%' }} inputProps={{ readOnly:true, }}
                            value={book.author}
                            onChange={(e) => setBook({ ...book, author: e.target.value})}>{data.author}</TextField>
                            <TextField label='Editură' variant='outlined' style={{ marginLeft:30, width:'60%' }} inputProps={{ readOnly:true, }}
                            value={book.editure}
                            onChange={(e) => setBook({ ...book, editure: e.target.value})}>{data.editure}</TextField>
                        </Grid>
                        <Grid align="left" style={{ marginBottom:30, flexDirection:'row', display:'flex', width:'130%' }}>
                            <TextField label='Gen' variant='outlined' style={{ marginLeft:0, width:'75%'}} inputProps={{ readOnly:true, }}
                            value={book.genre}
                            onChange={(e) => setBook({ ...book, genre: e.target.value})}>{data.genre}</TextField>
                            <TextField label='An publicare' variant='outlined' style={{ marginLeft:30, width:'30%'}} inputProps={{ readOnly:true, }}
                            value={book.publish_date}
                            onChange={(e) => setBook({ ...book, publish_date: e.target.value})}>{data.publish_date}</TextField>
                        </Grid>
                        <Grid align="left" style={{ marginBottom:0, width:'130%', textAlign:'justify' }}>
                            <TextField
                            id="outlined-multiline-static"
                            label="Descriere"
                            multiline
                            inputProps={{ readOnly:true,}}
                            rows={12}
                            variant="outlined"
                            fullWidth
                            value={book.description}
                            onChange={(e) => setBook({ ...book, description: e.target.value})}
                            style={{ textAlign:'justify' }}>{data.description}</TextField>
                        </Grid>
                        <Grid align="left" style={{ marginBottom:0, width:'125%' }}>
                            <Typography></Typography>
                        </Grid>
                        </Paper>

                        <Paper style={{ padding: '0px 0px', width: '50%', margin: '0px auto', flexDirection:'column', display: 'flex'}} elevation={0}>
                            <Grid align="right" style={{ marginBottom:0 }}>
                                <Card className={classes.root} title={data.title}>
                                    <CardMedia className={classes.media} image={book.cover}></CardMedia>
                                </Card>
                            </Grid>
                            <Grid align="right" style={{ marginTop:30, marginBottom:0 }}>
                                <Button style={{ width:'15vw', fontSize:"0.9vw" }} variant="contained" color="primary" startIcon={<AddShoppingCart />}>Adaugă în wishlist</Button>
                            </Grid>
                        </Paper>

                    </Paper>
                    
                </form>
            </Paper>

            <Paper elevation={5} style={{padding: '40px 40px', width: '50vw', margin: '40px auto', marginTop:10, flexDirection:'column', display: 'flex'}}>
                <form>
                    <Grid align="right" style={{ width:'100%', flexDirection:'column', display:'flex' }}>
                        <TextField
                        id="outlined-multiline-static"
                        label="Părere"
                        multiline
                        inputProps={{ readOnly:true, }}
                        rows={3}
                        defaultValue="Prima recenzie a cărții."
                        variant="outlined"
                        fullWidth/>
                        <Typography style={{marginTop:'15', padding:'10px 10px'}}>
                            <Icon><AccountCircle /></Icon>
                            Postată de Anonim
                        </Typography>
                    </Grid>

                    <Grid align="right" style={{ marginTop:25, width:'100%', flexDirection:'column', display:'flex' }}>
                        <TextField
                        id="outlined-multiline-static"
                        label="Părere"
                        multiline
                        inputProps={{ readOnly:true, }}
                        rows={3}
                        defaultValue="A doua recenzie a cărții."
                        variant="outlined"
                        fullWidth/>
                        <Typography style={{marginTop:'15', padding:'10px 10px'}}>
                            <Icon><AccountCircle /></Icon>
                            Postată de Anonim
                        </Typography>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    );
}