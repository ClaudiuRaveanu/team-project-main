import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Grid,Paper, Button, Typography, Link, Checkbox, FormControlLabel } from '@material-ui/core';
import { useAuth } from './AuthContext/use-auth';
import { Redirect } from 'react-router-dom'

// const initialValues = {
//     email:'',
//     password:''
// }

const LoginScreen = () => {
    const paperStyle = { padding: '40px 40px', width: 400, margin: '64px auto'}
    const btnStyle = { marginTop:16 , flex:1, width:400}
    const container = { display: 'flex', justifyContent: 'center', marginTop:40}
    // const btncontainer = { display: 'flex', justifyContent: 'center', }

    const urlUser = 'http://localhost:3000/Users/login'

    const [user,setUser] = useState({
        username:"",
        password:""
    });

    const [redirectRef,setRedirectRef] = useState(false);
    const [checked, setChecked] = useState(false);

    const auth = useAuth();

    const setRedirect = () => {
        setRedirectRef(true);
    }

    if(redirectRef === true) {
        return <Redirect  to='/' />
    }

    const getUser = () => {
        // axios.get(urlUser, { withCredentials: true }).then( (res) => {console.log("success")}).catch((e) => {console.log(e)})
        console.log(user);
        auth.signin(user,setRedirect)
    }

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
    
    // const onSubmit = (values) =>{
    //     console.log(values)
    // }
    return(
        <Grid>
            <Typography variant='h6' style={container}>Bibliotech UVT</Typography>
            <Paper elevation={5} style={paperStyle}>
                <Grid align='center'>
                    <Typography variant='h6'>Intră în cont</Typography>
                </Grid>
                <form>
                <TextField 
                label="E-mail" 
                type='email' 
                fullWidth
                variant="outlined"
                margin="normal"
                required
                onChange={ (e) => setUser({...user, username: e.target.value})}
                autoComplete="email"
                autoFocus
                />
                <TextField 
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                onChange={ (e) => setUser({...user, password: e.target.value})}
                label="Parolă"
                type="password"
                id="password"
                autoComplete="current-password"
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
                        label="Ține-mă minte"
                    /> */}
                
                <Button style={btnStyle} variant='contained' color='primary' onClick={() => {getUser();}}>Conectare</Button>
                <Grid container style={{marginTop:16}}>
                    {/* <Grid item xs>
                        <Link href="/">
                        Ai uitat parola?
                        </Link>
                    </Grid> */}
                    <Grid xs align="right">
                        <Link href="/register">
                            Nu ai cont?
                        </Link>
                    </Grid>


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

export default LoginScreen;