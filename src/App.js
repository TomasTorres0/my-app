import './App.css';
import MyComponent from './components/MyComponent';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';

import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Events from './components/Events';
import Intercambiabilidad from './components/Intercambiabilidad';
import DarkProductList from './components/DarkProductList';
import CacheContext, { CacheProvider } from './contexts/CacheContext';

import FavoritosContext, { FavoritosProvider } from './contexts/FavoritosContext';
import Favoritos from './components/Favoritos';
import { doc, getFirestore, getDoc, collection, getDocs } from 'firebase/firestore';
import { CartProvider } from './contexts/CartContext';
import { createAllProducts } from './utils/products';

function App() {

    
    return (
      <BrowserRouter>
        <CacheProvider>
          <CartProvider>
            <NavBar />
            {/* <Events /> */}
            {/* <Intercambiabilidad /> */}
            {/* <DarkProductList /> */}
            {/* <Condionales /> */}
            <FavoritosProvider>
              <Routes>
                <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
                <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/favs' element={<Favoritos />} />
              </Routes>
            </FavoritosProvider>
          </CartProvider>
        </CacheProvider>
      </BrowserRouter>
    );
}

export default App;