import { useState } from 'react';
import style from './filters.module.scss';
import PriseRange from './PriseRange/PriseRange';
import Accargion from './Accardion/Accardion';
import ChooseColor from './ChooseColor/ChooseColor';
import ChooseSize from './ChooseSize/ChooseSize';

const items = [
	{
		title: 'Скидка',
		content: <IsWidthDiscount label_1='Со скидкой' label_2='Без скидки' name={'discount'} />,
	},
	{
		title: 'Цвет',
		content: <ChooseColor type='checkbox' />,
	},
	{
		title: 'Размер',
		content: <ChooseSize type='checkbox' />,
	},
	{
		title: 'Пол',
		content: <IsWidthDiscount label_1='Мужской' label_2='Женский' name={'sex'} />,
	},
];

const Filtes = props => {
	const [active, setActive] = useState([]);

	const renderAccardion = items.map(({ title, content }, index) => {
		const isActive = active.includes(title) ? true : false;
		const newValue = [...active];
		isActive ? newValue.splice(newValue.indexOf(title), 1) : newValue.push(title);

		return (
			<Accargion
				key={index}
				active={isActive}
				title={title}
				content={content}
				onClick={() => {
					setActive(newValue);
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

export default Filtes;
