import style from './main.module.scss';

import Slider from '../../Components/Slider/Slider';
import Filters from '../../Components/FiltersMenu/FiltersMenu';
import ProductsList from '../../Components/ProductsList/ProductsLIst';
import Filtes from '../../Components/Filters/Filters';

const Main = porps => {
	const { products, changeGirdMode, girdMode, open_closePoopUp } = porps;

	const openPoopUp = () => {
		open_closePoopUp(<Filtes />);
	};

	return (
		<div className={`${style.main} container`}>
			<h1 className={style.title}>ShopoBot</h1>
			<Slider />
			<Filters filtersAction={openPoopUp} changeGirdMode={changeGirdMode} />
			<ProductsList products={products} grid={girdMode} />
		</div>
	);
};

export default Main;
