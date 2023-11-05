import SideBar from './components/SideBar';
import { Route, Routes } from 'react-router-dom';
import TableTennis from './pages/TableTennis';
import Home from './pages/Home';

function App() {
  return (
    <div className="flex h-screen">
      <div className="w-2/6">
        <SideBar />
      </div>

      <div className="w-full px-4 pt-4">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/table-tennis" element={<TableTennis />} />
          <Route path="/basketball" element={<TableTennis />} />
          <Route path="/tennis" element={<TableTennis />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
