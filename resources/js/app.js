/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Imports para la clase de react
 */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login';
import Axios from 'axios';


/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// require('./components/App')

class App extends Component {

    constructor(props){
        super(props);

        this.state =  {
            loggedIn: false,
            user: null
        };

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login(email, password){

        const data = JSON.stringify({
            email: email,
            password: password,
            remember_me: false
        });     
        
        axios({
            url: "http://localhost:8000/auth/login",
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        })
        .then(function(response){
            return response.data;
        })
        .then(function(data){
            console.log(data);
        });
    }

    logout(){

    }

    render () {
        return (<Login login={this.login} logout={this.logout} token={this.props.token} />);
    }
}

ReactDOM.render(<App />, document.getElementById('main-container'))