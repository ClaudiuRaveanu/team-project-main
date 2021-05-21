import React, { useEffect, useState } from 'react';
import {Grid, Typography, Paper, Toolbar, AppBar, TextField, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Checkbox, FormControlLabel } from '@material-ui/core';
import axios from 'axios';
import {useLocation, useHistory} from 'react-router-dom';

export default function AddReview() {

    const paperStyle = { padding: '0px 0px', width: 'auto', margin: '4px auto', textAlign: 'top-center', background: 'transparent', display: 'flex' }
    const btnStyle = { width: '12vw', background: '#3f51b5', color: '#FFFFFF', height: '2.4vw', marginLeft: '40px', marginRight: '40px'}
    // const boxStyle = { background:'#FFFFFF', textAlign:'center', padding:'2px 2px', marginTop:9, justifyContent:'center', height:500 }
    // const narrowBox = { background:'#FFFFFF', textAlign:'center', padding:'0px 10px', width:'15%', margin:0, height:'100%'};
    const container = { display: 'flex', justifyContent: 'center', fontSize:'1.12vw' }
    const paper2 = { padding: '40px 40px', width: '50vw', margin: '40px auto', flexDirection:'column', display: 'flex'}
    const paper3 = { padding: '0px 0px', width: '50%', margin: '0px auto', flexDirection:'column', display: 'flex'}

    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: "13vw",
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

    const grades = ['1','2','3','4','5','6','7','8','9','10'];

    const location = useLocation();
    const history = useHistory();
    const bk =  location.state?.data;

    const [book,setBook] = useState({
        _id: bk._id,
        title: bk.title,
        author:bk.author,
        editure:bk.editure,
        description:bk.description,
        genre:bk.genre,
        cover:bk.cover,
        avg_grade:bk.avg_grade,
        pages:bk.pages,
        reviews:bk.reviews,
        publish_date:bk.publish_date,
        stock:bk.stock
    });

    const [review, setRv] = useState({
        book_id: "",
        rv_title: "",
        grade: ['1','2','3','4','5','6','7','8','9','10'],
        opinion: "",
        anon: false
    });

    const handleChange = (event) => {
        setRv({ ...review, anon: event.target.checked})
        // console.log(`checkBox changed from: ${review.anon} to ${!review.anon}`);
    };

    // console.log(`now \'anon\' is: ${review.anon}`);

    const updateURL = 'http://localhost:3000/books/update/';
    
    const [disabled, setDis] = useState(false);

    const postReview = () => {
        book.reviews.push(review);

        var sum = 0;

        if (book.reviews.length !== 0) {

            for (let i = 0; i < book.reviews.length; i++)
                sum += parseInt(book.reviews[i].grade);
    
            book.avg_grade = sum / book.reviews.length;
        }

        axios.patch(updateURL + review.book_id, book).then((res) => {
            console.log('review posted!');
        }).catch((e) => {console.log(e)})
    };

    review.book_id = bk._id;
    // console.log(review.book_id);
    
    return (
        <Grid container direction="column">

            <AppBar position='static' style={{background: '#757de8', marginTop: 'auto'}}>
                <Toolbar gutterbottom="true">
                    <Paper style={paperStyle} elevation={0}>
                        <Button href="/" style={btnStyle}>Acasă</Button>
                        <Button href="/add-book" style={btnStyle}>Adaugă carte</Button>
                        <Typography variant='h6' style={container}>Bibliotech UVT</Typography>
                        <Button href="/books" style={btnStyle}>Cărți</Button>
                        <Button style={btnStyle} href="/book-a-book">Rezervă o carte</Button>
                    </Paper>
                </Toolbar>
            </AppBar>
            <Paper elevation={5} style={paper2}>
                <Grid align="center" style={{ marginBottom:40 }}>
                    <Link style={{ fontSize:'25px' }} variant='string' underline='always' color='textPrimary'>Adaugă o recenzie</Link>
                </Grid>
                <form>
                    <Paper elevation={0} style={{padding: '0px 0px', width: 'auto', margin: '0px auto', textAlign: 'center', background: 'transparent', display: 'flex'}}>

                        <Paper style={paper3} elevation={0}>
                        <Grid align="left" style={{ marginBottom:30, width:'135%', textAlign:'justify' }}>
                            <TextField variant="outlined" label="Titlu carte" inputProps={{ readOnly:true, }} value={bk.title} fullWidth ></TextField>
                        </Grid>
                        <Grid align="left" style={{ marginTop:0, width:'135%', marginBottom:30, display:'flex', flexDirection:'row' }}>
                            <TextField required label="Titlu recenzie" variant="outlined" style={{ width:'100%', marginRight:30 }}
                                        onChange={(e) => {setRv({ ...review, rv_title: e.target.value })}}></TextField>

                            <Autocomplete 
                            id="combo-box-demo"
                            disableClearable
                            options={grades}
                            onChange={(e, val) => setRv({ ...review, grade: val })}
                            style={{ width:'35%' }}
                            renderInput={(params) => <TextField required {...params} label="Nota oferită" variant="outlined" />}>
                            </Autocomplete>
                        </Grid>
                        <Grid align="left" style={{ marginBottom:30, width:'135%', textAlign:'justify' }}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Părerea ta"
                            multiline
                            rows={5}
                            variant="outlined"
                            fullWidth
                            style={{ textAlign:'justify' }}
                            onChange={(e) => {setRv({ ...review, opinion: e.target.value })}}
                        />
                        </Grid>
                        <Grid align="left" style={{ marginBottom:0, width:'125%', display:'flex', flexDirection:'row' }} className={classes.customAuto}>
                            

                            <FormControlLabel
                            control={
                            <Checkbox
                                checked={review.anon}
                                onChange={handleChange}
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Doresc să rămân anonim"
                            />
                        </Grid>
                        </Paper>

                        <Paper style={{ padding: '0px 0px', width: '50%', margin: '0px auto', flexDirection:'column', display: 'flex'}} elevation={0}>
                            <Grid align="right" style={{ marginBottom:0 }}>
                                <Card className={classes.root} label='Imagine copertă'>
                                    <CardMedia className={classes.media} image={bk.cover}></CardMedia>
                                </Card>
                            </Grid>
                        </Paper>

                    </Paper>
                    <Grid align="center" style={{ marginTop:30, marginBottom:0 }}>
                        <Button onClick={() => { postReview(); setDis(true);
                            setRv({ ...review, rv_title: "" })
                            setRv({ ...review, opinion: "" })
                            setRv({ ...review, grade: ['1','2','3','4','5','6','7','8','9','10'] })
                            setRv({ ...review, anon: false })}}
                            style={{ width:'35%'}} color='primary' variant="contained">Adaugă recenzie</Button>
                    </Grid>
                </form>
                <Grid></Grid>
            </Paper>
        </Grid>
    );
}