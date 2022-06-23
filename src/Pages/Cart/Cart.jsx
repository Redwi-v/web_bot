import Header from '../../Components/Header/Header';
import style from './cart.module.scss';

import productPrewew from '../../assets/Product.png';
import minus from '../../assets/icons/minus.svg';
import plus from '../../assets/icons/plus.svg';
import brus from '../../assets/icons/brush.svg';
import bigCart from '../../assets/icons/bigCart.png';

import Input from '../../commons/Input/Input';
import { useState } from 'react';
import PageNotFound from '../../Components/ProductsList/PageNotFound/PageNotFound';
import ProductsLIst from '../../Components/ProductsList/ProductsLIst';

const itemsTest = [
	{
		brand: 'Nike',
		subTitle: 'Air Force 1 Shadow Beige Pale Ivory',
		prewew: productPrewew,
		prise: '10 800',
	},
	{
		brand: 'Nike',
		subTitle: 'Air Force 1 Shadow Beige Pale Ivory',
		prewew: productPrewew,
		prise: '10 800',
	},
];

const Cart = props => {
	const { cartItems = itemsTest || [] } = props;

	const [text, setText] = useState({
		comment: '',
		promo: '',
	});
	console.log(text);
	const changeCommentText = e => {
		const newText = e.target.value;
		setText(newText);
	};
	const changePromoText = newText => {
		setText({ ...text, promo: newText });
	};

	//check cartItems
	const ChooseContent = () => {
		if (!cartItems.length) {
			return <PageNotFound anotherList={<ProductsLIst grid={true} />} image={bigCart} title={'Ваша корзина пуста'} />;
		}

		return (
			<div className=''>
				<ul className={style.list}>
					{cartItems.map((item, index) => {
						return <CartItem item={item} key={index} />;
					})}
				</ul>
				<textarea
					className={style.comments}
					onChange={changeCommentText}
					value={text.comment}
					placeholder='Комментарий...'
					type='textarea'
				/>
				<div className={style.calculate}>
					<div className={`${style.promo} ${style.flex}`}>
						<span>Промокод</span>
						<Input submit={changePromoText} className={style.promoInput} />
					</div>
					{text.promo && (
						<div className={`${style.flex} ${style.discount} `}>
							<span>Скидка</span>
							<span>15%</span>
						</div>
					)}
					<div className={`${style.delivery} ${style.flex}`}>
						<span>Доставка</span>
						<span>700₽</span>
					</div>
					<div className={`${style.total} ${style.flex}`}>
						<span>Итого</span>
						<span>22 300₽</span>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className={style.cart}>
			<Header title='Корзина' />

			{ChooseContent()}
		</div>
	);
};

const CartItem = ({ item }) => {
	const { brand, prise, subTitle, prewew } = item;

	return (
		<li className={style.item}>
			<button className={style.delete}>
				<img src={brus} alt='delete' />
			</button>

			<div className={style.prewew}>
				<img src={prewew} alt={brand} />
			</div>
			<div className={style.information}>
				<h2 className={style.brand}>{brand}</h2>
				<h3 className={style.subTitle}>{subTitle}</h3>

				<div className={style.calculation}>
					<div className={style.countAction}>
						<button className={style.button}>
							<img src={minus} alt='minus' />
						</button>
						<span className={style.count}>1</span>
						<button className={style.button}>
							<img src={plus} alt='minus' />
						</button>
					</div>
					<div className={style.prise}>{prise}</div>
				</div>
			</div>
		</li>
	);
};

export default Cart;
