import style from './chooseSize.module.scss';
function ChooseSize(props) {
	const { type = 'radio' } = props;

	const sizesTest = [
		{
			size: 37,
			inStock: true,
		},
		{
			size: 38,
			inStock: true,
		},
		{
			size: 39,
			inStock: true,
		},
		{
			size: 40,
			inStock: true,
		},
		{
			size: 41,
			inStock: true,
		},
		{
			size: 42,
			inStock: true,
		},
		{
			size: 42,
			inStock: true,
		},
	];

	const { sizes = sizesTest } = props;

	const renderSizes = sizes.map(({ size, inStock }, index) => {
		return (
			<div className={style.size} key={index}>
				<input disabled={!inStock} className={style.sizeSquare} name='size' id={`color${size}`} type={type} />
				<label className={`${style.label} ${inStock && style.inStock}`} htmlFor={`color${size}`}>
					{size}
				</label>
			</div>
		);
	});
	return <div className={style.chooseSize}>{renderSizes}</div>;
}

export default ChooseSize;
