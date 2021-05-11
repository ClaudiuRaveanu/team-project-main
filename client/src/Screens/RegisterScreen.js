import React from 'react';

import { TextField, Grid,Paper, Button, Typography, Link } from '@material-ui/core';
import MuiPhoneNumber from 'material-ui-phone-number';

// const initialValues = {
//     email:'',
//     password:''
// }

const RegisterScreen = () => {
    const paperStyle = { padding: '40px 40px', width: 400, margin: '64px auto' }
    const btnStyle = { marginTop:16 , flex:1, width: 400}
    const container = { display: 'flex', justifyContent: 'center', marginTop:40}
    // const btncontainer = { display: 'flex', justifyContent: 'center', }

    // const [checked, setChecked] = React.useState(false);

    // const handleChange = (event) => {
    //     setChecked(event.target.checked);
    // };

    return(
        <Grid>
            <Typography variant='h6' style={container}>Bibliotech UVT</Typography>
            <Paper elevation={5} style={paperStyle}>
                <Grid align='center'>
                    <Typography variant='h6'>Înregistrare</Typography>
                </Grid>
                <form>
                <Grid container spacing={2} style={{marginTop:8}}>
                    <Grid item xs>
                    <TextField 
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="Nume"
                    autoFocus
                    />
                    </Grid>
                    <Grid item xs>
                    <TextField 
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Prenume"
                    name="lastName"
                    autoComplete="lname"
                    />
                    </Grid>
                </Grid>
                <TextField 
                label="E-mail" 
                type='Email' 
                fullWidth
                variant="outlined"
                margin="normal"
                required
                autoComplete="email"
                autoFocus
                />
                <TextField 
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Parolă"
                type="password"
                id="password"
                autoComplete="current-password"
                />
                <TextField 
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password2"
                label="Rescrie parola"
                type="password"
                id="password"
                autoComplete="current-password"
                />
                <MuiPhoneNumber
                name="phone"
                label="Telefon"
                id="phone"
                type="phone"
                autoComplete="phone"
                required
                defaultCountry="ro"
                variant="outlined"
                margin="normal"
                fullWidth>
                </MuiPhoneNumber>

                <TextField 
                label="Număr matricol" 
                type='id_nr' 
                fullWidth
                variant="outlined"
                margin="normal"
                required
                autoComplete="id_nr"
                autoFocus
                />

                {/* <FormControlLabel
                        control={
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Doresc să primesc pe e-mail anunțuri și actualizări"
                    /> */}

                
                
                <Button type='Submit' style={btnStyle} variant='contained' color='primary'>Trimite</Button>
                <Grid container justify='flex-end' style={{marginTop:16}}>
                    <Link href="/signin">
                        Ai deja un cont?
                    </Link>
                </Grid>   
                
                

                </form>




            {/*<Formik initialValues={initialValues} onSubmit={onSubmit}> 
                {(props) =>(
                    <Form>
                        <TextField label="Email" type='Email' fullWidth/>
                        <TextField label="Password" type='Password' fullWidth/>
                        <Grid style={container}>
                        <Button type='Submit' style={btnStyle} variant='contained' color='primary'>Login</Button>
                        </Grid>
                        <Grid container>
                            <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                            </Grid>
                            <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
                */}
            </Paper>
        </Grid>
        
    );
};

export default RegisterScreen;