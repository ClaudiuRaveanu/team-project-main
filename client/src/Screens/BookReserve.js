import React from 'react';
import { Paper , Button, Typography, AppBar, Toolbar, Grid, TextField, Link, makeStyles } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

export default function BookReserve() {

    const paperStyle = { padding: '0px 0px', width: 'auto', margin: '0px auto', textAlign: 'center', background: 'transparent', display: 'flex' }
    const paper2 = { padding: '40px 40px', width: '50vw', margin: '40px auto', flexDirection:'column', display: 'flex'}
    const paper3 = { padding: '0px 0px', width: '50%', margin: '0px auto', flexDirection:'column', display: 'flex'}
    const btnStyle = { width: '12vw', background: '#3f51b5', color: '#FFFFFF', height: '2.4vw', marginLeft: '40px', marginRight: '40px'}
    // const boxStyle = { background:'#FFFFFF', textAlign:'center', padding:'2px 2px', marginTop:9, justifyContent:'center', height:500 }
    // const narrowBox = { background:'#FFFFFF', textAlign:'center', padding:'0px 10px', width:'15%', margin:0, height:'100%'}
    const container = { display: 'flex', justifyContent: 'center', fontSize:'1.12vw' }

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

    const classes = useStyles();

    return (
        <Grid>
            <AppBar position='static' style={{background: '#757de8', marginTop: 'auto', justifyContent:'center', flexDirection:'column', textAlign:'center'}}>
                <Toolbar gutterbottom="true">
                    <Paper style={paperStyle} elevation={0}>
                        <Button style={btnStyle} href="/">Acasă</Button>
                        <Button href="/wishlist" style={btnStyle}>Wishlist</Button>
                        <Typography variant='h6' display='block' style={container}>Bibliotech UVT</Typography>
                        <Button href="/add-book" style={btnStyle}>Adaugă carte</Button>
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
                            options={['2062. Lumea creata de inteligenta artificiala', 'Platon']}
                            style={{ width:'112%', marginBottom:'30px' }}
                            renderInput={(params) => <TextField {...params} label="Alege o carte" variant="outlined" />}>
                        </Autocomplete>
                        <Grid align="left" style={{ marginBottom:30, flexDirection:'row', display:'flex', width:'112%' }}>
                            <TextField InputProps={{ readOnly:true, }} label='Editură' defaultValue='RAO' variant='outlined' style={{ width:'50%' }}></TextField>
                            <TextField InputProps={{ readOnly:true, }} label='Autor' defaultValue='TOBY WALSH' variant='outlined' style={{ marginLeft:30, width:'62%'}}></TextField>
                        </Grid>
                        <Grid align="left" style={{ marginBottom:0, width:'112%', textAlign:'justify' }}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Descriere"
                            multiline
                            InputProps={{ readOnly:true, }}
                            rows={9}
                            defaultValue="2062 este anul in care vom avea roboti la fel de inteligenti ca noi. Acest lucru este sustinut de majoritatea expertilor in domeniile inteligentei artificiale si roboticii. Dar cum va arata acest viitor? Cum se va desfasura viata pe aceasta planeta? Profesorul Toby Walsh analizeaza impactul pe care inteligenta artificiala il va avea asupra muncii, razboiului, politicii, economiei, vietii cotidiene si mortii. Pe baza unei intelegeri profunde a tehnologiei si a implicatiilor acesteia, 2062 descrie alegerile pe care trebuie sa le facem astazi, pentru a ne asigura ca viitorul va ramane luminos."
                            variant="outlined"
                            fullWidth
                            style={{ textAlign:'justify' }}
                        />
                        </Grid>
                        </Paper>

                        <Paper style={{ padding: '0px 0px', width: '50%', margin: '0px auto', flexDirection:'column', display: 'flex' }} elevation={0}>
                            <Grid align="right" style={{ marginBottom:0 }}>
                                <Card className={classes.root}>
                                    <CardMedia className={classes.media} image="https://i.imgur.com/8zpua4U.jpg"></CardMedia>
                                </Card>
                            </Grid>
                        </Paper>

                    </Paper>
                    <Grid align="center" style={{ marginTop:30, marginBottom:0 }}>
                        <Button style={{ width:'35%', background: '#3f51b5', color: '#FFFFFF'}}>Rezervă cartea</Button>
                    </Grid>
                </form>
                <Grid></Grid>
            </Paper>
        </Grid>
    );
}