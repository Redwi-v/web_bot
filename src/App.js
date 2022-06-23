import { Routes, Route, Navigate } from 'react-router-dom';
import MainContainer from './Pages/Main/MainContainer';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import PoopUpContainer from './Components/PoopUp/PoopUpContainer';
import SearchContainer from './Pages/Search/SearchContainer';

function App() {
	return (
		<div className='App'>
			<div className='AppInformation'>
				<Routes>
					<Route path='/home' element={<MainContainer />} />
					<Route path='home/:discount' element={<MainContainer />} />

					<Route path='/search' element={<SearchContainer />} />
					<Route path='/search/:find' element={<SearchContainer />} />

					<Route path='*' element={<Navigate to='/home' replace={true} />} />
				</Routes>
			</div>
			<PoopUpContainer />
			<NavigationBar />
		</div>
	);
}

export default App;
