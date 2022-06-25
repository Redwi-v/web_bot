import style from './confirmPoopUp.module.scss';
import greenCircle from '../../assets/icons/greenCircle.png';
import { useState } from 'react';

import chooseImageColor from '../../scripts/checkColorScheme';

const ConfirmPoopUp = props => {
	const { isOpen = false } = props;

	const [StateIsOpne, setIsOpne] = useState(isOpen);

	if (!StateIsOpne) return;

	const open_close = e => {
		setIsOpne(!setIsOpne);
	};

	return (
		<div onClick={open_close} className={style.confirmPoopUP}>
			<div className={`${style.window} ${chooseImageColor(style.dark, '')}`}>
				<div className={style.image}>
					<img src={greenCircle} alt='confirm img' />
				</div>
				<h1>Заказ сформирован</h1>
				<p>Сверните приложение для подтверждения заказа</p>
				<button onClick={open_close}>Свернуть</button>
			</div>
		</div>
	);
};

export default ConfirmPoopUp;
