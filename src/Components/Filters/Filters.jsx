import { useState } from 'react';
import style from './filters.module.scss';
import PriseRange from './PriseRange/PriseRange';

const Filtes = props => {
	return (
		<div className={style.filters}>
			<h1 className={style.title}>Фильтры</h1>

			<h2 className={style.prise_title}>цена</h2>

			<PriseRange />

			<ul className={style.settings}>
				<li className={style.setting}>
					<Accargion />
				</li>
				<li className={style.setting}>
					<Accargion />
				</li>
			</ul>
		</div>
	);
};

const Accargion = props => {
	const [active, setActive] = useState(false);

	return (
		<div className={style.accardion}>
			<div
				onClick={() => {
					setActive(!active);
				}}
				className={style.header}>
				<div className={style.title}>hi open me</div>
				<span>⇓</span>
			</div>
			<div className={`${style.footer} ${active && style.active}`}>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero esse rerum, quae quod fugiat maiores alias,
					molestiae in molestias odit voluptatem consequatur omnis sint cumque, minus odio iusto temporibus iure!
				</p>
			</div>
		</div>
	);
};

export default Filtes;
