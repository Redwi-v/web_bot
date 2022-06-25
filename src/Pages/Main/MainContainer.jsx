import { useState } from 'react';
import Main from './Main';
import { connect } from 'react-redux';
import { open_closePoopUp } from '../../redux/poopUp';

// remove later

const MainContainer = props => {
	const { open_closePoopUp } = props;

	const [filterMenu, setfilterMenu] = useState({
		grid: false,
		sortArrowPosition: '', //top , bottom / togeter === ''
	});
	const changeGirdMode = () => {
		setfilterMenu({ ...filterMenu, grid: !filterMenu.grid });
	};
	const setSortArrowPosition = position => {
		setfilterMenu({ ...filterMenu, sortArrowPosition: position });
		open_closePoopUp();
	};

	return (
		<Main
			{...props}
			//For Test
			gridMode={filterMenu.grid}
			changeGirdMode={changeGirdMode}
			setSortArrowPosition={setSortArrowPosition}
			sortArrowPosition={filterMenu.sortArrowPosition}
		/>
	);
};

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, { open_closePoopUp })(MainContainer);
