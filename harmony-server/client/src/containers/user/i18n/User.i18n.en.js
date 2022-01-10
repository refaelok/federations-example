import {defineMessages} from 'react-intl';

const messages = defineMessages({
	login: {
		id: 'user.login',
		defaultMessage: 'Login',
		description: 'Login title',
	},
	register: {
		id: 'user.register',
		defaultMessage: 'Register',
		description: 'Register title',
	},
	email: {
		id: 'user.email',
		defaultMessage: 'Email',
		description: 'Email title',
	},
	emailError: {
		id: 'user.emailError',
		defaultMessage: 'Enter a email',
		description: 'Email error message',
	},
	password: {
		id: 'user.password',
		defaultMessage: 'Password',
		description: 'Password title',
	},
	passwordError: {
		id: 'user.passwordError',
		defaultMessage: 'Enter a password',
		description: 'Password error message',
	},
	invalidEmail: {
		id: 'user.invalidEmail',
		defaultMessage: 'Invalid email address',
		description: 'Invalid email address',
	},
	repeatPasswordError: {
		id: 'user.repeatPasswordError',
		defaultMessage: 'Repeat password not mach to password',
		description: 'Repeat password not mach to password',
	},
	repeatPassword: {
		id: 'user.repeatPassword',
		defaultMessage: 'Repeat Password',
		description: 'Repeat Password',
	},
	backToLogin: {
		id: 'user.backToLogin',
		defaultMessage: 'Back to Login',
		description: 'Back to Login Title',
	}
});

export default messages;