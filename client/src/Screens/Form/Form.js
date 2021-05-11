import React, { useState } from 'react';
import { TextField, Typography, Button, Grid, Grow, Container, Paper} from '@material-ui/core';
import useStyles from './styles';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const url = 'http://localhost:5000/books/new'

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
        publish_date:""
    });

    const postBook = () => {
        axios.post(url,book).then( (res) => console.log('success')).catch( (e) => console.log(e));
    }

    const handleSubmit = () => {

    }

    return(
        
        <Container >
            <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} noValidate autoComplete="off"
            onSubmit={postBook}
            >
            <Typography>
                Book System
            </Typography>
            <TextField
            name="title" 
            variant='outlined'
            fullWidth
            label="Title"
            value={book.title}
            onChange={(e) => setBook({ ...book, title: e.target.value})}
            />
            <TextField
            name="author" 
            variant='outlined'
            fullWidth
            label="Author"
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value})}
            />
            <TextField
            name="publishing_house" 
            variant='outlined'
            fullWidth
            label="Publishing House"
            value={book.editure}
            onChange={(e) => setBook({ ...book, editure: e.target.value})}
            />
            <TextField
            name="description" 
            variant='outlined'
            fullWidth
            label="Description"
            value={book.description}
            onChange={(e) => setBook({ ...book, description: e.target.value})}
            />
            <TextField
            name="grade" 
            variant='outlined'
            fullWidth
            label="Grade"
            value={book.avg_grade}
            onChange={(e) => setBook({ ...book, avg_grade: e.target.value})}
            />
            <TextField
            name="pages" 
            variant='outlined'
            fullWidth
            label="Pages"
            value={book.pages}
            onChange={(e) => setBook({ ...book, pages: e.target.value})}
            />
            <TextField
            name="reviews" 
            variant='outlined'
            fullWidth
            label="Reviews"
            value={book.reviews}
            onChange={(e) => setBook({ ...book, reviews: e.target.value})}
            />
            <TextField
            name="publish-date" 
            variant='outlined'
            fullWidth
            label="Publish Date"
            value={book.publish_date}
            onChange={(e) => setBook({ ...book, publish_date: e.target.value})}
            />
            <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='primary'
            size='large'
            type='submit'
            >Submit</Button>

            </form>
            </Paper>

            <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='primary'
            size='large'
            onClick={() => history.push('/')}
            >Get Back</Button>
        </Container>
        
    );
};
export default Form;