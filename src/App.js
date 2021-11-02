import React from 'react';
import './components/_base.scss';
import {
  Footer,
  Header,
  Main,
  Navbar,
  NavbarItem
} from './components'
import bird from './assets/icons/bird.gif';
import cat from './assets/icons/cat.gif';
import dog from './assets/icons/dog.gif';
import rabbit from './assets/icons/rabbit.gif';

function App() {
  return (
    <div className='container'>
      <Header/>
      <Navbar>
        <NavbarItem text='Dog' icon={dog} />
        <NavbarItem text='Cat' icon={cat} />
        <NavbarItem text='Small Pet' icon={rabbit} />
        <NavbarItem text='Bird' icon={bird} />
      </Navbar>
      <Main>
        lorem ipsum
      </Main>
      <Footer/>
    </div>
  );
}

export default App;
