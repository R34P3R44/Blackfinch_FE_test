import React, { useEffect, useState } from 'react';
import { fetchStarships } from '../../fetchData'
import './ProductList.css';
import Product from '../ProductComponent/Product'
import Notification from '../Notification/Notification'

interface ProductList {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  cargo_capacity: string;
  crew: string;
  max_atmosphering_speed: string;
  passengers: string
}


const ProductList: React.FC = () => {
  const [starships, setStarships] = useState<ProductList[]>([]);
  const [notification, setNotification] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    setDataForList()
  }, []);

  const setDataForList = async () => {
    const data = await fetchStarships();
    setStarships(data.results)
  }

  const handleBuy = (name: string, quantity: number) => {
    setQuantity(quantity)
    if (quantity > 0) {
      setNotification(true)

    }
    setTimeout(() => {
      setNotification(false)
    }, 2000);
  };


  return (
    <>
      <div className="starships-container">
        <h1 className='header'>Star Wars Starships</h1>
        {notification ?
        <div className='notificationPosition'>
          <Notification quantity={quantity}/>
        </div>
          :
          null
        }
        <div className="product-list">
          {starships.slice(0, 10).map((starship, index) => (
            <Product key={index} starship={starship} onBuy={handleBuy} />
          ))}
        </div>
      </div>

    </>

  );


};


export default ProductList;
