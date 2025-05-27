import React, { useEffect, useRef, useState } from 'react';

import TourCard from '../../../components/tours/tour-card/tour-card.jsx';

import styles from './tours.module.css';

const mockTours = [
	{
		id: 1,
		title: 'Тур в горы',
		description: 'Невероятные горные пейзажи и свежий воздух ждут вас!',
		imageUrl:
			'https://goldenglobeint.com/wp-content/uploads/2024/10/Cho3-1024x926.jpeg',
		category: ['Горы'],
		region: 'Нарын',
	},
	{
		id: 2,
		title: 'Озёрный отдых',
		description: 'Отдых у живописных озёр с кристально чистой водой.',
		imageUrl:
			'https://goldenglobeint.com/wp-content/uploads/2024/10/Cho3-1024x926.jpeg',
		category: ['Озёра'],
		region: 'Иссык-Куль',
	},
	{
		id: 3,
		title: 'Экстрим на озерах',
		description: 'Водные приключения, драйв и незабываемые впечатления.',
		imageUrl:
			'https://goldenglobeint.com/wp-content/uploads/2024/10/Cho3-1024x926.jpeg',
		category: ['Озёра', 'Экстрим'],
		region: 'Иссык-Куль',
	},
	{
		id: 4,
		title: 'Культурный тур по Чую',
		description:
			'Погружение в традиции, архитектуру и историю Чуйской области.',
		imageUrl:
			'https://goldenglobeint.com/wp-content/uploads/2024/10/Cho3-1024x926.jpeg',
		category: ['Культурные туры'],
		region: 'Чуй',
	},
	{
		id: 5,
		title: 'Зимние приключения',
		description: 'Горнолыжные трассы, снежные склоны и зимние забавы.',
		imageUrl:
			'https://goldenglobeint.com/wp-content/uploads/2024/10/Cho3-1024x926.jpeg',
		category: ['Зимние туры'],
		region: 'Ош',
	},
	{
		id: 6,
		title: 'Юрты и этнотуризм',
		description:
			'Уникальный опыт жизни в юрте и знакомства с кочевыми традициями.',
		imageUrl:
			'https://goldenglobeint.com/wp-content/uploads/2024/10/Cho3-1024x926.jpeg',
		category: ['Юрты и этнотуризм'],
		region: 'Иссык-Куль',
	},
	{
		id: 7,
		title: 'Заповедники Баткена',
		description:
			'Исследуйте дикие уголки природы и редкие виды растений и животных.',
		imageUrl:
			'https://goldenglobeint.com/wp-content/uploads/2024/10/Cho3-1024x926.jpeg',
		category: ['Заповедники'],
		region: 'Баткен',
	},
	{
		id: 8,
		title: 'Достопримечательности Таласа',
		description:
			'Откройте для себя малоизвестные, но удивительные места Таласа.',
		imageUrl:
			'https://goldenglobeint.com/wp-content/uploads/2024/10/Cho3-1024x926.jpeg',
		category: ['Достопримечательности'],
		region: 'Талас',
	},
];

const categoriesList = [
	'Горы',
	'Озёра',
	'Заповедники',
	'Достопримечательности',
	'Регионы',
	'Культурные туры',
	'Экстрим',
	'Юрты и этнотуризм',
	'Зимние туры',
	'Санаторные',
];

// Регионы для выбора
const regionsList = [
	'Иссык-Куль',
	'Нарын',
	'Талас',
	'Чуй',
	'Ош',
	'Джалал-Абад',
	'Баткен',
];

const Tours = () => {
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [selectedRegion, setSelectedRegion] = useState('');
	const [showMobileFilters, setShowMobileFilters] = useState(false);
	const tourListRef = useRef(null);

	const handleCategoryChange = category => {
		setSelectedCategories(prev =>
			prev.includes(category)
				? prev.filter(c => c !== category)
				: [...prev, category],
		);
	};

	const handleRegionChange = e => {
		setSelectedRegion(e.target.value);
	};

	const handleSearch = () => {
		setShowMobileFilters(false);
		setTimeout(() => {
			tourListRef.current?.scrollIntoView({ behavior: 'smooth' });
		}, 100);
	};

	const filteredTours = mockTours.filter(tour => {
		const categoryMatch =
			selectedCategories.length === 0 ||
			tour.category.some(c => selectedCategories.includes(c));

		const regionMatch = selectedRegion === '' || tour.region === selectedRegion;

		return categoryMatch && regionMatch;
	});

	useEffect(() => {
		const catParam =
			selectedCategories.length > 0 ? selectedCategories.join(',') : '';
		const regionParam = selectedRegion || '';

		const query = `tours?${catParam ? `category=${catParam}` : ''}${
			catParam && regionParam ? '&' : ''
		}${regionParam ? `region=${regionParam}` : ''}`;

		console.log(query);
	}, [selectedCategories, selectedRegion]);

	return (
		<div className={styles.tours}>
			<div className={styles.filterToggle}>
				<button
					className={styles.filterButton}
					onClick={() => setShowMobileFilters(!showMobileFilters)}
				>
					{showMobileFilters ? 'Закрыть фильтр' : 'Фильтр'}
				</button>
			</div>

			<div className={styles.container}>
				<div
					className={`${styles.sidebar} ${
						showMobileFilters ? styles.open : ''
					}`}
				>
					<div className={styles.filterGroup}>
						<h3>Категории</h3>
						{categoriesList.map(cat => (
							<label key={cat} className={styles.checkboxLabel}>
								<input
									type="checkbox"
									value={cat}
									checked={selectedCategories.includes(cat)}
									onChange={() => handleCategoryChange(cat)}
								/>
								{cat}
							</label>
						))}
					</div>

					<div className={styles.filterGroup}>
						<h3>Регион</h3>
						<select value={selectedRegion} onChange={handleRegionChange}>
							<option value="">Все регионы</option>
							{regionsList.map(region => (
								<option key={region} value={region}>
									{region}
								</option>
							))}
						</select>
					</div>

					<button className={styles.searchButton} onClick={handleSearch}>
						Поиск
					</button>
				</div>

				<div className={styles.mainContent}>
					<div ref={tourListRef}></div>
					<h2>Туры</h2>
					<div className={styles.tourList}>
						{filteredTours.length === 0 && <p>Туры не найдены</p>}
						{filteredTours.map(tour => (
							<TourCard key={tour.id} tour={tour} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tours;
