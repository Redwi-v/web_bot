import style from './poopup.module.scss';

import crossIcon from '../../assets/icons/x.svg';

const PoopUp = porps => {
	const { isOpen, closePoopUp } = porps;

	const closeBtnID = 'closeBTN';

	if (!isOpen) return;

	return (
		<div onClick={closePoopUp} className={style.poopUp} id={closeBtnID}>
			<div className={`${style.window}`}>
				<button className={style.cross}>
					<img src={crossIcon} alt='cross' id={closeBtnID} />
				</button>
				{porps.element}
			</div>
		</div>
	);
};

export default PoopUp;
