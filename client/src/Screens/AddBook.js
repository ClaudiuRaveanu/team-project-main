import React from 'react';
import {Grid, Typography, Paper, Toolbar, AppBar, TextField, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function AddBook() {

    const paperStyle = { padding: '0px 0px', width: 'auto', margin: '4px auto', textAlign: 'top-center', background: 'transparent', display: 'flex' }
    const btnStyle = { width: '12vw', background: '#3f51b5', color: '#FFFFFF', height: '2.4vw', marginLeft: '40px', marginRight: '40px'}
    // const boxStyle = { background:'#FFFFFF', textAlign:'center', padding:'2px 2px', marginTop:9, justifyContent:'center', height:500 }
    // const narrowBox = { background:'#FFFFFF', textAlign:'center', padding:'0px 10px', width:'15%', margin:0, height:'100%'};
    const container = { display: 'flex', justifyContent: 'center', fontSize:'1.12vw' }
    const paper2 = { padding: '40px 40px', width: '56vw', margin: '40px auto', flexDirection:'column', display: 'flex'}
    const paper3 = { padding: '0px 0px', width: '50%', margin: '0px auto', flexDirection:'column', display: 'flex'}

    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 270,
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

    const [values, setValues] = React.useState({
        image_link: '',
    });

    const handleImage = (lnk) => (event) => {
        setValues({ ...values, [lnk]: event.target.value });
    };

    const ctgs = [{ name: 'Acțiune'}, {name: 'Comedie'}, {name: 'Psihologie'}, {name: 'Istorie'}, {name: 'Filozofie'}, {name: 'Religie'}, {name: 'Poezie, teatru, studii literare'},
                {name: 'Ficțiune'}, {name: 'Artă, arhitectură'}, {name: 'Biografii, memorii, jurnale'}, {name: 'Lingvistică, dicționare'}, {name: 'Enciclopedii'},
                {name: "Astronomie, spațiu, timp"}];

    const options = ctgs.map((option) => {
        const firstLetter = option.name[0].toUpperCase();

        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter, ...option,
        };
    });

    return (
        <Grid container direction="column">

            <AppBar position='static' style={{background: '#757de8', marginTop: 'auto'}}>
                <Toolbar gutterBottom>
                    <Paper style={paperStyle} elevation={0}>
                        <Button href="/" style={btnStyle}>Acasă</Button>
                        <Button href="/wishlist" style={btnStyle}>Wishlist</Button>
                        <Paper style={{ width:'auto', padding:'5px 40px', marginLeft:'40px', marginRight:'40px' }}><Typography variant='h6' style={container}>Bibliotech UVT</Typography></Paper>
                        <Button href="/view-books" style={btnStyle}>Cărți</Button>
                        <Button style={btnStyle} href="/book-a-book">Rezervă o carte</Button>
                    </Paper>
                </Toolbar>
            </AppBar>
            <Paper elevation={5} style={paper2}>
                <Grid align="center" style={{ marginBottom:40 }}>
                    <Link style={{ fontSize:'25px' }} variant='string' underline='always' color='textPrimary'>Adaugă o carte</Link>
                </Grid>
                <form>
                    <Paper elevation={0} style={{padding: '0px 0px', width: 'auto', margin: '0px auto', textAlign: 'center', background: 'transparent', display: 'flex'}}>

                        <Paper style={paper3} elevation={0}>
                        <Grid align="left" style={{ marginBottom:30, width:'125%' }}>
                            <TextField label='Titlu' 
                            variant='outlined' style={{ width:'100%'}}></TextField>
                        </Grid>
                        <Grid align="left" style={{ marginBottom:30, flexDirection:'row', display:'flex', width:'125%' }}>
                            <TextField label='Editură' variant='outlined' style={{ width:'65%' }}></TextField>
                            <TextField label='Autor' variant='outlined' style={{ marginLeft:30, width:'65%'}}></TextField>
                        </Grid>
                        <Grid align="left" style={{ marginBottom:30, width:'125%', flexDirection:'row', display:'flex' }}>
                            <TextField label='Link imagine copertă' 
                            variant='outlined' style={{ width:'90%'}}
                            onChange={handleImage('image_link')} aria-label="cover"></TextField>
                            <TextField label='Număr pagini' display='inline' type="number" variant='outlined' style={{ marginTop:0, marginLeft:30, width:'35%'}}></TextField>
                        </Grid>
                        <Grid align="left" style={{ marginBottom:30, width:'125%', textAlign:'justify' }}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Descriere"
                            multiline
                            rows={5}
                            variant="outlined"
                            fullWidth
                            style={{ textAlign:'justify' }}
                        />
                        </Grid>
                        <Grid align="left" style={{ marginBottom:0, width:'125%' }} className={classes.customAuto}>
                            <Autocomplete
                            id="tags"
                            options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                            groupBy={(option) => option.firstLetter}
                            getOptionLabel={(option) => option.name}
                            filterSelectedOptions
                            renderInput={(params) => (
                                <TextField {...params} variant="outlined" label="Genuri"/>
                            )}/>
                        </Grid>
                        </Paper>

                        <Paper style={{ padding: '0px 0px', width: '50%', margin: '0px auto', flexDirection:'column', display: 'flex'}} elevation={0}>
                            <Grid align="right" style={{ marginBottom:0 }}>
                                <Card className={classes.root} label='Imagine copertă'>
                                    <CardMedia className={classes.media} image={values.image_link}></CardMedia>
                                </Card>
                            </Grid>
                        </Paper>

                    </Paper>
                    <Grid align="center" style={{ marginTop:30, marginBottom:0 }}>
                        <Button style={{ width:'35%', background: '#3f51b5', color: '#FFFFFF'}} type='Submit' onClick={console.log("Hi there!")}>Adaugă cartea</Button>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    );
}