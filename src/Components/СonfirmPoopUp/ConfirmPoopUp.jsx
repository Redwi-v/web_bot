import style from './confirmPoopUp.module.scss';
import greenCircle from '../../assets/icons/greenCircle.png';

import chooseImageColor from '../../scripts/checkColorScheme';

const ConfirmPoopUp = props => {
	const { open_close, isOpen } = props;

	if (!isOpen) return;
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
