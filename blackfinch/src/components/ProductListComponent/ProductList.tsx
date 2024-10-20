import React, { useEffect, useState } from 'react';
import { fetchStarships } from '../../fetchData'
import './ProductList.css';
import Product from '../ProductComponent/Product'
import Notification from '../Notification/Notification'
import { globalState } from '../../Store/atom';
import { useRecoilState } from 'recoil';


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
  const [cartItemDetails, setCartItemDetails] = useState<object>({});
  const [globalQty, setGlobalQty] = useRecoilState(globalState);


  useEffect(() => {
    setDataForList()
  }, []);

  const setDataForList = async () => {
    const data = await fetchStarships();
    setStarships(data.results)
  }

  const handleBuy = (name: string, quantity: number) => {
    let purchaseDetails = [
      {
        ship: name, 
        qty: quantity
      }
    ]

    setCartItemDetails(purchaseDetails)

    setGlobalQty(quantity)
    if (quantity > 0) {
      setNotification(true)
    }
    setTimeout(() => {
      setNotification(false)
    }, 5000);

  };


  return (
    <>
      <div className="starships-container">
        {notification ?
        <div className='notificationPosition'>
          <Notification cartItemDetails={cartItemDetails}/>
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
