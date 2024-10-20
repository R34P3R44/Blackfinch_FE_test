import React from 'react';
import ProductList from './components/ProductListComponent/ProductList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <div className='App'>
      <div className='backgroundPicture'></div>
      <ProductList />
    </div>
  );
};

export default App;


