import { useState } from 'react';
import Main from './Main';
import ProductImage from '../../assets/Product.png';

// remove later
const productsTestArray = [
	{
		previewImage: ProductImage,
		id: 1,
		discount: 10,
		brand: 'Nike',
		name: 'Air Jordan 1 Retro High Obsidian UNC',
		dickription: 'Новая волна комфорта и стиля. Приподнятая подошва и многослойный верх ...',
		oldPrise: '24 900',
		prise: '16 200',
	},
	{
		previewImage: ProductImage,
		id: 2,
		discount: null,
		brand: 'Nike',
		name: 'Air Jordan 1 Retro High Obsidian UNC',
		dickription: 'Новая волна комфорта и стиля. Приподнятая подошва и многослойный верх ...',
		oldPrise: null,
		prise: '16 200',
	},
	{
		previewImage: ProductImage,
		id: 3,
		discount: 15,
		brand: 'Nike',
		name: 'Air Jordan 1 Retro High Obsidian UNC',
		dickription: 'Новая волна комфорта и стиля. Приподнятая подошва и многослойный верх ...',
		oldPrise: '24 900',
		prise: '16 200',
	},
	{
		previewImage: ProductImage,
		id: 4,
		discount: 15,
		brand: 'Nike',
		name: 'Air Jordan 1 Retro High Obsidian UNC',
		dickription: 'Новая волна комфорта и стиля. Приподнятая подошва и многослойный верх ...',
		oldPrise: '24 900',
		prise: '16 200',
	},
	{
		previewImage: ProductImage,
		id: 5,
		discount: 15,
		brand: 'Nike',
		name: 'Air Jordan 1 Retro High Obsidian UNC',
		dickription: 'Новая волна комфорта и стиля. Приподнятая подошва и многослойный верх ...',
		oldPrise: '24 900',
		prise: '16 200',
	},
];

const MainContainer = props => {
	//For Test -- Remove later -------------------------
	const [gridMode, setGridMode] = useState({
		gird: false,
	});
	const changeGirdMode = () => {
		setGridMode({ ...gridMode, gird: !gridMode.gird });
	};
	//----------------------------------------------------------

	return (
		<Main
			{...props}
			//For Test
			girdMode={gridMode.gird}
			changeGirdMode={changeGirdMode}
			products={productsTestArray}
		/>
	);
};

export default MainContainer;
