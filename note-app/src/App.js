import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import notes from './notes.js';
import axios from 'axios';
const url = 'https'

// Combine Component Imports into a single file at end
import Header from './components/header/header.js';
import NavBar from './components/navBar/navBar.js';
import InputForm from './components/inputForm/inputForm.js';
import Display from './components/display/display.js';
import Home from './components/home/home.js';
import displayAll from './components/displayAll/displayAll';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { notes };

    // this.setState = this.setState.bind(this)
  }

  componentDidMount() {
    this.newRequest();
  }

  newRequest = () => {
    axios
      .get(url)
      .then(response => {
        this.setState({ notes: response.data })
      })
      .catch(error => {
        console.log(error);
      })
  };

  deleteNote = (noteId) => {
    axios.delete(`${url}/${noteId}`)
    .then(response => {
      this.newRequest();
    })
    .catch(err => {
      console.log(err);
    });
  };

  render() {
    return (
      <div className="App">
      <p> poop</p>
      <p> poop</p>
      <p> poop</p>
      <p> poop</p>
      <p> poop</p>
      <p> poop</p>
        <Route
          exact path='/' title='List View' component={Header} />
        <Route exact path='/' render={props => <Home notes={this.state.notes} />} />


        <Route exact path='/new' component={Header} />
        <Route exact path='/new' render={props => <InputForm notes={this.state.notes} />} />


        <Route exact path='/note/:id' component={Header} />
        <Route exact path='/note/:id' component={Display} />

        <Route exact path='/note/:id/edit' component={Header} />
        <Route exact path='/note/:id/edit' component={InputForm} />

        <Route exact path='/note' component={Header} />
        <Route exact path='/note' component={Display} />

        <Route path='/' component={NavBar} />
      </div>
    );
  }
}

export default App;
