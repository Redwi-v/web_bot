import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlickSlider from 'react-slick';
import style from './slider.module.scss';

const dots = dots => {
	return (
		<div>
			<ul className={style.dots}> {dots} </ul>
		</div>
	);
};

const Slider = props => {
	const setings = {
		dots: true,
		appendDots: dots,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};

	return (
		<div className={style.slider}>
			<SlickSlider className={style.slick_slider} {...setings}>
				<Slide index={1} />
				<Slide index={2} />
				<Slide index={3} />
			</SlickSlider>
		</div>
	);
};

const Slide = props => {
	const { index } = props;

	return (
		<div className={style.slide}>
			<h2 className={style.slide_title}>{`Скидки до  ${index}0% `}</h2>
			<h3 className={style.slide_subtitle}>На всю продукцию бренда Nike</h3>
		</div>
	);
};

export default Slider;
