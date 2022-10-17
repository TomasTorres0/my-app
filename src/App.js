
import './App.css';

import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import Events from './components/Events';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { CartProvider } from './contexts/CartContext';
import CacheContext, { CacheProvider } from './contexts/CacheContext';
import Checkout from './components/Checkout';
import DarkProductList from './components/DarkProductList';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Intercambiabilidad from './components/Intercambiabilidad';
function App() {
    return (
      <BrowserRouter>
       <CacheProvider>
          
        
         <Intercambiabilidad />
        <NavBar />
        <DarkProductList />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
       
        </CacheProvider>
      </BrowserRouter>
    );
}

export default App;
