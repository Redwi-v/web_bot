import style from './main.module.scss';
import Slider from '../../Components/Slider/Slider';
import Filters from '../../Components/Filters/Filters';
import ProductsList from '../../Components/ProductsList/ProductsLIst';

const Main = porps => {
	return (
		<div className={`${style.main} container`}>
			<h1 className={style.title}>ShopoBot</h1>
			<Slider />
			<Filters />
			<ProductsList />
		</div>
	);
};

export default Main;
