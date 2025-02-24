/* eslint-disable react/prop-types */
import { NavLink } from 'react-router'
import { useNavigate } from 'react-router'
import styles from './Nav.module.css'
import Swal from 'sweetalert2'
import UserApi from '../../entities/User/UserApi'

export default function Nav({ user, setUser }) {
	let navigate = useNavigate()

	async function signOutHandler() {
		try {
			const result = await Swal.fire({
				title: 'Вы уверены?',
				text: 'Это действие нельзя отменить!',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Да, выйти',
				cancelButtonText: 'Отмена',
			})
			if (result.isConfirmed) {
				const { statusCode, message, error } = await UserApi.signOut()

				if (error) {
					return Swal.fire('Ошибка!', error, 'error')
				}

				if (statusCode === 200) {
					Swal.fire('Готово!', message, 'success')
					setUser(null)
					navigate('/')
				}
			}
		} catch ({ message }) {
			console.error('Ошибка выхода:', message)
			Swal.fire('Ошибка!', 'Не удалось выйти. Попробуйте снова.', 'error')
		}
	}
	return (
		<nav className={styles.container}>
			<NavLink
				to='/'
				className={({ isActive }) => (isActive ? styles.active : '')}
			>
				Home
			</NavLink>
			{!user && (
				<>
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
				</>
			)}
			{user && (
				<>
					<span>Ëбаный {user.userName}</span>
					<NavLink
						to='/quests'
						className={({ isActive }) => (isActive ? styles.active : '')}
					>
						Quests
					</NavLink>
					<NavLink
						to='/createQwest'
						className={({ isActive }) => (isActive ? styles.active : '')}
					>
						Add new quests
					</NavLink>
					<button type='button' onClick={signOutHandler}>
						Выход
					</button>
				</>
			)}
		</nav>
	)
}
