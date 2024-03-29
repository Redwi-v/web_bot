import style from './accardion.module.scss';
import arrowButton from '../../../assets/icons/arrowButton.svg';
import arrowButtonWhite from '../../../assets/whiteIcons/buttonArrow.svg';

import chooseImageColor from '../../../scripts/checkColorScheme';

const Accargion = props => {
	const { active, onClick, content, title } = props;

	return (
		<li className={style.setting}>
			<div className={style.accardion}>
				<div onClick={onClick} className={style.header}>
					<div className={style.title}>{title}</div>
					<div className={`${style.arrowButton} ${active && style.arrowActive}`}>
						<img src={chooseImageColor(arrowButtonWhite, arrowButton)} alt='arrow Button' />
					</div>
				</div>
				<div className={`${style.footer} ${active && style.active}`}>{content}</div>
			</div>
		</li>
	);
};

export default Accargion;
