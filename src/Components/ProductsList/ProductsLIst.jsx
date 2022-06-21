import style from './productsList.module.scss';
import { NavLink } from 'react-router-dom';

import hartIcon from '../../assets/icons/hartIcon.png';
import ProductImage from '../../assets/Product.png';

const ProductsList = props => {
	const { listType } = props;

	return (
		<ul className={style.productsList}>
			<ProductsCard {...props} />
		</ul>
	);
};

const ProductsCard = props => {
	const {
		discount = 10,
		brand = 'Nike',
		name = 'Air Jordan 1 Retro High Obsidian UNC',
		dickription = 'Новая волна комфорта и стиля. Приподнятая подошва и многослойный верх ...',
		oldPrise = '24 900',
		prise = '16 200',
	} = props;

	return (
		<li className={style.card}>
			{/* {Проверка на скидку} */}
			{discount && <div className={style.discount}>{discount}%</div>}
			<button className={style.AddToFavoritesBtn}>
				<img src={hartIcon} alt='Add To Favorites Btn' />
			</button>
			<NavLink to='/product/:id'>
				<div className={style.header}>
					<div className={style.previewImage}>
						<img src={ProductImage} alt='previewImage' />
					</div>
				</div>
				<div className={style.footer}>
					<div className={style.brand}>{brand}</div>
					<div className={style.name}>{name}</div>
					<p className={style.dickription}>{dickription}</p>

					<div className={style.priseWraper}>
						{oldPrise && <div className={style.OldPrise}>{oldPrise}</div>}
						<div className={style.prise}>{prise}</div>
					</div>
				</div>
			</NavLink>
		</li>
	);
};

export default ProductsList;
