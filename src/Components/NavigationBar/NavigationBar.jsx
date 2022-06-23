import style from './navigationBar.module.scss';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

//icons
import homePageBlack from '../../assets/icons/homePageBlack.png';
import searchPageBlack from '../../assets/icons/searchPageBlack.png';
import favoritesPageBlack from '../../assets/icons/favoritesPageBlack.png';
import cartPageBlack from '../../assets/icons/cartPageBlack.png';

const NavigationBar = props => {
	const { numberOfItemsInTheCart = 2 } = props;

	const routes = [
		{
			path: '/home',
			icon: homePageBlack,
		},
		{
			path: '/search',
			icon: searchPageBlack,
		},
		{
			path: '/favorites',
			icon: favoritesPageBlack,
		},
		{
			path: '/cart',
			icon: cartPageBlack,
			numberOfItemsInTheCart,
		},
	];

	const location = useLocation().pathname;

	const renderItems = routes.map((route, index) => {
		const { path, icon, numberOfItemsInTheCart } = route;

		const chooseClass = location.includes(path) ? style.active : '';

		return (
			<li key={index} className={`${style.item} ${chooseClass}`}>
				<NavLink to={path}>
					{numberOfItemsInTheCart && <span className={style.numberOfItemsInTheCart}>{numberOfItemsInTheCart}</span>}
					<img src={icon} alt='home' />
				</NavLink>
			</li>
		);
	});

	return (
		<nav className={style.navigation}>
			<ul className={style.list}>{renderItems}</ul>
		</nav>
	);
};

export default NavigationBar;
