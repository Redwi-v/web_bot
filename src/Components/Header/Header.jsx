import style from './header.module.scss';
import backArrow from '../../assets/icons/backArrow.png';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = props => {
	const { title, backHref } = props;

	const navigate = useNavigate();

	return (
		<button onClick={() => navigate(-1)} className={style.backHeader}>
			<img className={style.backArrow} src={backArrow} alt='back' />
			<h1 className={style.backTitle}>{title}</h1>
		</button>
	);
};

export default Header;
