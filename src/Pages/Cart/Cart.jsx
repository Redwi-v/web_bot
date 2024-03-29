import style from './cart.module.scss';
import Header from '../../Components/Header/Header';

import bigCart from '../../assets/icons/bigCart.svg';

import Input from '../../commons/Input/Input';
import { useState } from 'react';
import PageNotFound from '../../Components/ProductsList/PageNotFound/PageNotFound';
import ProductsLIst from '../../Components/ProductsList/ProductsLIst';
import CartList from '../../Components/CartList/CartList';
import СonfirmPoopUp from '../../Components/СonfirmPoopUp/ConfirmPoopUp';
import addTelegramBtn from '../../scripts/addTelegramBtn';

const Cart = props => {
	const { cartItems = [1] } = props;

	const [text, setText] = useState({
		comment: '',
		promo: '',
		isConfirm: true,
	});

	const confirm = () => {
		setText({ ...text, isConfirm: !text.isConfirm });
	};

	addTelegramBtn('Сделать заказ', confirm);

	const changeCommentText = e => {
		const newText = e.target.value;
		setText({ ...text, comment: newText });
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
				<CartList />
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
						<div className={` ${style.discount} `}>
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
			<СonfirmPoopUp open_close={confirm} isOpen={text.isConfirm} />

			<Header title='Корзина' />

			{ChooseContent()}
		</div>
	);
};

export default Cart;
