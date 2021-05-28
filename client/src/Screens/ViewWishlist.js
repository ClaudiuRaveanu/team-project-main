import React from 'react';
import {Grid, Typography, Paper, Toolbar, AppBar, List, ListItem, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
// import IconButton from '@material-ui/core/IconButton';

export default function ViewWishlist() {

    const paperStyle = { padding: '0px 0px', width: 'auto', margin: '4px auto', textAlign: 'top-center', background: 'transparent', display: 'flex' }
    const btnStyle = { width: '12vw', background: '#3f51b5', color: '#FFFFFF', height: '2.4vw', marginLeft: '40px', marginRight: '40px'}
    // const boxStyle = { background:'#FFFFFF', textAlign:'center', padding:'2px 2px', marginTop:9, justifyContent:'center', height:500 }
    // const narrowBox = { background:'#FFFFFF', textAlign:'center', padding:'0px 10px', width:'15%', margin:0, height:'100%'};
    const container = { display: 'flex', justifyContent: 'center', fontSize:'1.12vw' }

    // let day = getCurrentDate('-');
    // const datas = [{ startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Just for the sake of working' }];

    const useStyles = makeStyles({
        root: {
            maxWidth: 270,
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
            
            <Paper style={{padding: '0px 0px', width: 'auto', margin: '4px auto', textAlign: 'top-center', background: 'transparent', display: 'flex', overflow:'auto', maxWidth:'100%' }} elevation={0}>
                
                <Grid>
                <Grid align="center" style={{ marginBottom:10, marginTop:20 }}>
                    <Link style={{ fontSize:'25px' }} variant='string' underline='always' color='textPrimary'>Wishlist-ul meu</Link>
                </Grid>
                <List>

                    <ListItem>
                <Grid container direction="row" justify="space-around" alignItems="center">
                <Card className={classes.root} to="/add-book">
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/8zpua4U.jpg" title="2062. Lumea creata de inteligenta artificiala"></CardMedia>
                        <CardContent>
                            <Typography noWrap gutterBottom variant='body1' component="h2">
                                2062. Lumea creata de inteligenta artificiala
                            </Typography>
                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                            2062 este anul in care vom avea roboti la fel de inteligenti ca noi. Acest lucru este sustinut de majoritatea expertilor in domeniile inteligentei artificiale si roboticii. Dar cum va arata acest viitor? Cum se va desfasura viata pe aceasta planeta? Profesorul Toby Walsh analizeaza impactul pe care inteligenta artificiala il va avea asupra muncii, razboiului, politicii, economiei, vietii cotidiene si mortii. Pe baza unei intelegeri profunde a tehnologiei si a implicatiilor acesteia, 2062 descrie alegerile pe care trebuie sa le facem astazi, pentru a ne asigura ca viitorul va ramane luminos.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button className={classes.actions} size="small" color="primary" variant="outlined" style={{ width:'100%' }}>Detalii</Button>
                    </CardActions>
                </Card>
                </Grid>

                <Grid container justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/9lvzdnT.jpg" title="Calatorie pe valuri de galaxii"></CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="h2" noWrap>
                            Calatorie pe valuri de galaxii
                            </Typography>
                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                            Cosmografii, cei care alcătuiesc hărțile cosmosului, sunt adevărații exploratori ai zilelor noastre. Ei studiază structura universului, nașterea și evoluția galaxiilor, iar pe această cale a fost obținută în 2014 prima hartă dinamică a universului, cu zone vide și cu imense „continente“ extragalactice.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button className={classes.actions} size="small" color="primary" variant="outlined" style={{ width:'100%' }}>Detalii</Button>
                    </CardActions>
                </Card>
                </Grid>

                </ListItem>

                </List>
                </Grid>

            </Paper>

        </Grid>
    );
}
