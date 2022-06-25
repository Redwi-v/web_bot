import style from './product.module.scss';

import product1 from '../../assets/Product.png';
import product2 from '../../assets/productTest.png';
import product3 from '../../assets/slide-sneakers.png';
import product4 from '../../assets/shoe.png';

import line from '../../assets/icons/line.svg';
import blackHartIcon from '../../assets/icons/blackHartIcon.svg';
import backArrow from '../../assets/icons/backArrow.svg';
import backArrowWhite from '../../assets/whiteIcons/backArrow.svg';
import whiteHart from '../../assets/whiteIcons/hartIcon.svg';
import cross from '../../assets/whiteIcons/cross.svg';

import SlickSlider from 'react-slick';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ChooseColor from '../../Components/Filters/ChooseColor/ChooseColor';
import ChooseSize from '../../Components/Filters/ChooseSize/ChooseSize';
import { useNavigate } from 'react-router-dom';
import WarningPoopUP from '../../Components/WarningPoopUp/WarningPoopUp';
import chooseImageColor from '../../scripts/checkColorScheme';

const Cross = ({ action }) => {
	return <img onClick={action} src={cross} className={style.crossAllScrin} />;
};

const productTest = {
	prewew: [product4, product1, product2, product3],
	brand: 'Adidas',
	prise: '10 800',
	subTitle: 'Originals Ozweego trainers in meta',
	tag: 'Кроссовки',
	discription: `Новая волна комфорта и стиля. Приподнятая подошва и многослойный верх напоминают о бунтарской андеграундной культуре.
Многослойная конструкция придает легендарной баскетбольной модели уникальный вид, а роскошное сочетание мягкой синтетической замши и блестящей кожи создает конструкция придает легендарной баскетбольной модели уникальный вид, а роскошное сочетание мягкой синтетической замши и блестящей кожи создает`,
	colors: [
		{
			color: '#FF0000',
			inStock: true,
		},
		{
			color: '#00FF75',
			inStock: false,
		},
		{
			color: '#FFBCD6',
			inStock: true,
		},
		{
			color: '#fff',
			inStock: true,
		},
	],

	sizes: [
		{
			size: 38,
			inStock: false,
		},
		{
			size: 39,
			inStock: true,
		},
		{
			size: 41,
			inStock: true,
		},
		{
			size: 42,
			inStock: true,
		},
		{
			size: 43,
			inStock: true,
		},
		{
			size: 44,
			inStock: true,
		},
	],
};

const Product = props => {
	const { product = productTest } = props;
	const { prewew, brand, prise, subTitle, tag, discription, colors, sizes } = product;
	const maxDiscriptionLength = 200;

	const [state, setState] = useState({
		moreMode: false,
		allScrinSliderOpen: false,
	});

	const openAllScreenSlider = () => {
		setState({ ...state, allScrinSliderOpen: !state.allScrinSliderOpen });
	};

	const cutDiscription = (() => {
		return discription.length > maxDiscriptionLength && state.moreMode
			? discription
			: discription.substr(0, maxDiscriptionLength) + '...';
	})();

	const navigate = useNavigate();

	return (
		<div className={style.product}>
			<div className={style.prewew}>
				<div className={style.icons}>
					<img
						className={style.backArrow}
						onClick={() => navigate(-1)}
						src={chooseImageColor(backArrowWhite, backArrow)}
						alt='backArrow'
					/>
					<img className={style.favoritеIcon} src={chooseImageColor(whiteHart, blackHartIcon)} alt='favoritеIcon' />
				</div>
				{<PrewewSlider prewew={prewew} onClick={openAllScreenSlider} />}

				{/* all screen slider */}
				{
					<div className={`${style.allScreen} ${state.allScrinSliderOpen && style.active}`}>
						<Cross
							action={() => {
								openAllScreenSlider();
							}}
						/>
						<PrewewSlider prewew={prewew} />
					</div>
				}
			</div>
			<div className={style.mainInfo}>
				<h1 className={style.brand}>{brand}</h1>
				<div className={style.prise}>{prise}₽</div>
			</div>

			{subTitle && <h2 className={style.subTitle}>{subTitle}</h2>}

			{tag && (
				<NavLink className={style.tag} to={`/search/${tag}`}>
					{tag}
				</NavLink>
			)}

			<p className={style.discription}>{cutDiscription}</p>
			<button
				onClick={() => {
					setState({ ...state, moreMode: !state.moreMode });
				}}
				className={style.more}>
				{state.moreMode ? 'Скрыть' : 'Подробнее'}
			</button>

			<h2 className={style.chooseTitle}>Цвет</h2>
			<ChooseColor
				className={style.color}
				classInStock={style.inStock}
				colors={colors}
				cross={line}
				crossClass={style.cross}
			/>
			<h2 className={style.chooseTitle}>Размер</h2>
			<ChooseSize sizes={sizes} />

			<WarningPoopUP open={true} text='Выберите размер' />
		</div>
	);
};

// ------------- slider
const PrewewSlider = props => {
	const { prewew, onClick } = props;

	const [activeSlide, setActiveSlide] = useState(0);

	const customPaging = i => {
		const img = prewew[i];
		const active = i === activeSlide ? style.active : '';

		return (
			<div className={style.page}>
				<img className={`${style.image} ${active}`} src={img} alt='pagination' />
			</div>
		);
	};

	const setings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dotsClass: `slick-dots ${style.dots}`,
		customPaging: customPaging,
		className: style.slider,
		beforeChange: (current, next) => setActiveSlide(next),
	};

	return (
		<div>
			<SlickSlider {...setings}>
				{prewew.map((img, index) => {
					return <Slide activeSlide={activeSlide} img={img} key={index} onClick={onClick} />;
				})}
			</SlickSlider>
		</div>
	);
};

const Slide = props => {
	const { img, onClick, activeSlide } = props;

	return (
		<div
			onClick={() => {
				if (onClick) {
					onClick(activeSlide);
				}
			}}
			className={style.slide}>
			<div className={style.iamge}>
				<img src={img} alt='product' />
			</div>
		</div>
	);
};

export default Product;
