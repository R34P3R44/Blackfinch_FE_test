import React from 'react';
import ProductList from './ProductList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='App'>
      <div className='backgroundPicture'></div>
        <ProductList/>
    </div>
  );
};

export default App;