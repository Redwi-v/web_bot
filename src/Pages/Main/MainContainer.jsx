import { useState } from 'react';
import Main from './Main';
import { connect } from 'react-redux';
import { open_closePoopUp } from '../../redux/poopUp';

// remove later

const MainContainer = props => {
	const { open_closePoopUp } = props;

	const [filterMenu, setfilterMenu] = useState({
		gird: false,
		sortArrowPosition: '', //top , bottom / togeter === ''
	});
	const changeGirdMode = () => {
		setfilterMenu({ ...filterMenu, gird: !setfilterMenu.gird });
	};
	const setSortArrowPosition = position => {
		setfilterMenu({ ...filterMenu, sortArrowPosition: position });
		open_closePoopUp();
	};

	return (
		<Main
			{...props}
			//For Test
			girdMode={filterMenu.gird}
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
