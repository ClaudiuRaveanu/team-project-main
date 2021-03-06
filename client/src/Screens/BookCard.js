import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { Button, Grid, Typography } from '@material-ui/core';
import axios from 'axios';

const BookCard = () => {
    const url = 'http://localhost:3000/books';

    const [data,setData] = useState([]);
    useEffect(() => {
        axios.get(url, { withCredentials: true }).then( (res) => { 
            setData(res.data)
            console.log(res.data[0])
         }).catch( (e) => console.log(e) )
    },[])

    const useStyles = makeStyles({
        root: {
            maxWidth: "12vw",
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

    return (
        <Grid container direction="row" justify="space-around" alignItems="center">
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} image={book.poza_coperta} title={book.titlu}></CardMedia>
                    <CardContent>
                        <Typography noWrap gutterBottom variant='body1' component="h2">
                        {book.titlu}
                        </Typography>
                        <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                        {book.descriere}
                        </Typography>
                    </CardContent>
             </CardActionArea>
            <CardActions>
                <Button className={classes.actions} size="small" color="primary" variant="outlined" style={{ width:'80%' }}>Detalii</Button>
                <IconButton aria-label="Adaug?? ??n wishlist" color="primary">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
            </Card>
        </Grid>
    )
};

export default BookCard;