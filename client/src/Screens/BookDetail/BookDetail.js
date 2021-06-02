import React, { useState } from 'react';
import { TextField, Typography, Button, Grid, Grow, Container, Paper} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useLocation , useHistory, generatePath} from 'react-router-dom';
import useStyles from './styles';
import axios from 'axios';
import { ListItemText } from '@material-ui/core';

const updateURL = 'http://localhost:3000/books/update/';
const deleteURL = 'http://localhost:3000/books/delete/';
const deleteReviewuRL = 'http://localhost:3000/Books/deleteReview'

const BookDetail = (  ) => {
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();
    const data =  location.state?.data;
    console.log(data)
    
    const [show,setShow] = useState(false)
    
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
    const [review,setReview] = useState(
        {
            _id: book._id,
            review_id: ''
        }
    );

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
    const handleDeleteReview = async (request) =>{
        
        await axios.patch(deleteReviewuRL,request).then( (res) => console.log(res)).catch( (e) => console.log(e))
    }

    const ListReview = ({data, index}) => {
        return (
            
        
        <ListItem key={index}>
            <ListItemText
            primary={data.rv_title}
            secondary={data._id}
            />
            <button onClick={(event) => {
                event.preventDefault();
                console.log(data)
                const request = {
                    _id:data.book_id,
                    review_id:data._id
                }
                handleDeleteReview(request);
                
                }}>Delete</button>
        </ListItem>
        
        )
    }
   
    const reviewList = () => {
        
        return (
            <div className={classes.fileInput}>
            <List>
                {book.reviews.map( (item,index) => {
                    
                    
                   return <ListReview data={item} index={index}/>
                    
                    
                })}
            </List>
            </div>
        );
    }
    const openList =() => {
        return(
            <>
        <h1 className={classes.fileInput} onClick={()=>setShow(!show)}>Reviews</h1>
        {show == true ? reviewList():null}
        </>
        );
        
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
            onChange={(e) => setBook({ ...book, stock: e.target.value})}
            />
            <TextField
            name="avg_grade" 
            variant='outlined'
            fullWidth
            label="Average Grade"
            value={book.avg_grade}
            onChange={(e) => setBook({ ...book, avg_grade: e.target.value})}
            />

            <>
             
             {openList()}
             </>

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
            onClick={() => history.push('/admin')}
            >Get Back</Button>
        </Container>
        
    );
}

export default BookDetail;