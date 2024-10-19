import React, { useEffect, useState } from 'react';
import ProductList from '../ProductListComponent/ProductList';


interface ProductProps {
    starship: ProductList;
    onBuy: (name: string, quantity: number) => void;
  }
  
  const Product: React.FC<ProductProps> = ({ starship, onBuy }) => {
    const [quantity, setQuantity] = useState<number>(1);
  
    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  
    return (
      <div className="product">
        <div className='productContainer'>
          <h2 className='productHeader'>{starship.name}</h2>
          <div className='productBody'>
            <p>Model: {starship.model}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Cost: {starship.cost_in_credits} credits</p>
          </div>
          <div className='productActions '>
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
            <button onClick={() => onBuy(starship.name, quantity)}>BUY</button>
          </div>
        </div>
      </div>
  
  
  
      // <div>displayNoShipsAlert()</div>
  
    );
  };

  export default Product