/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useNavigate } from 'react-router'
import UserValidator from '../../../../entities/User/UserValidator'
import UserApi from '../../../../entities/User/UserApi'
import { setAccessToken } from '../../../../shared/lib/axiosinstance'

const INITIAL_INPUTS_DATA = {
	email: '',
	password: '',
}

export default function SignInForm({ setUser }) {
	const [inputs, setInputs] = useState(INITIAL_INPUTS_DATA)
	const navigate = useNavigate()

	const onChangeHandler = event => {
		setInputs(prev => ({ ...prev, [event.target.name]: event.target.value }))
	}

	const onSubmitHandler = async event => {
		event.preventDefault()

		const { isValid, error } = UserValidator.validateSignIn(inputs)

		if (!isValid) return alert(error)

		try {
      const {
        statusCode,
        data,
        error: responseError,
      } = await UserApi.signIn(inputs)

      if (responseError) {
        alert(responseError)
        return
      }

      if (statusCode === 200) {
        setUser(data.user)
        setAccessToken(data.accessToken)
        setInputs(INITIAL_INPUTS_DATA)
        navigate('/')
      }
		} catch (error) {
			console.log(error)
			alert(error.message)
		}
	}
  const {email, password} = inputs

  return (
    <form onSubmit={onSubmitHandler}>
      <input type='email' name='email' placeholder='Введите ваш email...' onChange={onChangeHandler} value={email} />
      <input type='password' name='password' placeholder='Введите ваш пароль...' onChange={onChangeHandler} value={password} />
      <button type='submit'>Войти</button>
    </form>
  )
}
