import style from './main.module.scss';

import Slider from '../../Components/Slider/Slider';
import Filters from '../../Components/Filters/Filters';
import ProductsList from '../../Components/ProductsList/ProductsLIst';

const Test = () => {
	return (
		<ul>
			<li>Test</li>
			<li>Test</li>
			<li>Test</li>
			<li>Test</li>
			<li>Test</li>
			<li>Test</li>
			<li>Test</li>
		</ul>
	);
};

const Main = porps => {
	const { products, changeGirdMode, girdMode, open_closePoopUp } = porps;

	const openPoopUp = () => {
		open_closePoopUp(<Test />);
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
