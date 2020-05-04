import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';

const styles = theme => ({
    root: {
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    paper: {
        margin: 'auto',
        maxWidth: 400,
    },
    h6: {
        color: '#818181',
        margin: 5,
        textAlign: 'center'
    },
    form: {
        padding: 20
    },
    textfield: {
        width: '100%'
    },
    button: {
        width: '100%',
        marginTop: 20,
        backgroundColor: '#1976D2',          
        '&:hover': {
            backgroundColor: '#005FCC',
            color: '#FFF'
        }
    }
});

class Login extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            email: null,
            password: null
        }

        this.handleTextBoxEvent = this.handleTextBoxEvent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTextBoxEvent(e){

        if(e.target.id == "email")
            this.setState({email: e.target.value, password: this.state.password})

        if(e.target.id == "password")
            this.setState({email: this.state.email, password: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();

        this.props.login(this.state.email, this.state.password);
        // const data = JSON.stringify({
        //     email: this.state.email,
        //     password: this.state.password,
        //     remember_me: false
        // });

        // const options = {
        //     method: 'post',
        //     headers: {
        //         'content-type': 'application/json',
        //         'X-Requested-With': 'XMLHttpRequest',
        //         'X-CSRF-TOKEN': this.props.token
        //     },
        //     body: data
        // }

        // fetch("http://localhost:3000/auth/login", options)
        // .then(
        //     response => response.json()
        // ).then(function(data){
        //     console.log(data);
        // });
    }

    render(){

        const { classes } = this.props;

        return(
            <div className={classes.root}>
                <div>
                    <Typography className={classes.h6}  component="h6">SISTEMA DE SOPORTE A USUARIOS</Typography>
                    <Paper className={classes.paper}>
                        <form className={classes.form} method="post" onSubmit={this.handleSubmit}>
                            
                            <TextField onChange={this.handleTextBoxEvent} className={classes.textfield} id="email" name="email" label="correo" margin="normal"></TextField>
                            <TextField onChange={this.handleTextBoxEvent} type="password" className={classes.textfield} id="password" name="contraseña" label="contraseña" margin="normal"></TextField>
                            
                            <Button type="submit" className={classes.button} variant="contained" color="primary">
                                LOGIN    
                            </Button>
                        </form>
                    </Paper>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);