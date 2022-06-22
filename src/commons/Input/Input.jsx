import { useEffect, useState } from 'react';

const Input = props => {
	const { submit, value, className, type } = props;

	const [state, setState] = useState({
		value,
	});

	const onBlur = () => {
		submit && submit(state.value);
	};

	const changeValue = value => {
		setState({ ...state, value });
	};
	useEffect(() => {
		changeValue(value);
	}, [value]);

	return (
		<input
			className={className}
			onBlur={onBlur}
			value={state.value}
			onChange={e => {
				changeValue(e.target.value);
			}}
			type={type}
		/>
	);
};

export default Input;
