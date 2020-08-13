import React, { Component } from 'react';
import { render } from 'react-dom';
import {Landing} from './Landing';
import './style.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Signin} from './Register';
import {Login} from './Login';
import axios from './axios-content';
import {Course} from './Course';
import {Error} from './Error';

const Home = (props) => {
  const navigateLogin = () => {
      props.history.push('/login');
  }
  const navigateSignin = () => {
      props.history.push('/register');
  }
  const navigateAbout = () => {
      props.history.push('/about');
  }
  return(
    <>
    <Landing/>
    <div>
      <ul className = 'list'>
      <li><button onClick = {navigateLogin}>Log in</button></li>
      <li><button onClick = {navigateSignin}>Sign in</button></li>
      <li><button onClick = {navigateAbout}>about</button></li>
      </ul> 
    </div>
    </> 
)}

const Register = (props) => {
   const navigateHome = () => {
      props.history.push('/');
  }
  return (
    <div className = "table-content">
      <Signin/>
      <br/>
      <button className = "button-center" onClick = {navigateHome}>Back To Home</button>
    </div>    
  )
}

const User = (props) => {
  const navigateHome = () => {
      props.history.push('/');
  }
  return (
    <div className = "table-content">
      <Login/>
      <br/>
      <br/>
      <button onClick = {navigateHome}>Back To Home</button>
    </div>
  )
}

const About = (props) => {
  const navigateHome = () => {
      props.history.push('/');
  }
  return(
   <div className = "table-content">
    <Course/>
    <br/>
    <button onClick = {navigateHome}>Back To Home</button>
  </div>
  )
}

const Noresult = (props) => {
   const navigateHome = () => {
      props.history.push('/');
  }
  return(
    <>
      <Error/>
      <br/>
      <button onClick = {navigateHome}>Back To Home</button>
    </>
  )
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <BrowserRouter>
      <div>
          <Switch>
            <Route  exact path='/' component = {Home}/>
            <Route path='/register' component = {Register}/>
            <Route path='/login' component = {User}/>
            <Route path='/about' component = {About}/>
            <Route component = {Noresult}/>
          </Switch> 
      </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
