import style from './main.module.scss';
import Slider from '../../Components/Slider/Slider';

const Main = porps => {
	return (
		<div className={`${style.main} container`}>
			<h1 className={style.title}>ShopoBot</h1>
			<Slider />
		</div>
	);
};

export default Main;
