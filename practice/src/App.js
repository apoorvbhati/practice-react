import Axios from './Axios/Axios';
import { Route, Routes } from 'react-router';
import { Fragment } from 'react';

import Navigation from './components/NavigationBar.component';

import './App.css';
import Home from './pages/Home.pages';
// import Counter from './pages/Counter';
import ShopList from './components/shopList/shopList';
import Posts from './components/custom_hook/Posts.component';
import Students from './components/Student/Students.component';
import Counter from './components/custom_hook/Counter/counter.component';

function App() {
  return (
    // <Axios />
    // <Fragment>
    //   <Navigation />
    //   <Routes>
    //     <Route path='/' element={<Home />}></Route> 
    //   </Routes>
    // </Fragment>
    // <Counter />
    // <ShopList />
    // <Posts />
    <Students />
    // <Counter />
  );
}

export default App;
