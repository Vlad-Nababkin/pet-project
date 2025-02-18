import Nav from '../Nav/Nav'
import HomePage from '../../pages/HomePage/HomePage'
import { Outlet } from 'react-router'

export default function Layout() {
	return (
		<div>
			<Nav />
			<Outlet />
			<HomePage />
		</div>
	)
}
