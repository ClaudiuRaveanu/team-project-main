import {Grid, Typography, Paper, Toolbar, AppBar, List, ListItem, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

export default function BooksView() {

    const paperStyle = { padding: '0px 0px', width: 'auto', margin: '4px auto', textAlign: 'top-center', background: 'transparent', display: 'flex' }
    const btnStyle = { width: '12vw', background: '#3f51b5', color: '#FFFFFF', height: '2.4vw', marginLeft: '40px', marginRight: '40px'}
    // const boxStyle = { background:'#FFFFFF', textAlign:'center', padding:'2px 2px', marginTop:9, justifyContent:'center', height:500 }
    // const narrowBox = { background:'#FFFFFF', textAlign:'center', padding:'0px 10px', width:'15%', margin:0, height:'100%'};
    const container = { display: 'flex', justifyContent: 'center', fontSize:'1.12vw' }

    // let day = getCurrentDate('-');
    // const datas = [{ startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Just for the sake of working' }];

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

    const classes = useStyles();
    
    return (
        <Grid container>

            <Grid container direction="row" justify="space-evenly">
            <AppBar position='static' style={{background: '#757de8', marginTop: 'auto'}}>
                <Toolbar gutterBottom>
                    <Paper style={paperStyle} elevation={0}>
                        <Button href="/" style={btnStyle}>Acasă</Button>
                        <Button href="/wishlist" style={btnStyle}>Wishlist</Button>
                        <Typography variant='h6' style={container}>Bibliotech UVT</Typography>
                        <Button href="/add-book" style={btnStyle}>Adaugă carte</Button>
                        <Button style={btnStyle} href="/book-a-book">Rezervă o carte</Button>
                    </Paper>
                </Toolbar>
            </AppBar>
            </Grid>
            
            <Paper style={{padding: '0px 0px', width: 'auto', margin: '4px auto', textAlign: 'top-center', background: 'transparent', display: 'flex', overflow:'auto', maxWidth:'100%' }} elevation={0}>

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
                        <Button className={classes.actions} size="small" color="primary" variant="outlined" style={{ width:'80%' }}>Detalii</Button>
                        <IconButton aria-label="Adaugă în wishlist" color="primary">
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </Card>
                </Grid>

                <Grid container justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/cf7HsZL.jpg" title="Politicile naturii"></CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="h2" noWrap>
                            Politicile naturii
                            </Typography>

                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                            Identificând, încă din 1999, prin cartea de față, Politicile naturii, faptul că științele care ar trebui re-asociate politicii pentru a crește gradul, dacă nu chiar nivelul de democrație al acesteia,
ar trebui să aibă ca obiect „ultim” „mutația climatică”, degradarea continuă a condițiilor de perpetuare a vieții pe Terra, și continuând, sau concentrându-și reflecția și acțiunea, creația, acum, după douăzeci de ani, tocmai pe această linie (pe care am putea-o numi, pe urmele lui Jacques Derrida, a „ospitalității absolute”), centrând, altfel spus, ca „rău prim” absolut, atât știința democratizată, cât și politica devenită științifică tocmai prin „logodirea” ei cu o știință democratizată „procedural”, deschisă (spre multiplicitatea și diversitatea cunoașterilor), pe „mutația climatică”, Latour vorbește din însăși inima actualității. Și o face propunându-ne nu să visăm să „decolăm” spre alte lumi (pe Marte, acum, e înghesuială de „rovere”), ci să „reaterizăm” pe Pământ, să redevenim „pământeni” și „tereștri”, deschizându-ne spre Cosmos, dar dinspre Pământ și, mai ales, pe Pământ, spre biodiversitatea cu adevărat cosmică, dar atât de fragilă, infimă, pe care viața-împreună continuă, tocmai, neobosit, s-o producă. Lumea însăși a devenit, în momentul de față, prin pluralitatea ei vie, latouriană.
                            </Typography>
                            
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button className={classes.actions} size="small" color="primary" variant="outlined" style={{ width:'80%' }}>Detalii</Button>
                        <IconButton aria-label="Adaugă în wishlist" color="primary">
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </Card>
                </Grid>
                <Grid container justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/0iyqOvH.jpg" title="Platon"></CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="h2" noWrap>
                                Platon
                            </Typography>
                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                            Opera integrală este un proiect susţinut de Fundaţia „Republica Literelor“ și Editura Humanitas. Născut la Atena în 427 î.Cr, într-o familie de vază, PLATON părea menit să se implice în politică. De altfel, unchii săi, Critias și Charmides, îl invitaseră să li se alăture la guvernarea lor tiranică, care urmase capitulării Atenei înaintea Spartei, în 404. Întâlnirea cu Socrate, al cărui discipol devenise deja de câţiva ani, i-a schimbat însă complet destinul. Dar în 399 Socrate e condamnat la moarte de democraţia recent restaurată pentru delict de opinie: ar fi introdus în cetate zei noi și ar fi corupt tineretul. Platon se expatriază pentru mai mulţi ani: călătorește la Megara, apoi la Cyrene, în Egipt și, în fine, la Siracuza, în Sicilia. Aici intră în conflict cu tiranul Dionysios cel Bătrân și e expulzat forţat.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button className={classes.actions} size="small" color="primary" variant="outlined" style={{ width:'80%' }}>Detalii</Button>
                        <IconButton aria-label="Adaugă în wishlist" color="primary">
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </Card>
                </Grid>
                <Grid container justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/tTQhvab.jpg" title="Abilitatea de a citi"></CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="h2" noWrap>
                            Abilitatea de a citi
                            </Typography>
                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                            Lucrarea detaliază componentele abilităţii de a citi, modul în care se dezvoltă aceasta, dificultăţile întâmpinate de anumiţi cititori, precum şi sugestii de intervenţie.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button className={classes.actions} size="small" color="primary" variant="outlined" style={{ width:'80%' }}>Detalii</Button>
                        <IconButton aria-label="Adaugă în wishlist" color="primary">
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </Card>
                </Grid>

                </ListItem>

                <ListItem>
                    
                <Grid container justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/tnFbeAq.jpg" title="O plimbare prin Univers"></CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="h2" noWrap>
                            O plimbare prin Univers
                            </Typography>
                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                            Astronomul Adrian Șonka își invită cititorii de toate vârstele la o plimbare de-a lungul și de-a latul Universului cunoscut.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button className={classes.actions} size="small" color="primary" variant="outlined" style={{ width:'80%' }}>Detalii</Button>
                        <IconButton aria-label="Adaugă în wishlist" color="primary">
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </Card>
                </Grid>
                <Grid container justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/b6yHf6V.jpg" title="Raspunsuri scurte la marile intrebari"></CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="h2" noWrap>
                            Raspunsuri scurte la marile intrebari
                            </Typography>
                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                            Există Dumnezeu? Cum a început totul? Putem prezice viitorul? E posibilă călătoria în timp? Ar trebui să colonizăm spațiul? Ne va depăși inteligența artificială? Această carte și răspunsurile pe care ni le oferă reprezintă ultima mărturie a uneia dintre cele mai strălucite minți.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button className={classes.actions} size="small" color="primary" variant="outlined" style={{ width:'80%' }}>Detalii</Button>
                        <IconButton aria-label="Adaugă în wishlist" color="primary">
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </Card>
                </Grid>

                <Grid container justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image="https://i.imgur.com/SEFPE3T.jpg" title="Extraterestrii"></CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="h2" noWrap>
                            Extraterestrii
                            </Typography>
                            <Typography noWrap variant="body2" color="textSecondary" component="p" style={{ marginBottom:'0px' }}>
                            Există extratereștri? Dacă ar exista, cum ar arăta? Cum ar înțelege ei lumea? Ce ar însemna să intrăm în contact cu ei?
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button className={classes.actions} size="small" color="primary" variant="outlined" style={{ width:'80%' }}>Detalii</Button>
                        <IconButton aria-label="Adaugă în wishlist" color="primary">
                            <AddShoppingCart />
                        </IconButton>
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
                    <Button className={classes.actions} size="small" color="primary" variant="outlined" style={{ width:'80%' }}>Detalii</Button>
                        <IconButton aria-label="Adaugă în wishlist" color="primary">
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </Card>
                </Grid>

                </ListItem>

                </List>

            </Paper>

            <Fab style={{ margin:0, top:'auto', right:30, bottom:30, left:'auto', position:'fixed' }} color="primary" href="/wishlist"><ShoppingCart /></Fab>

        </Grid>
    );
}