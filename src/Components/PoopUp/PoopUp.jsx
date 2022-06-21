import style from './poopup.module.scss';

const PoopUp = porps => {
	const { isOpen, closePoopUp } = porps;

	const closeBtnID = 'closeBTN';

	if (!isOpen) return;
	return (
		<div onClick={closePoopUp} className={style.poopUp} id={closeBtnID}>
			<div className={`${style.window} container`}>{porps.element}</div>
		</div>
	);
};

export default PoopUp;
