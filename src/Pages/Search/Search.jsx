import style from './search.module.scss';

import Input from '../../commons/Input/Input';
import { NavLink } from 'react-router-dom';
import Header from '../../Components/Header/Header';

import { useParams } from 'react-router';
//images
import loupe from '../../assets/icons/loupe.png';
import rightArrow from '../../assets/icons/arrowRight.png';
import ProductsList from '../../Components/ProductsList/ProductsLIst';

const Search = props => {
	const find = value => {
		console.log(value);
	};

	const categoryes = [
		{
			category: 'Кроссовки',
		},
		{
			category: 'Носки',
		},
		{
			category: 'Брюки',
		},
		{
			category: 'Футболки',
		},
		{
			category: 'Шапки',
		},
		{
			category: 'Аксессуары',
		},
	];

	const renderList = categoryes.map((categoryesObj, index) => {
		const { category } = categoryesObj;

		return (
			<li className={style.item} key={index}>
				<NavLink className={style.link} to={`/search/${category || ''}`}>
					{category}
					<img src={rightArrow} alt='arrow' />
				</NavLink>
			</li>
		);
	});

	const whatFind = useParams().find;

	if (whatFind) {
		return (
			<div className={style.searchWraper}>
				<Header title={whatFind} backHref='/search' />
				<ProductsList />
			</div>
		);
	}

	return (
		<div className={style.searchWraper}>
			<div className={style.search}>
				<img className={style.loupe} src={loupe} alt='loupe' />
				<Input className={style.input} submit={find} placeholder={'Поиск...'} type={'text'} />
			</div>
			<ul className={style.list}>{renderList}</ul>
		</div>
	);
};

export default Search;
