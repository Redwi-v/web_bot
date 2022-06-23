import { useState } from 'react';
import Main from './Main';
import { connect } from 'react-redux';
import { open_closePoopUp } from '../../redux/poopUp';

// remove later

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
		/>
	);
};

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, { open_closePoopUp })(MainContainer);
