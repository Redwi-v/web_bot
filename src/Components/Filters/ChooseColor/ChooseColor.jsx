import chooseImageColor from '../../../scripts/checkColorScheme';
import style from './chooseColor.module.scss';
const colorsTest = [
	{
		color: '#FF0000',
		inStock: true,
	},
	{
		color: '#00FF75',
		inStock: true,
	},
	{
		color: '#FFBCD6',
		inStock: true,
	},
	{
		color: '#FFFFFF',
		inStock: true,
	},
	{
		color: '#FAFF09',
		inStock: true,
	},
	{
		color: '#BF10EB',
		inStock: true,
	},
	{
		color: '#EE0F65',
		inStock: true,
	},
	{
		color: '#000',
		inStock: true,
	},
];
function ChooseColor(props) {
	const { colors = colorsTest, className, classInStock, cross, crossClass } = props;
	const { type = 'radio' } = props;

	const renderClolrs = colors.map(({ color, inStock }, index) => {
		const background = {
			background: color,
		};

		return (
			<div className={style.wraper} key={index}>
				<input
					className={`
					${chooseImageColor(style.dark, '')}
					${className}
					${style.color}
					${(inStock && classInStock) || style.inStock}
					`}
					disabled={!inStock}
					key={index}
					style={background}
					name='color'
					type={type}
				/>
				{!inStock && cross && <img className={crossClass} src={cross} alt='cross' />}
			</div>
		);
	});

	return <ul className={style.chooseColor}>{renderClolrs}</ul>;
}

export default ChooseColor;
