import React from 'react';
import {Grid, Typography, Paper, Toolbar, AppBar, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Icon from '@material-ui/core/Icon';

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
            maxWidth: "12vw",
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

    const classes = useStyles();

    return (
        <Grid container direction="column">

            <AppBar position='static' style={{background: '#757de8', marginTop: 'auto'}}>
                <Toolbar gutterBottom>
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
                        <Grid align="left" style={{ marginBottom:30, width:'125%', flexDirection:'row', display:'flex' }}>
                            <TextField label='Titlu' inputProps={{ readOnly:true, }}
                            variant='outlined' style={{ width:'100%'}} defaultValue="Platon"></TextField>
                            <TextField label='Număr pagini' display='inline' inputProps={{ readOnly:true, }} 
                            variant='outlined' style={{ marginTop:0, marginLeft:30, width:'25%'}} ></TextField>
                        </Grid>
                        <Grid align="left" style={{ marginBottom:30, flexDirection:'row', display:'flex', width:'125%' }}>
                            <TextField label='Autor' variant='outlined' style={{ width:'50%' }} inputProps={{ readOnly:true, }}></TextField>
                            <TextField label='Gen' variant='outlined' style={{ marginLeft:30, width:'35%'}} inputProps={{ readOnly:true, }}></TextField>
                            <TextField label='An publicare' variant='outlined' style={{ marginLeft:30, width:'20%'}} inputProps={{ readOnly:true, }}></TextField>
                        </Grid>
                        <Grid align="left" style={{ marginBottom:0, width:'125%', textAlign:'justify' }}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Descriere"
                            multiline
                            inputProps={{ readOnly:true,}}
                            rows={12}
                            variant="outlined"
                            fullWidth
                            style={{ textAlign:'justify' }}></TextField>
                        </Grid>
                        <Grid align="left" style={{ marginBottom:0, width:'125%' }}>
                            <Typography></Typography>
                        </Grid>
                        </Paper>

                        <Paper style={{ padding: '0px 0px', width: '50%', margin: '0px auto', flexDirection:'column', display: 'flex'}} elevation={0}>
                            <Grid align="right" style={{ marginBottom:0 }}>
                                <Card className={classes.root} label='Imagine copertă'>
                                    <CardMedia className={classes.media}></CardMedia>
                                </Card>
                            </Grid>
                            <Grid align="right" style={{ marginTop:30, marginBottom:0 }}>
                                <Button style={{ width:'56%' }} variant="contained" color="primary" startIcon={<AddShoppingCart />}>Adaugă în wishlist</Button>
                            </Grid>
                        </Paper>

                    </Paper>
                    
                </form>
            </Paper>

            <Paper elevation={5} style={{padding: '40px 40px', width: '50vw', margin: '40px auto', flexDirection:'column', display: 'flex'}}>
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