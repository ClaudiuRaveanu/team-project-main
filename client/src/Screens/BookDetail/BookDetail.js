import React, { useState } from 'react';
import { TextField, Typography, Button, Grid, Grow, Container, Paper} from '@material-ui/core';
import { useLocation , useHistory} from 'react-router-dom';
import useStyles from './styles';
import axios from 'axios';

const updateURL = 'http://localhost:3000/books/update/';
const deleteURL = 'http://localhost:3000/books/delete/'

const BookDetail = (  ) => {
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();
    const data =  location.state?.data;
    
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

    const postBook = (event) => {
        event.preventDefault();
        axios.patch(updateURL + data._id,
            book, { withCredentials: true }
            ).then( (res) => console.log(res)).catch( (e) => e)   
    }
    const handleDelete = () =>{
        axios.delete(deleteURL + data._id, { withCredentials: true }).then( (res) => console.log(res)).catch( (e) => console.log(e));
        history.push('/');
    }
    
    return (
        
         <Container >
            <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} noValidate autoComplete="off"
            onSubmit={postBook}
            >
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
            name="genre" 
            variant='outlined'
            fullWidth
            label="Gen"
            value={book.genre}
            onChange={(e) => setBook({ ...book, genre: e.target.value})}
            />
            <TextField
            name="description" 
            variant='outlined'
            fullWidth
            label="Imagine copertă"
            multiline
            value={book.cover}
            onChange={(e) => setBook({ ...book, cover: e.target.value})}
            />
            <TextField
            name="description" 
            variant='outlined'
            fullWidth
            label="Descriere"
            multiline
            value={book.description}
            onChange={(e) => setBook({ ...book, description: e.target.value})}
            />
            <TextField
            name="pages" 
            variant='outlined'
            fullWidth
            type="number"
            label="Număr pagini"
            value={book.pages}
            onChange={(e) => setBook({ ...book, pages: e.target.value})}
            />
            <TextField
            name="publish-date" 
            variant='outlined'
            fullWidth
            label="Data publicării"
            value={book.publish_date}
            onChange={(e) => setBook({ ...book, publish_date: e.target.value})}
            />
            <TextField
            name="stock" 
            variant='outlined'
            fullWidth
            label="Stoc"
            value={book.stock}
            onChange={(e) => setBook({ ...book, publish_date: e.target.value})}
            />

            <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='primary'
            size='large'
            type='submit'
            >Update</Button>
            <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='secondary'
            size='large'
            type='button'
            onClick={ () => handleDelete()}
            >Delete</Button>
            
            </form>

            </Paper>

            <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='primary'
            size='large'
            onClick={() => history.push('/dashboard')}
            >Get Back</Button>
        </Container>
        
    );
}

export default BookDetail;