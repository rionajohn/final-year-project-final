import React from 'react';
import StartFirebase from '../firebaseConfig/index';
import { ref, get, child } from "firebase/database";
import { Navigate } from 'react-router-dom';

export class LoginWebForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            db: '',
            username: '',
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
                <label>Enter Password</label>
                <input type='password' id='passbox' value={this.state.password}
                    onChange={e => { this.setState({ password: e.target.value }) }} />
                <br />

                <button id='loginBtn' onClick={this.interface}>Login</button>
            </>
        )
    }

    interface(event) {
        const id = event.target.id;

        if (id == 'loginBtn') {
            this.Login();
        }
    }

    getAllInputs() {
        return {
            username: this.state.username,
            password: this.state.password
        }
    }

    Login() {
        const dbref = ref(this.state.db);
        const username = this.getAllInputs().username;

        get(child(dbref, 'Customer/' + username)).then((snapshot) => {
            if (snapshot.exists()) {
                this.setState({
                    password: snapshot.val().Passowrd
                })
            }


            else {
                alert('Invalid Details!')
            }
        })
            .catch((error) => { alert('There was an error, details: ' + error) });
    }

}