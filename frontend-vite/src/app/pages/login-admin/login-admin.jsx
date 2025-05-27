import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { login } from '../../../features/user/user.thunks.js';

import styles from './login-admin.module.css';

const LoginAdmin = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [state, setState] = useState({
		email: '',
		password: '',
	});

	const inputChangeHandler = e => {
		const { name, value } = e.target;

		setState(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	const submitFormHandler = async e => {
		e.preventDefault();

		try {
			await dispatch(login(state)).unwrap();
			navigate('/');
			console.log(state);
		} catch (err) {
			console.error('Login failed', err);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.avatar}>🔒</div>
			<h1 className={styles.title}>Sign in</h1>

			<form onSubmit={submitFormHandler} className={styles.form}>
				<input
					className={styles.input}
					type="email"
					name="email"
					placeholder="Email"
					value={state.email}
					onChange={inputChangeHandler}
					autoComplete="email"
					required
				/>
				<input
					className={styles.input}
					type="password"
					name="password"
					placeholder="Password"
					value={state.password}
					onChange={inputChangeHandler}
					autoComplete="current-password"
					required
				/>
				<button type="submit" className={styles.button}>
					Sign In
				</button>
			</form>
		</div>
	);
};

export default LoginAdmin;
