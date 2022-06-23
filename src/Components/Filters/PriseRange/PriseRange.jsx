import style from './priseRange.module.scss';

import { useEffect, useRef, useState } from 'react';
import Input from '../../../commons/Input/Input';

const PriseRange = props => {
	const [rangeState, setRangeState] = useState({
		maxGap: 500,
		valueMin: 1240,
		valueMax: 7200,
		trackMaxValue: 25000,
		trackMinValue: 1000,
		step: 10,
	});
	const { valueMin, valueMax, maxGap, trackMaxValue, trackMinValue, step } = rangeState;

	const changeMinValue = value => {
		if (valueMax - +value <= maxGap) return setRangeState({ ...rangeState, valueMin: valueMax - maxGap });
		setRangeState({ ...rangeState, valueMin: +value });
	};
	const changeMaxValue = value => {
		if (value - valueMin <= maxGap) return setRangeState({ ...rangeState, valueMax: valueMin + maxGap });
		setRangeState({ ...rangeState, valueMax: value });
	};

	const rangeTrack = useRef();
	const drowLine = () => {
		const percent1 = (valueMin / trackMaxValue) * 100;
		const percent2 = (valueMax / trackMaxValue) * 100;

		if (rangeTrack.current) {
			rangeTrack.current.style.background = `linear-gradient(to right, #BABABA ${percent1}% , #000 ${percent1}% , #000 ${percent2}%, #BABABA ${percent2}%)`;
		}
	};
	useEffect(() => {
		drowLine();
	}, [rangeTrack, rangeState]);

	return (
		<div className={style.prise_range}>
			<div className={style.priseWraper}>
				<Input className={style.prise} value={valueMin} type='number' submit={changeMinValue} />
				<span className={style.line}></span>
				<Input className={style.prise} value={valueMax} type='number' submit={changeMaxValue} />
			</div>

			<div className={style.range}>
				<div className={style.ranage_track} ref={rangeTrack}>
					<input
						type='range'
						value={valueMin}
						onChange={e => {
							changeMinValue(e.target.value);
						}}
						className={style.ranage_min}
						min={trackMinValue}
						max={trackMaxValue}
						step={step}
					/>
					<input
						type='range'
						value={valueMax}
						onChange={e => {
							changeMaxValue(e.target.value);
						}}
						className={style.ranage_max}
						min={trackMinValue}
						max={trackMaxValue}
						step={step}
					/>
				</div>
			</div>
		</div>
	);
};

export default PriseRange;
