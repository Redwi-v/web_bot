import style from './warningPoopUp.module.scss';
import remind from '../../assets/icons/remind.png';

const WarningPoopUP = ({ text, open }) => {
	if (!open) return;

	return (
		<div className={style.poopUP}>
			<img className={style.icon} src={remind} alt='remind' />
			<p className={style.text}>{text}</p>
		</div>
	);
};

export default WarningPoopUP;
