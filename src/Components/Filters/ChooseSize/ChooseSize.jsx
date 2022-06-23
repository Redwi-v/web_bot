import style from './chooseSize.module.scss';
function ChooseSize(props) {
	const sizesTest = [
		{
			size: 37,
			inStock: true,
		},
		{
			size: 38,
			inStock: false,
		},
		{
			size: 39,
			inStock: true,
		},
		{
			size: 'xxl',
			inStock: true,
		},
		{
			size: 'xl',
			inStock: false,
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
			size: 'l',
			inStock: true,
		},
	];

	const { sizes = sizesTest } = props;

	const renderSizes = sizes.map(({ size, inStock }, index) => {
		return (
			<div className={style.size} key={index}>
				<input disabled={!inStock} className={style.sizeSquare} name='size' id={`color${size}`} type='radio' />
				<label className={`${style.label} ${inStock && style.inStock}`} htmlFor={`color${size}`}>
					{size}
				</label>
			</div>
		);
	});
	return <div className={style.chooseSize}>{renderSizes}</div>;
}

export default ChooseSize;
