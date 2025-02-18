import './HomePage.module.css'

export default function Home() {
	return (
		<div>
			<input
				type='text'
				className='search-input'
				placeholder='Введите запрос...'
				aria-label='Поиск по сайту'
			/>
			<button type='button' className='search-button'>
				Найти
			</button>
		</div>
	)
}
