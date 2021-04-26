import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import './Login.css';
import { Redirect } from 'react-router';
//import Game from "./Game"

class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			error: '',
			gamePage: false
		};


		this.handlePassChange = this.handlePassChange.bind(this);
		this.handleUserChange = this.handleUserChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.dismissError = this.dismissError.bind(this);
	}
	usernames = ['Marika', 'Maritza', 'Sandeep', 'Igor'];
	dismissError() {
		this.setState({ error: '' });
	}
	handleUserChange(evt) {
		this.setState({
			username: evt.target.value,
		});
	};

	handlePassChange(evt) {
		this.setState({
			password: evt.target.value,
		});
	}
	handleSubmit(evt) {

		//evt.preventDefault();

		this.usernames.forEach(username => {
			if (this.state.username === username && this.state.password === '123') {
				this.setState({ gamePage: true })
			}
		})


		console.log(this.state);
		if (!this.state.username) {
			return this.setState({ error: 'Username is required' });
		}

		if (!this.state.password) {
			return this.setState({ error: 'Password is required' });
		}

		return this.setState({ error: '' });
	}
	render() {
		if (!this.state.gamePage) {
			return (

				<div>
					<div>
						<h1>Welcome to the Hangman</h1>
					</div>

					<div className="login container">
						<form onSubmit={this.handleSubmit}>
							{
								this.state.error &&
								<h3 data-test="error" onClick={this.dismissError}>
									<button onClick={this.dismissError}>✖</button>
									{this.state.error}
								</h3>
							}
							<h2>Login</h2>

							<div className="username">
								<label>User Name</label>
								<input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
							</div>

							<div className="password">
								<label>Password</label>
								<input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

							</div>


							<input type="submit" value="Login" onClick={this.handleSubmit} />

						</form>
						<Link to={{ pathname: "/home", name: "Guest" }}><input type="submit" value="Play as a Guest" /></Link>
					</div>
				</div>
			);
		} else {
			return (

				<Redirect to={{ pathname: '/home', name: this.state.username }} />

			)
		}

	}
}

export default Login;

