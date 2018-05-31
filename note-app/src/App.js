import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import notes from './notes.js';
import axios from 'axios';

// Combine Component Imports into a single file at end
import Header from './components/header/header.js';
import NavBar from './components/navBar/navBar.js';
import InputForm from './components/inputForm/inputForm.js';
import Display from './components/display/display.js';
import Home from './components/home/home.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { notes };
  }

  componentDidMount() {
    axios
      .get('https://blooming-bastion-41361.herokuapp.com/api/notes')
      .then(response => {
        this.setState({ notes: response.data })
      })
      .catch(err => {
        console.log(err)
      });
  };

  handleUpdate = (id, update) => {
    axios
      .put(`https://blooming-bastion-41361.herokuapp.com/api/notes/${id}`, update)
      .then(response => {
        let { notes } = this.state;
        notes.map(((note) => {
          if (note._id === response.data._id) {
            note.title = response.data.title;
            note.content = response.data.content;
            return note
          }
          return note
        });
      this.setState({ notes: notes });
      })
      .catch(err => {
        console.log(err);
      })
  }
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
