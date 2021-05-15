import React, { useState } from 'react';
import { TextField, Typography, Button, Grid, Grow, Container, Paper, ThemeProvider} from '@material-ui/core';
import useStyles from './styles';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Autocomplete from '@material-ui/lab/Autocomplete';

const url = 'http://localhost:3000/books/new'

const Form = () => {
    const history = useHistory();
    const classes = useStyles();
    const [book,setBook] = useState({
        title: "",
        author:"",
        editure:"",
        description:"",
        avg_grade:"",
        pages:"",
        reviews:"",
        publish_date:"",
        genre:['Acțiune', 'Comedie', 'Psihologie', 'Istorie', 'Filozofie', 'Religie', 'Poezie, teatru, studii literare', "Sport",
        'Ficțiune', 'Artă, arhitectură', 'Biografii, memorii, jurnale', 'Lingvistică, dicționare', 'Enciclopedii', "Astronomie, spațiu, timp"],
        cover:"",
        stock:""
    });

    const postBook = () => {
        axios.post(url,book).then( (res) => console.log('success')).catch( (e) => console.log(e));
    }

    const ctgs = ['Acțiune', 'Comedie', 'Psihologie', 'Istorie', 'Filozofie', 'Religie', 'Poezie, teatru, studii literare', "Sport",
                'Ficțiune', 'Artă, arhitectură', 'Biografii, memorii, jurnale', 'Lingvistică, dicționare', 'Enciclopedii', "Astronomie, spațiu, timp"];

    return(
        
        <Container >
            <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} noValidate autoComplete="off"
            onSubmit={postBook}
            >
            <Typography>
                Adaugă o carte
            </Typography>
            <TextField
            name="title" 
            variant='outlined'
            fullWidth
            label="Titlu"
            value={book.title}
            onChange={(e) => setBook({ ...book, title: e.target.value})}
            />
            <TextField
            name="author" 
            variant='outlined'
            fullWidth
            label="Autor"
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value})}
            />
            <TextField
            name="publishing_house" 
            variant='outlined'
            fullWidth
            label="Editură"
            value={book.editure}
            onChange={(e) => setBook({ ...book, editure: e.target.value})}
            />
            <TextField
            name="description" 
            variant='outlined'
            fullWidth
            label="Descriere"
            value={book.description}
            onChange={(e) => setBook({ ...book, description: e.target.value})}
            />
            {/* <TextField
            name="grade" 
            variant='outlined'
            fullWidth
            label="Grade"
            value={book.avg_grade}
            onChange={(e) => setBook({ ...book, avg_grade: e.target.value})}
            /> */}
            {/* <TextField
            name="genre" 
            variant='outlined'
            fullWidth
            label="Gen"
            value={book.genre}
            onChange={(e) => setBook({ ...book, genre: e.target.value})}
            /> */}
            <Autocomplete
                id="tags"
                style={{ marginRight:"16px" }}
                fullWidth
                options={ctgs}
                onChange={(event, value) => setBook({ ...book, genre: value })}
                renderInput={(params) => (
                    <TextField {...params} variant="outlined" label="Genuri"/>
                )}/>
            <TextField
            name="pages" 
            variant='outlined'
            fullWidth
            label="Număr pagini"
            type="number"
            value={book.pages}
            onChange={(e) => setBook({ ...book, pages: e.target.value})}
            />
            {/* <TextField
            name="reviews" 
            variant='outlined'
            fullWidth
            label="Reviews"
            value={book.reviews}
            onChange={(e) => setBook({ ...book, reviews: e.target.value})}
            /> */}
            <TextField
            name="publish-date" 
            variant='outlined'
            fullWidth
            label="Data publicării (anul)"
            value={book.publish_date}
            onChange={(e) => setBook({ ...book, publish_date: e.target.value})}
            />
            <TextField
            name="cover" 
            variant='outlined'
            fullWidth
            label="Imagine copertă"
            value={book.cover}
            onChange={(e) => setBook({ ...book, cover: e.target.value})}
            />
            <TextField
            name="stock" 
            variant='outlined'
            fullWidth
            label="Stoc"
            type="number"
            value={book.stock}
            onChange={(e) => setBook({ ...book, stock: e.target.value})}
            />
            <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='primary'
            size='large'
            type='submit'
            >Trimite</Button>

            </form>
            </Paper>

            <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='primary'
            size='large'
            onClick={() => history.push('/')}
            >Înapoi</Button>
        </Container>
        
    );
};
export default Form;