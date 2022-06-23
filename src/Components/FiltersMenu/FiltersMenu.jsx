import style from './filtersMenu.module.scss';
import sort from '../../assets/icons/arrows.png';
import filters from '../../assets/icons/filter.png';
import listTipe from '../../assets/icons/listTipe.png';

const FiltersMenu = props => {
	const { ProductsCount = 420, changeGirdMode, filtersAction, sortAction } = props;

	return (
		<div className={style.filters}>
			<div className={style.ProductsCount}>
				<span>{ProductsCount}</span> товаров
			</div>

			<ul className={style.actions}>
				<li className={style.action_item}>
					<button
						//remove later
						onClick={changeGirdMode}
						//----
						className={style.action}>
						<img src={listTipe} alt='list tipe btn' />
					</button>
				</li>
				<li className={style.action_item}>
					<button onClick={sortAction} className={style.action}>
						<img src={sort} alt=' btn' />
					</button>
				</li>
				<li className={style.action_item}>
					<button onClick={filtersAction} className={style.action}>
						<img src={filters} alt=' btn' />
					</button>
				</li>
			</ul>
		</div>
	);
};

export default FiltersMenu;
