import { Routes, Route } from 'react-router-dom';
import MainContainer from './Pages/Main/MainContainer';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<MainContainer />} />
			</Routes>
		</div>
	);
}

export default App;
