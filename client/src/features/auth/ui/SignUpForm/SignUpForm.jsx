
import { useNavigate } from 'react-router'
import UserValidator from '../../../../entities/User/UserValidator'
import UserApi from '../../../../entities/User/UserApi'
import { setAccessToken } from '../../../../shared/lib/axiosinstance'
import { useState } from 'react'

const INITIAL_INPUTS_DATA = {
	userName: '',
	email: '',
	password: '',
	repeatPassword: '',
}

export default function SignUpForm({ setUser }) {
	const [inputs, setInputs] = useState(INITIAL_INPUTS_DATA)
	const navigate = useNavigate()

	const onChangeHandler = event => {
		setInputs(prev => ({ ...prev, [event.target.name]: event.target.value }))
	}
	const onSubmitHandler = async event => {
		event.preventDefault()
		const { isValid, error } = UserValidator.validateSignUp(inputs)

		if (!isValid) return alert(error)

		try {
			const {
				statusCode,
				data,
				error: responseError,
			} = await UserApi.signUp(inputs)

			if (responseError) {
				alert(responseError)
				return
			}

			if (statusCode === 201) {
				setUser(data.user)
				setAccessToken(data.accessToken)
				setInputs(INITIAL_INPUTS_DATA)
				navigate('/')
			}
		} catch (error) {
  console.error(
		'Ошибка при регистрации:',
		error.response?.data || error.message
	)
	alert(error.response?.data?.message || 'Произошла ошибка при регистрации.')
		}
	}
  const {userName, email, password, repeatPassword} = inputs

  return (
		<form onSubmit={onSubmitHandler}>
			<input
				type='text'
				name='userName'
				placeholder='Введите имя...'
				autoFocus
				onChange={onChangeHandler}
				value={userName}
			/>
			<input
				type='email'
				name='email'
				placeholder='Введите email...'
				onChange={onChangeHandler}
				value={email}
			/>
			<input
				type='password'
				name='password'
				placeholder='Введите пароль...'
				onChange={onChangeHandler}
				value={password}
			/>
			<input
				type='password'
				name='repeatPassword'
				placeholder='Подтвердите пароль...'
				onChange={onChangeHandler}
				value={repeatPassword}
			/>
			<button type='submit'>Зарегистрироваться</button>
		</form>
	)
}
