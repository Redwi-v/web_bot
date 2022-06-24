import style from './navigationBar.module.scss';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

//icons
import homePageBlack from '../../assets/icons/homePageBlack.svg';
import searchPageBlack from '../../assets/icons/searchPageBlack.svg';
import favoritesPageBlack from '../../assets/icons/favoritesPageBlack.svg';
import cartPageBlack from '../../assets/icons/cartPageBlack.svg';
import home from '../../assets/whiteIcons/home.svg';
import loupe from '../../assets/whiteIcons/Loupe.svg';
import hart from '../../assets/whiteIcons/hart.svg';
import cart from '../../assets/whiteIcons/cart.svg';

import chooseImageColor from '../../scripts/checkColorScheme';

const NavigationBar = props => {
	const { numberOfItemsInTheCart = 2 } = props;

	const routes = [
		{
			path: '/home',
			icon: homePageBlack,
			iconWhite: home,
		},
		{
			path: '/search',
			icon: searchPageBlack,
			iconWhite: loupe,
		},
		{
			path: '/favorites',
			icon: favoritesPageBlack,
			iconWhite: hart,
		},
		{
			path: '/cart',
			icon: cartPageBlack,
			iconWhite: cart,
			numberOfItemsInTheCart,
		},
	];

	const location = useLocation().pathname;

	const renderItems = routes.map((route, index) => {
		const { path, icon, iconWhite, numberOfItemsInTheCart } = route;

		const chooseClass = location.includes(path) ? style.active : '';

		return (
			<li key={index} className={`${style.item} ${chooseClass}`}>
				<NavLink to={path}>
					{numberOfItemsInTheCart && <span className={style.numberOfItemsInTheCart}>{numberOfItemsInTheCart}</span>}
					<img src={chooseImageColor(iconWhite, icon)} alt='home' />
				</NavLink>
			</li>
		);
	});

	return (
		<nav className={`${style.navigation} ${chooseImageColor(style.dark, '')}`}>
			<ul className={style.list}>{renderItems}</ul>
		</nav>
	);
};

export default NavigationBar;
