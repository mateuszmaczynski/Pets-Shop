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
import DogProducts from './views/DogProducts'
import CatProducts from './views/CatProducts'
import ProductPage from './views/ProductPage'
import bird from './assets/icons/bird.gif';
import cat from './assets/icons/cat.gif';
import dog from './assets/icons/dog.gif';
import rabbit from './assets/icons/rabbit.gif';

function App() {
  return (
    <Router>
      <div className='container'>
        <Header/>
        <Navbar>
          <NavbarItem href='/dogs' text='Dog' icon={dog} />
          <NavbarItem href='/cats' text='Cat' icon={cat} />
          <NavbarItem href='/small-pets' text='Small Pet' icon={rabbit} />
          <NavbarItem href='/birds' text='Bird' icon={bird} />
        </Navbar>
        <Main>
          <Routes>
            <Route path="/cats" element={<CatProducts />} />
            <Route path="/dogs" element={<DogProducts />} />
            <Route path="/product/:id" element={<ProductPage />}></Route>
            <Route exact path='/' element={<Navigate replace to='/dogs'/>} />
          </Routes>
        </Main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
