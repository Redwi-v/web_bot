import style from './warningPoopUp.module.scss';
import remind from '../../assets/icons/remind.svg';
import bellWhite from '../../assets/whiteIcons/bell.svg';
import chooseImageColor from '../../scripts/checkColorScheme';

const WarningPoopUP = ({ text, open }) => {
	if (!open) return;

	return (
		<div className={`${style.poopUP} ${chooseImageColor(style.dark, '')}`}>
			<img className={style.icon} src={chooseImageColor(bellWhite, remind)} alt='remind' />
			<p className={style.text}>{text}</p>
		</div>
	);
};

export default WarningPoopUP;
