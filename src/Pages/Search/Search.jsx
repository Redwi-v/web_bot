import style from './search.module.scss';

import Input from '../../commons/Input/Input';
import { NavLink } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import FiltersMenu from '../../Components/FiltersMenu/FiltersMenu';

import { useParams } from 'react-router';
//images
import loupe from '../../assets/icons/loupe.png';
import rightArrow from '../../assets/icons/arrowRight.png';
import ProductsList from '../../Components/ProductsList/ProductsLIst';
import { useState } from 'react';

const Search = props => {
	const [findInput, setFind] = useState(null);
	const whatFind = useParams().find;

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

	let renderList = categoryes.map((categoryesObj, index) => {
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

	const find = value => {
		setFind(value);
	};

	if (findInput) {
		return <SearchInput find={find} list={<ProductsList products={[]} />} />;
	}

	if (whatFind) {
		return (
			<div className={style.searchWraper}>
				<Header title={whatFind} backHref='/search' />
				<FiltersMenu />
				<ProductsList />
			</div>
		);
	}

	return <SearchInput find={find} list={<ul className={style.list}>{renderList}</ul>} />;
};

const SearchInput = ({ list, find }) => {
	return (
		<div className={style.searchWraper}>
			<div className={style.search}>
				<img className={style.loupe} src={loupe} alt='loupe' />
				<Input className={style.input} submit={find} placeholder={'Поиск...'} type={'text'} />
			</div>
			{list}
		</div>
	);
};

export default Search;
