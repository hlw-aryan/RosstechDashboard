import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import BuyProducts from './pages/BuyProducts';
import SellProducts from './pages/SellProducts';
import History from './pages/History';
import Contacts from './pages/Contacts';
import Users from './pages/Users';
import { Settings } from './pages/Settings';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buyproducts" element={<BuyProducts />} />
      <Route path="/sellproducts" element={<SellProducts />} />
      <Route path="/history" element={<History />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/users" element={<Users />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
