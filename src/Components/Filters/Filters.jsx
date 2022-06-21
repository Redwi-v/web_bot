import style from './filters.module.scss';
import arrows from '../../assets/icons/arrows.png';
import filters from '../../assets/icons/filter.png';
import listTipe from '../../assets/icons/listTipe.png';

const Filters = props => {
	const { ProductsCount = 420 } = props;

	return (
		<div className={style.filters}>
			<div className={style.ProductsCount}>
				<span>{ProductsCount}</span> товаров
			</div>

			<ul className={style.actions}>
				<li className={style.action_item}>
					<button className={style.action}>
						<img src={listTipe} alt='list tipe btn' />
					</button>
				</li>
				<li className={style.action_item}>
					<button className={style.action}>
						<img src={arrows} alt=' btn' />
					</button>
				</li>
				<li className={style.action_item}>
					<button className={style.action}>
						<img src={filters} alt=' btn' />
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Filters;
