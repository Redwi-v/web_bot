import style from './poopup.module.scss';

import crossIcon from '../../assets/icons/x.svg';
import crossWhite from '../../assets/whiteIcons/cross.svg';

import chooseImageColor from '../../scripts/checkColorScheme';

const PoopUp = porps => {
	const { isOpen, closePoopUp } = porps;

	const closeBtnID = 'closeBTN';

	return (
		<div onClick={closePoopUp} className={`${style.poopUp} ${isOpen && style.open}`} id={closeBtnID}>
			<div className={`${style.window} ${chooseImageColor(style.dark, '')}`}>
				<button className={style.cross}>
					<img src={chooseImageColor(crossWhite, crossIcon)} alt='cross' id={closeBtnID} />
				</button>
				{porps.element}
			</div>
		</div>
	);
};

export default PoopUp;
