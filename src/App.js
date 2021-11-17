import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from 'react-router-dom';
import './components/_base.scss';
import {
  Footer,
  Header,
  Main,
  Navbar,
  NavbarItem
} from './components'
import BirdProducts from './views/BirdProducts';
import CatProducts from './views/CatProducts';
import DogProducts from './views/DogProducts';
import SmallPetsProducts from './views/SmallPetsProducts';
import ProductPage from './views/ProductPage';
import CartPage from './views/CartPage';
import bird from './assets/icons/bird.ico';
import cat from './assets/icons/cat.ico';
import dog from './assets/icons/dog.ico';
import rabbit from './assets/icons/rabbit.ico';

function App() {

  return (
    <Router>
      <div className='container'>
        <Header/>
        <Navbar>
          <NavbarItem href='/dogs' text='Dog' icon={dog}/>
          <NavbarItem href='/cats' text='Cat' icon={cat}/>
          <NavbarItem href='/small-pets' text='Small Pet' icon={rabbit}/>
          <NavbarItem href='/birds' text='Bird' icon={bird}/>
        </Navbar>
        <Main>
          <Routes>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/cart/:id' element={<CartPage/>}/>
            <Route path='/product/:id' element={<ProductPage/>}/>
            <Route path='/birds' element={<BirdProducts/>}/>
            <Route path='/cats' element={<CatProducts/>}/>
            <Route path='/dogs' element={<DogProducts/>}/>
            <Route path='/small-pets' element={<SmallPetsProducts/>}/>
            <Route exact path='/' element={<Navigate replace to='/dogs'/>}/>
          </Routes>
        </Main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
