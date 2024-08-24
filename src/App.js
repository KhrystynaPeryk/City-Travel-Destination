import { Route, Routes  } from 'react-router-dom';
import CityDetail from "./components/CityDetail";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='city/:path' element={<CityDetail />} />
    </Routes>
  );
}

export default App;
