/* eslint-disable react/prop-types */
import Nav from '../Nav/Nav'
import HomePage from '../../pages/HomePage/HomePage'
import { Outlet } from 'react-router'

export default function Layout({ user, setUser }) {
	return (
		<div>
			<Nav user={user} setUser={setUser}/>
			<Outlet />
			<HomePage />
		</div>
	)
}
