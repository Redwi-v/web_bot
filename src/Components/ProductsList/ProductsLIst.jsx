import style from './productsList.module.scss';
import { NavLink } from 'react-router-dom';

import hartIcon from '../../assets/icons/hartIcon.png';

const ProductsList = props => {
	const { grid = false, products = [] } = props;

	// Render Products
	const renderedProducts = products.map(product => {
		return <ProductsCard grid={grid} key={product.id} {...product} />;
	});

	return <ul className={`${style.productsList} ${grid && style.grid}`}>{renderedProducts}</ul>;
};

const ProductsCard = props => {
	const { discount, brand, name, dickription, oldPrise, prise, previewImage, grid, id } = props;

	return (
		<li className={`${style.card} ${grid && style.grid}`}>
			{/* {Проверка на скидку} */}
			{discount && <div className={style.discount}>{discount}%</div>}
			<button className={style.AddToFavoritesBtn}>
				<img src={hartIcon} alt='Add To Favorites Btn' />
			</button>
			<NavLink to={`/product/${id}`}>
				<div className={style.header}>
					<div className={style.previewImage}>
						<img src={previewImage} alt='previewImage' />
					</div>
				</div>
				<div className={style.footer}>
					<div className={style.brand}>{brand}</div>
					<div className={style.name}>{name}</div>
					<p className={style.dickription}>{dickription}</p>

					<div className={style.priseWraper}>
						{oldPrise && <div className={style.OldPrise}>{oldPrise}₽</div>}
						<div className={style.prise}>{prise} ₽</div>
					</div>
				</div>
			</NavLink>
		</li>
	);
};

export default ProductsList;
