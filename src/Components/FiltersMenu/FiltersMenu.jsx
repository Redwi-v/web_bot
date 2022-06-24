import style from './filtersMenu.module.scss';
import sort from '../../assets/icons/arrows.svg';
import filters from '../../assets/icons/filter.svg';
import listTipe from '../../assets/icons/listTipe.svg';

import filterArrow from '../../assets/whiteIcons/filterArrows.svg';
import filtersWhite from '../../assets/whiteIcons/filters.svg';
import grid from '../../assets/whiteIcons/grid.svg';

import chooseImageColor from '../../scripts/checkColorScheme';

const FiltersMenu = props => {
	const { ProductsCount = 420, changeGirdMode, filtersAction, sortAction } = props;

	return (
		<div className={style.filters}>
			<div className={style.ProductsCount}>
				<span>{ProductsCount}</span> товаров
			</div>

			<ul className={style.actions}>
				<li className={style.action_item}>
					<button onClick={changeGirdMode} className={style.action}>
						<img src={chooseImageColor(grid, listTipe)} alt='list tipe btn' />
					</button>
				</li>
				<li className={style.action_item}>
					<button onClick={sortAction} className={style.action}>
						<img src={chooseImageColor(filterArrow, sort)} alt='btn' />
					</button>
				</li>
				<li className={style.action_item}>
					<button onClick={filtersAction} className={style.action}>
						<img src={chooseImageColor(filtersWhite, filters)} alt=' btn' />
					</button>
				</li>
			</ul>
		</div>
	);
};

export default FiltersMenu;
