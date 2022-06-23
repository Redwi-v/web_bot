import { useState } from 'react';
import style from './filters.module.scss';
import PriseRange from './PriseRange/PriseRange';
import Accargion from './Accardion/Accardion';

function IsWidthDiscount(props) {
	const { label_1, label_2, name } = props;

	return (
		<div className={style.is_width_discount}>
			<form className={style.radioWraper}>
				<div className={style.radio}>
					<input className={style.radioСircle} type='radio' id={name + '1'} name={name} />
					<label className={style.label} htmlFor={name + '1'}>
						{label_1}
					</label>
				</div>
				<div className={style.radio}>
					<input className={style.radioСircle} type='radio' id={name} name={name} />
					<label className={style.label} htmlFor={name}>
						{label_2}
					</label>
				</div>
			</form>
		</div>
	);
}
function ChooseColor(props) {
	const colors = [
		{
			color: '#FF0000',
		},
		{
			color: '#00FF75',
		},
		{
			color: '#FFBCD6',
		},
		{
			color: '#FFFFFF',
		},
		{
			color: '#FAFF09',
		},
		{
			color: '#BF10EB',
		},
		{
			color: '#EE0F65',
		},
		{
			color: '#000',
		},
	];

	const renderClolrs = colors.map(({ color }, index) => {
		const background = {
			background: color,
		};

		return <input key={index} style={background} className={style.color} name='color' type='radio' />;
	});

	return <div className={style.chooseColor}>{renderClolrs}</div>;
}
function ChooseSize(props) {
	const sizes = [
		{
			size: 37,
			inStock: true,
		},
		{
			size: 38,
			inStock: false,
		},
		{
			size: 39,
			inStock: true,
		},
		{
			size: 'xxl',
			inStock: true,
		},
		{
			size: 'xl',
			inStock: false,
		},
		{
			size: 40,
			inStock: true,
		},
		{
			size: 41,
			inStock: true,
		},
		{
			size: 'l',
			inStock: true,
		},
	];

	const renderSizes = sizes.map(({ size, inStock }, index) => {
		return (
			<div className={style.size} key={index}>
				<input disabled={!inStock} className={style.sizeSquare} name='size' id={`color${size}`} type='radio' />
				<label className={`${style.label} ${inStock && style.inStock}`} htmlFor={`color${size}`}>
					{size}
				</label>
			</div>
		);
	});
	return <div className={style.chooseSize}>{renderSizes}</div>;
}

const items = [
	{
		title: 'Скидка',
		content: <IsWidthDiscount label_1='Со скидкой' label_2='Без скидки' name={'discount'} />,
	},
	{
		title: 'Цвет',
		content: <ChooseColor />,
	},
	{
		title: 'Размер',
		content: <ChooseSize />,
	},
	{
		title: 'Пол',
		content: <IsWidthDiscount label_1='Мужской' label_2='Женский' name={'sex'} />,
	},
];

const Filtes = props => {
	const [active, setActive] = useState('');

	const renderAccardion = items.map(({ title, content }, index) => {
		const isActive = active === title ? true : false;

		return (
			<Accargion
				key={index}
				active={isActive}
				title={title}
				content={content}
				onClick={() => {
					setActive(title);
				}}
			/>
		);
	});

	return (
		<div className={style.filters}>
			<h1 className={style.title}>Фильтры</h1>

			<h2 className={style.prise_title}>цена</h2>

			<PriseRange />

			<ul className={style.settings}>{renderAccardion}</ul>
		</div>
	);
};

export default Filtes;
