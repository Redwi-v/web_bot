import style from './sort.module.scss';
import { NavLink } from 'react-router-dom';

const Sort = props => {
	return (
		<div className={style.sort}>
			<h1 className={style.title}>Сортировать</h1>
			<ul className={style.list}>
				<li className={style.item}>
					<NavLink to='#'>Цена - сначала дорогое</NavLink>
				</li>
				<li className={style.item}>
					<NavLink to='#'>Цена - сначала дешевое</NavLink>
				</li>
				<li className={style.item}>
					<NavLink to='#'>Цена - сначала по акции</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Sort;
