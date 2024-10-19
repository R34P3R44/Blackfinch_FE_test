import React, { useEffect, useState } from 'react';
import { fetchStarships } from '../../fetchData'
import './ProductList.css';
import Product from '../ProductComponent/Product'


interface ProductList {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
}


const ProductList: React.FC = () => {
  const [starships, setStarships] = useState<ProductList[]>([]);
  const [notification, setNotification] = useState<boolean>(false);
  const [noShipsAlert, setNoShipsAlert] = useState<boolean>(false);

  useEffect(() => {
    setDataForList()
  }, []);

  const setDataForList = async () => {
    const data = await fetchStarships();
    setStarships(data.results)
  }

  const handleBuy = (name: string, quantity: number) => {
    if (quantity > 0) {
      setNotification(true);
    }
  };

  return (
    <div className="starships-container">
      {/* {notification ? 
      <div className="alert alert-success notification" role="alert">
        A simple success alert—check it out!
      </div>
      :
      null
      } */}
      <h1 className='header'>Star Wars Starships</h1>
      <div className="product-list">
        {starships.slice(0, 10).map((starship, index) => (
          <Product key={index} starship={starship} onBuy={handleBuy} />
        ))}
      </div>
    </div>
  );
};


export default ProductList;