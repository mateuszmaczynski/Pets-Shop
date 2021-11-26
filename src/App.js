import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
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
import AllProducts from "./views/AllProducts";
import BirdProducts from './views/BirdProducts';
import CartPage from './views/CartPage';
import CatProducts from './views/CatProducts';
import DogProducts from './views/DogProducts';
import SmallPetsProducts from './views/SmallPetsProducts';
import ProductPage from './views/ProductPage';
import SearchPage from './views/SearchPage';
import bird from './assets/icons/bird.ico';
import cat from './assets/icons/cat.ico';
import dog from './assets/icons/dog.ico';
import rabbit from './assets/icons/rabbit.ico';

function App() {
  useEffect(() => {
    isHasAccount();
  }, [])

  const isHasAccount = async () => {
    try {
      const walletId = await window.ethereum.request({method: 'eth_requestAccounts'});
      localStorage.setItem('walletId', walletId);
      //window.alert('walletId', walletId);
    } catch {
      localStorage.removeItem('walletId');
      window.alert('To make a purchase, you need to log in with a crypto wallet');
    }
  };

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
            <Route path='/birds' element={<BirdProducts/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/cats' element={<CatProducts/>}/>
            <Route path='/dogs' element={<DogProducts/>}/>
            <Route path='/product/:id' element={<ProductPage/>}/>
            <Route path="/search/name/:name" element={<SearchPage/>} exact/>
            <Route path='/small-pets' element={<SmallPetsProducts/>}/>
            <Route exact path='/' element={<AllProducts/>}/>
          </Routes>
        </Main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
