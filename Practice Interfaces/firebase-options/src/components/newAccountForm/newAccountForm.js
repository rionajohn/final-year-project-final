import React from 'react';
import StartFirebase from '../firebaseConfig/index';
import { ref, set } from "firebase/database";

import './form.css';

export class NewAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            db: '',
            username: '',
            fullname: '',
            password: ''
        }

        this.interface = this.interface.bind(this);
    }

    componentDidMount() {
        this.setState({
            db: StartFirebase()
        })
    }

    render() {
        return (
            <>
                <label>Enter Username</label>
                <input type='text' id='userbox' value={this.state.username}
                    onChange={e => { this.setState({ username: e.target.value }) }} />
                <br />
                <label>Enter Full Name</label>
                <input type='text' id='namebox' value={this.state.fullname}
                    onChange={e => { this.setState({ fullname: e.target.value }) }} />
                <br />
                <label>Enter Password</label>
                <input type='password' id='passbox' value={this.state.password}
                    onChange={e => { this.setState({ password: e.target.value }) }} />
                <br />

                <button id='createAccountBtn' onClick={this.interface}>Create Account</button>
            </>
        )
    }

    interface(event) {
        const id = event.target.id;

        if (id == 'createAccountBtn') {
            this.NewAccount();
        }
    }

    getAllInputs() {
        return {
            username: this.state.username,
            name: this.state.fullname,
            password: this.state.password
        }
    }

    NewAccount() {
        const db = this.state.db;
        const data = this.getAllInputs();

        set(ref(db, 'Customer/' + data.username),
            {
                FullName: data.name,
                Password: data.password
            })
            .then(() => { alert('Data has been added successfully') })
            .catch((error) => { alert('There was an error, details: ' + error) });
    }

    // updateData() {
    //     const db = this.state.db;
    //     const data = this.getAllInputs();

    //     update(ref(db, 'Customer/' + data.username),
    //         {
    //             FullName: data.name,
    //             PhoneNumber: data.phone,
    //             DateOfBirth: data.dob
    //         })
    //         .then(() => { alert('Data has been updated successfully') })
    //         .catch((error) => { alert('There was an error, details: ' + error) });
    // }

    // deleteData() {
    //     const db = this.state.db;
    //     const username = this.getAllInputs().username;

    //     remove(ref(db, 'Customer/' + username))
    //         .then(() => { alert('Data has been updated successfully') })
    //         .catch((error) => { alert('There was an error, details: ' + error) });
    // }

}