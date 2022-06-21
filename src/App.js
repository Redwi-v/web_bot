import { Routes, Route } from 'react-router-dom';
import MainContainer from './Pages/Main/MainContainer';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import PoopUpContainer from './Components/PoopUp/PoopUpContainer';

function App() {
	return (
		<div className='App'>
			<div className='AppInformation'>
				<Routes>
					<Route path='/' element={<MainContainer />} />
				</Routes>
			</div>
			<PoopUpContainer />
			<NavigationBar />
		</div>
	);
}

export default App;
