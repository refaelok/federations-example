import {defineMessages} from 'react-intl';

const messages = defineMessages({
	login: {
		id: 'user.login',
		defaultMessage: 'S\'identifier',
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
		defaultMessage: 'Entrez un email',
		description: 'Email error message',
	},
	password: {
		id: 'user.password',
		defaultMessage: 'Mot de passe',
		description: 'Password title',
	},
	passwordError: {
		id: 'user.passwordError',
		defaultMessage: 'Entrer un mot de passe',
		description: 'Password error message',
	},
	invalidEmail: {
		id: 'user.invalidEmail',
		defaultMessage: 'Adresse e-mail invalide',
		description: 'Invalid email address',
	},
	repeatPasswordError: {
		id: 'user.repeatPasswordError',
		defaultMessage: 'Répétez le mot de passe pour ne pas correspondre au mot de passe',
		description: 'Repeat password not mach to password',
	},
	repeatPassword: {
		id: 'user.repeatPassword',
		defaultMessage: 'Répéter le mot de passe',
		description: 'Repeat Password',
	},
	backToLogin: {
		id: 'user.backToLogin',
		defaultMessage: 'Retour connexion',
		description: 'Back to Login Title',
	}
});

export default messages;