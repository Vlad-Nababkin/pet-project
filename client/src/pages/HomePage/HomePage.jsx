import './HomePage.module.css'

export default function Home() {
	return (
		<div>
			<input
				type='text'
				class='search-input'
				placeholder='Введите запрос...'
				aria-label='Поиск по сайту'
			/>
			<button type='button' class='search-button'>
				Найти
			</button>
		</div>
	)
}
