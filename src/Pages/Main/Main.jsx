import style from './main.module.scss';

import Slider from '../../Components/Slider/Slider';
import FiltersMenu from '../../Components/FiltersMenu/FiltersMenu';
import ProductsList from '../../Components/ProductsList/ProductsLIst';
import Filters from '../../Components/Filters/Filters';
import Sort from '../../Components/SortForPoopUp/Sort';
import Header from '../../Components/Header/Header';

import { useParams } from 'react-router-dom';

const Main = porps => {
	const { products, changeGirdMode, girdMode, open_closePoopUp, setSortArrowPosition, sortArrowPosition } = porps;

	const openPoopUp = Components => {
		open_closePoopUp(<Filters />);
	};
	const openSortPoopUp = () => {
		open_closePoopUp(<Sort setSortArrowPosition={setSortArrowPosition} />);
	};

	const discounts = useParams().discount;
	const title = discounts && `${window.Telegram.WebApp.colorScheme} ${discounts.split('_')[1]}%`;

	const ChangeHeaderDiscout = () => {
		if (discounts) {
			return <Header title={title} backHre={'/home'} />;
		}

		return (
			<div className={style.header}>
				<h1 className={style.title}>ShopoBot</h1>
				<Slider />
			</div>
		);
	};

	return (
		<div className={`${style.main} container`}>
			<ChangeHeaderDiscout />
			<FiltersMenu
				grid={girdMode}
				filtersAction={openPoopUp}
				changeGirdMode={changeGirdMode}
				sortAction={openSortPoopUp}
				arrowPosition={sortArrowPosition}
			/>
			<ProductsList products={products} grid={girdMode} />
		</div>
	);
};

export default Main;
