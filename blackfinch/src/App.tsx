import React from 'react';
import ProductList from './components/ProductListComponent/ProductList';
import Navigation from './components/Navigation/Navigation'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecoilRoot } from 'recoil';

const App: React.FC = () => {
  return (
    <div className='App'>
      <div className='backgroundPicture'></div> 
      <RecoilRoot>
        <Navigation/>
        <ProductList/>

      </RecoilRoot>     
    </div>
  );
};

export default App;


