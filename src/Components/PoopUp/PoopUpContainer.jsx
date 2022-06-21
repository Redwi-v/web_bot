import PoopUp from './PoopUp';
import { open_closePoopUp } from '../../redux/poopUp';
import { connect } from 'react-redux';

const PoopUpContainer = props => {
	const { open_closePoopUp } = props;

	const closePoopUp = event => {
		if (event.target.id === 'closeBTN') {
			open_closePoopUp();
		}
	};

	return <PoopUp {...props} closePoopUp={closePoopUp} />;
};

const mapStateToProps = state => {
	return {
		isOpen: state.poopUp.isOpen,
		element: state.poopUp.element,
	};
};

const Ul = () => {
	return (
		<ul>
			<li>hihi</li>
			<li>hihi</li>
			<li>hihi</li>
			<li>hihi</li>
			<li>hihi</li>
			<li>hihi</li>
			<li>hihi</li>
			<li>hihi</li>
		</ul>
	);
};

export default connect(mapStateToProps, { open_closePoopUp })(PoopUpContainer);
