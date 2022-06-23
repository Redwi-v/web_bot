import style from './header.module.scss';
import backArrow from '../../assets/icons/backArrow.png';
import { NavLink } from 'react-router-dom';

const Header = props => {
	const { title, backHref } = props;

	return (
		<NavLink to={backHref || '/'} className={style.backHeader}>
			<img className={style.backArrow} src={backArrow} alt='back' />
			<h1 className={style.backTitle}>{title}</h1>
		</NavLink>
	);
};

export default Header;
