import style from './sort.module.scss';
import { NavLink } from 'react-router-dom';

const Sort = props => {
	const { setSortArrowPosition } = props;

	return (
		<div className={style.sort}>
			<h1 className={style.title}>Сортировать</h1>
			<ul className={style.list}>
				<li className={style.item}>
					<button
						onClick={() => {
							setSortArrowPosition('bottom');
						}}>
						Цена - сначала дорогое
					</button>
				</li>
				<li className={style.item}>
					<button
						onClick={() => {
							setSortArrowPosition('top');
						}}>
						Цена - сначала дешевое
					</button>
				</li>
				<li className={style.item}>
					<button
						onClick={() => {
							setSortArrowPosition('top');
						}}>
						Цена - сначала по акции
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Sort;
