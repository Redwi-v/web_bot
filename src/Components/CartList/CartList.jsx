import style from './cartList.module.scss';
import minus from '../../assets/icons/minus.svg';
import plus from '../../assets/icons/plus.svg';
import brus from '../../assets/icons/brush.svg';
import productPrewew from '../../assets/Product.png';

import { NavLink } from 'react-router-dom';

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
const CartList = props => {
	const { footer, items = itemsTest || [] } = props;

	return (
		<div className={style.cartList}>
			{items.map((item, index) => {
				return <CartItem item={item} footer={footer} key={index} />;
			})}
		</div>
	);
};

const CartItem = ({ item, footer }) => {
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
				<NavLink to='/product/1'>
					<h2 className={style.brand}>{brand}</h2>
					<h3 className={style.subTitle}>{subTitle}</h3>
				</NavLink>

				{(footer && footer(prise)) || (
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
				)}
			</div>
		</li>
	);
};

export default CartList;
