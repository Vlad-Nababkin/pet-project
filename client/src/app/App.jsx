import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../widgets/Layout/Layout'
import { useEffect, useState } from 'react'
import Home from '../pages/HomePage/HomePage'
import RegPage from '../pages/RegPage/RegPage'
// import login from '../pages/LoginPage/LoginPage'
import UserApi from '../entities/User/UserApi'
import { setAccessToken } from '../shared/lib/axiosinstance'
import LoginPage from '../pages/LoginPage/LoginPage'

function App() {
	const [user, setUser] = useState(null)

	useEffect(() => {
		UserApi.refreshToken().then(console.log)
		UserApi.refreshToken()
			.then(({ error, data, statusCode}) => {
				if (error) {
					setUser(null)
					return
				}
				if (statusCode === 200) {
					setUser(data.user)
					setAccessToken(data.accessToken)
				}
			})
			.catch(({ message }) => {
				console.log(message)
			})
	}, [])
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout user={user} setUser={setUser} />} />
				<Route path='/' element={<Home />} />
				<Route path='/reg' element={<RegPage setUser={setUser} />} />
				<Route path='/login' element={<LoginPage setUser={setUser} />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
