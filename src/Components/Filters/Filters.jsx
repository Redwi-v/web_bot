import { useState } from 'react';
import style from './filters.module.scss';

const Filtes = props => {
	const [rangeState, setRangeState] = useState({
		ranage: 1,
		valueMin: 30,
		valueMax: 60,
	});
	const { valueMin, valueMax } = rangeState;

	const changeRange = (e, valueName) => {
		const value = e.target.valueAsNumber;
		setRangeState({ ...rangeState, [valueName]: value });
	};

	return (
		<div className={style.filters}>
			<div className={style.title}>Фильтры</div>

			{/* <input className={style.ranage} max='100' min='0' step='1' type='range' onChange={range} /> */}

			<div className={style.range}>
				<div className={style.ranage_track}>
					<input
						type='range'
						value={valueMin}
						onChange={e => {
							changeRange(e, 'valueMin');
						}}
						className={style.ranage_min}
						min='0'
						max='100'
						step='1'
					/>
					<input
						type='range'
						value={valueMax}
						onChange={e => {
							changeRange(e, 'valueMax');
						}}
						className={style.ranage_max}
						min='0'
						max='100'
						step='1'
					/>
				</div>
			</div>
		</div>
	);
};

export default Filtes;
