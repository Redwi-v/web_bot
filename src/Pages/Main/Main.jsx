import style from './main.module.scss';
import Slider from '../../Components/Slider/Slider';
import Filters from '../../Components/Filters/Filters';
import ProductsList from '../../Components/ProductsList/ProductsLIst';

const Main = porps => {
	const { products, changeGirdMode, girdMode } = porps;

	return (
		<div className={`${style.main} container`}>
			<h1 className={style.title}>ShopoBot</h1>
			<Slider />
			<Filters changeGirdMode={changeGirdMode} />
			<ProductsList products={products} grid={girdMode} />
		</div>
	);
};

export default Main;
