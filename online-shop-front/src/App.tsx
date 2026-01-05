import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Comments from './components/Comments';
import { BrowserRouter, Routes, Route } from 'react-router';


function App() {
  
  return (
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product" element={<ProductDetail/>} />
          <Route path="/rate" element={<Comments/>} />
        </Routes>
     </BrowserRouter>
  );
}

export default App;
/**
 * <div className="App">
      <header className="App-header">
      </header>
      <Products/>
    </div>
 */