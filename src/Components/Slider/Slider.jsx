import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlickSlider from 'react-slick';
import style from './slider.module.scss';
import sneakers from '../../assets/slide-sneakers.png';

const Slider = props => {
	const setings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dotsClass: `slick-dots ${style.dots}`,
		className: style.slider,
	};

	return (
		<div>
			<SlickSlider {...setings}>
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
			<div className={style.iamge}>
				<img src={sneakers} alt='sneakers' />
			</div>
		</div>
	);
};

export default Slider;
