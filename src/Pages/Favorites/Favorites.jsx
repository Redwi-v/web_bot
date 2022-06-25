import CartList from '../../Components/CartList/CartList';
import Header from '../../Components/Header/Header';
import style from './favorites.module.scss';
import greenCart from '../../assets/icons/greenCart.svg';

const Favorites = props => {
	return (
		<div className={style.favorites}>
			<Header title={'Избранное'} />
			<CartList footer={cartFooter} />
		</div>
	);
};

const cartFooter = prise => {
	return (
		<div className={style.footer}>
			<span className={style.prise}>{prise}</span>
			<button className={style.addProduct}>
				<img src={greenCart} alt='add in cart' />
			</button>
		</div>
	);
};

export default Favorites;
