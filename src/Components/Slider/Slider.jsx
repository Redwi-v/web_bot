import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlickSlider from 'react-slick';
import style from './slider.module.scss';
import sneakers from '../../assets/slide-sneakers.png';
import { NavLink } from 'react-router-dom';

import prevArrow from '../../assets/icons/sliderArrowLeft.svg';
import nextArrow from '../../assets/icons/sliderArrowRight.svg';
import { useState } from 'react';

const PrevArrow = props => {
	const { onClick } = props;
	return (
		<div onClick={onClick} className={`${style.arrowPrev} ${style.arrow}`}>
			<img src={prevArrow} alt='preArrow' />
		</div>
	);
};
const NextArrow = props => {
	const { onClick } = props;
	return (
		<div onClick={onClick} className={`${style.arrowNext} ${style.arrow}`}>
			<img src={nextArrow} alt='preArrow' />
		</div>
	);
};

const Slider = props => {
	const [activeSlide, seActiveSlide] = useState(0);

	const setings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: false,
		dotsClass: `slick-dots ${style.dots}`,
		className: style.slider,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		beforeChange: (current, next) => seActiveSlide(next),
		customPaging: i => {
			return <div className={`${style.dot} ${i === activeSlide && style.active}`}></div>;
		},
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
		<NavLink to={`/home/discount_${index}0`} className={style.slide}>
			<h2 className={style.slide_title}>{`Скидки до  ${index}0% `}</h2>
			<h3 className={style.slide_subtitle}>На всю продукцию бренда Nike</h3>
			<div className={style.iamge}>
				<img src={sneakers} alt='sneakers' />
			</div>
		</NavLink>
	);
};

export default Slider;
