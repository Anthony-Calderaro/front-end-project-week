import React from 'react';
import axios from 'axios';

const newNote = (props) => {

    state = {
        title: '',
        body: '',
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name
        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(response => {
                console.log(response);
                console.log(response.data)
            })
    }

    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Note Name:
                    <input type='text' name='name' onChange={this.handleChange} />
                </label>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}
