import style from './filtersMenu.module.scss';

import sort from '../../assets/icons/arrows.svg';
import filters from '../../assets/icons/filter.svg';
import gridBlack from '../../assets/icons/listTipe.svg';
import listBlack from '../../assets/icons/list.svg';

import filterArrow from '../../assets/whiteIcons/filterArrows.svg';
import filtersWhite from '../../assets/whiteIcons/filters.svg';
import gridWhite from '../../assets/whiteIcons/grid.svg';
import listWhite from '../../assets/whiteIcons/list.svg';

import sortArrowTopWhite from '../../assets/whiteIcons/sortArrowTop.svg';
import sortArrowBottomWhite from '../../assets/whiteIcons/sortArrowBottom.svg';
import sortArrowTopBlack from '../../assets/whiteIcons/sortArrowTop.svg';
import sortArrowBottomBlack from '../../assets/whiteIcons/sortArrowTop.svg';

import chooseImageColor from '../../scripts/checkColorScheme';

const FiltersMenu = props => {
	const { ProductsCount = 420, changeGirdMode, filtersAction, sortAction, grid, arrowPosition = 'bottom' } = props;

	const listTypeWhite = grid ? gridWhite : listWhite;
	const listTypeBlack = grid ? gridBlack : listBlack;

	const positions = {
		top: chooseImageColor(sortArrowTopWhite, sortArrowTopBlack),
		bottom: chooseImageColor(sortArrowBottomWhite, sortArrowBottomBlack),
		together: chooseImageColor(filterArrow, sort),
	};

	return (
		<div className={style.filters}>
			<div className={style.ProductsCount}>
				<span>{ProductsCount}</span> товаров
			</div>

			<ul className={style.actions}>
				<li className={style.action_item}>
					<button onClick={changeGirdMode} className={style.action}>
						<img src={chooseImageColor(listTypeWhite, listTypeBlack)} alt='list tipe btn' />
					</button>
				</li>
				<li className={style.action_item}>
					<button onClick={sortAction} className={style.action}>
						<img src={positions[arrowPosition] || positions.bottom} alt='btn' />
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
