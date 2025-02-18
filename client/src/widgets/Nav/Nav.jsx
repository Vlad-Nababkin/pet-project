import { NavLink } from 'react-router'
import { useNavigate } from 'react-router'
import styles from './Nav.module.css'

export default function Nav() {
  let navigate = useNavigate()
  return (
		<nav className={styles.container}>
			<NavLink
				to='/'
				className={({ isActive }) => (isActive ? styles.active : '')}
			>
				Home
			</NavLink>
			<NavLink
				to='/tasks'
				className={({ isActive }) => (isActive ? styles.active : '')}
			>
				Qwests
			</NavLink>
			<NavLink
				to='/login'
				className={({ isActive }) => (isActive ? styles.active : '')}
			>
				Login
			</NavLink>
			<NavLink
				to='/reg'
				className={({ isActive }) => (isActive ? styles.active : '')}
			>
				Register
			</NavLink>
		</nav>
	)
}