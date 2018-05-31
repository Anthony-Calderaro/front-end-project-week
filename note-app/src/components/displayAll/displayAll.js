import React from 'react';
import axios from 'axios';
// import './displayAll.css';
// import { Link } from 'react-router-dom';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class displayAll extends React.Component {
    state = {
        notes: []
    }

    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const notes = response.data;
                this.setState({ notes });
            })
    }

    render() {
        return (
            <ul>
                {this.state.notes.map(note => <li>{notes.name}</li>)}
            </ul>
        )
    }
}

