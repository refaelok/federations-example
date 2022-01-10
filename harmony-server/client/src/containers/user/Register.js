import React, {Component} from 'react';
import {baseConnectForm} from '../../base/features/base-redux-react-connect';
import {Link} from 'react-router-dom';
import UsersActions from '../../redux/users';

import {ROOT} from '../../routes';
import {Cor_Input} from '../../components/core';

class Register extends Component {
	render() {

		return (
			<form onSubmit={this.props.handleSubmit(this.handleSubmit.bind(this))}>

				<h1>{this.T('register')}</h1>

				<Cor_Input name="email" type="email" label={this.T('email')} T={this.T.bind(this)}/>
				<Cor_Input name="password" type="password" label={this.T('password')} T={this.T.bind(this)}/>
				<Cor_Input name="repassword" type="password" label={this.T('repeatPassword')} T={this.T.bind(this)}/>

				<br/>
				<div>{this.props.registerError}</div>

				<button type="submit" className="btn btn-success">{this.T('register')}</button>
				<Link to={ROOT} style={{float: 'right'}} className="btn btn-default">{this.T('backToLogin')}</Link>


			</form>
		);

	}

	handleSubmit(props) {
		this.props.createUser(props);
	}

	validate(values) {
		const errors = {};

		if (!values.email) {
			errors.email = 'emailError';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = 'invalidEmail';
		}

		if (!values.password) {
			errors.password = 'passwordError';
		}

		if (!values.repassword) {
			errors.repassword = 'passwordError';
		}

		if (values.password !== values.repassword) {
			errors.repassword = 'repeatPasswordError';
		}


		return errors;
	}
}


export default baseConnectForm(Register,
	(state) => {
		return {
			registerError: state.users.registerError
		};
	},
	{
		createUser: UsersActions.createUser
	},
	{
		form: 'RegisterForm',
		fields: ['email', 'password', 'repassword']
	}
);