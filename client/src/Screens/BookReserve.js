import React, { useState, useEffect } from 'react';
import { Paper , Button, Typography, AppBar, Toolbar, Grid, TextField, Link, makeStyles } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import axios from 'axios'
import { useAuth } from './AuthContext/use-auth'

const url = 'http://localhost:3000/Books'
const userUrl = 'http://localhost:3000/Users/currentUser'
const updateUser = 'http://localhost:3000/Users/update/'
var today = new Date()

export default function BookReserve() {

    const paperStyle = { padding: '0px 0px', width: 'auto', margin: '0px auto', textAlign: 'center', background: 'transparent', display: 'flex' }
    const paper2 = { padding: '40px 40px', width: '50vw', margin: '40px auto', flexDirection:'column', display: 'flex'}
    const paper3 = { padding: '0px 0px', width: '50%', margin: '0px auto', flexDirection:'column', display: 'flex'}
    const btnStyle = { width: '12vw', background: '#3f51b5', color: '#FFFFFF', height: '2.4vw', marginLeft: '40px', marginRight: '40px'}
    // const boxStyle = { background:'#FFFFFF', textAlign:'center', padding:'2px 2px', marginTop:9, justifyContent:'center', height:500 }
    // const narrowBox = { background:'#FFFFFF', textAlign:'center', padding:'0px 10px', width:'15%', margin:0, height:'100%'}
    const container = { display: 'flex', justifyContent: 'center', fontSize:'1.12vw' }

    const auth = useAuth();

    const useStyles = makeStyles({
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
    });

    const [data,setData] = useState([]);

    const [userData, setUser] = useState([]);

    const [states, setStates] = useState({
        editure: "",
        author: "",
        description: "",
        cover: ""
    });

    const [reserve, setReserve] = useState({
        book_id: "",
        date: today.toString(),
        pickup: ""
    });

    useEffect(() => {
        axios.get(url, { withCredentials: true }).then( (res) => { 
            setData(res.data)
        }).catch( (e) => console.log(e) )
    },[])

    useEffect(() => {
        if (auth.user !== undefined) {
            axios.get(userUrl, {withCredentials: true}).then( (res) => {
                setUser(res.data);
            }).catch( (e) => console.log(e) ) 
        }
    }, [])

    const classes = useStyles();

    return (
        <Grid>
            <AppBar position='static' style={{background: '#757de8', marginTop: 'auto', justifyContent:'center', flexDirection:'column', textAlign:'center'}}>
                <Toolbar gutterbottom="true">
                    <Paper style={paperStyle} elevation={0}>
                        <Button style={btnStyle} href="/">Acasă</Button>
                        {/* <Button href="/wishlist" style={btnStyle}>Wishlist</Button> */}
                        <Typography variant='h6' display='block' style={container}>Bibliotech UVT</Typography>
                        {/* <Button href="/add-book" style={btnStyle}>Adaugă carte</Button> */}
                        <Button href="/books" style={btnStyle}>Cărți</Button>
                    </Paper>
                </Toolbar>
            </AppBar>
            <Paper elevation={5} style={paper2}>
                <Grid align="center" style={{ marginBottom:40 }}>
                    <Link style={{ fontSize:'25px' }} variant='string' underline='always' color='textPrimary'>Rezervă o carte</Link>
                </Grid>
                <form>
                    <Paper elevation={0} style={{padding: '0px 0px', width: 'auto', margin: '0px auto', textAlign: 'center', background: 'transparent', display: 'flex'}}>

                        <Paper style={paper3} elevation={0}>
                        <Autocomplete 
                            id="combo-box-demo"
                            disableClearable
                            options={data}
                            getOptionLabel={(option) => option.title}
                            onChange={(e, val) => { setReserve({ ...reserve, book_id: val._id })
                                setStates({ ...states, author: val.author, cover: val.cover, description: val.description, editure: val.editure }) }}
                            style={{ width:'112%', marginBottom:'30px' }}
                            renderInput={(params) => <TextField required {...params} label="Alege o carte" variant="outlined" />}>
                        </Autocomplete>
                        <Grid align="left" style={{ marginBottom:30, flexDirection:'row', display:'flex', width:'112%' }}>
                            <TextField required InputProps={{ readOnly:true, }} label='Editură' value={ states.editure } variant='outlined' style={{ width:'50%' }}></TextField>
                            <TextField required InputProps={{ readOnly:true, }} label='Autor' value={ states.author } variant='outlined' style={{ marginLeft:30, width:'62%'}}></TextField>
                        </Grid>
                        <Grid align="left" style={{ marginBottom:30, width:'112%', textAlign:'justify' }}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Descriere"
                            multiline
                            required
                            InputProps={{ readOnly:true, }}
                            rows={9}
                            value={ states.description }
                            variant="outlined"
                            fullWidth
                            style={{ textAlign:'justify' }}
                        />
                        </Grid>

                        <Grid align="left" style={{ marginBottom:0, width:'112%', textAlign:'justify' }}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Dată și oră"
                            type="datetime-local"
                            required
                            onChange={(e) => {setReserve({ ...reserve, pickup: (Date)(e.target.value) })} }
                            variant="outlined"
                            fullWidth
                            style={{ textAlign:'justify' }}
                        />
                        </Grid>
                        </Paper>

                        <Paper style={{ padding: '0px 0px', width: '50%', margin: '0px auto', flexDirection:'column', display: 'flex' }} elevation={0}>
                            <Grid align="right" style={{ marginBottom:0 }}>
                                <Card className={classes.root}>
                                    <CardMedia className={classes.media} image={states.cover}></CardMedia>
                                </Card>
                            </Grid>
                        </Paper>

                    </Paper>
                    <Grid align="center" style={{ marginTop:30, marginBottom:0 }}>
                        <Button style={{ width:'35%', background: '#3f51b5', color: '#FFFFFF'}}
                        onClick={() => {
                            console.log(reserve)
                            userData.reservations.push(reserve);
                            axios.patch(updateUser + userData._id, userData, { withCredentials: true }).then( (res) => { } ).catch( (e) => { console.log(e) });
                        } }>
                            Rezervă cartea
                        </Button>
                    </Grid>
                </form>
                <Grid></Grid>
            </Paper>
        </Grid>
    );
}