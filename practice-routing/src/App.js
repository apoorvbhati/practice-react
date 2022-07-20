import { Routes, Route } from 'react-router';

import Home from './pages/home.component';
import About from './pages/about.component';
import Navigation from './components/navigation.component';
import Invoices from './pages/invoices.component';
import Expenses from './pages/expenses.component';
import FeaturedProducts from './pages/Featured-Components/feautured-components';
import Product from './pages/Product/product.component';

import './App.css';

function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<Navigation />} >
        <Route path='home/*' element={<Home />} />
        <Route path='about' element={<About />} />
      </Route> */}
      {/* <Route path='/invoices' element={<Invoices />} />
      <Route path='/expenses' element={<Expenses />} /> */}
      <Route path='/' element={<FeaturedProducts />} />
      <Route path='/product/:id' element={<Product />} />
    </Routes>
  );
}

export default App;
