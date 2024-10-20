import React, { useEffect, useState } from 'react';
import ProductList from '../ProductListComponent/ProductList';
import './Product.css';
import { TbSquareMinusFilled } from "react-icons/tb";
import { TbSquareRoundedPlusFilled } from "react-icons/tb";

interface ProductProps {
    starship: ProductList;
    onBuy: (name: string, quantity: number) => void;
}

const Product: React.FC<ProductProps> = ({ starship, onBuy }) => {
    const [quantity, setQuantity] = useState<number>(0);

    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 0));


    return (
        <div className="product">
            <div className='productContainer'>
                <div className='productHeaderContainer'>
                    <h1 className='productHeader'>{starship.name}</h1>
                </div>
                <div className='productBody'>
                    <div className='d-flex'>
                        <div className='text-uppercase fw-bolder me-2'>Model:</div>
                        <div>{starship.model === 'unknown' || '' ? 'N/A' : `${starship.model}`}</div>
                    </div>
                    <div className='d-flex'>
                        <div className='text-uppercase fw-bolder me-2'>Maker:</div>
                        <div>{starship.manufacturer === 'unknown' || '' ? 'N/A' : `${starship.manufacturer}`}</div>
                    </div>
                    <div className='d-flex'>
                        <div className='text-uppercase fw-bolder me-2'>Cargo space:</div>
                        <div>{starship.cargo_capacity === 'unknown' || '' ? 'N/A' : `${starship.cargo_capacity}`}</div>
                    </div>
                    <div className='d-flex'>
                        <div className='text-uppercase fw-bolder me-2'>Crew members:</div>
                        <div>{starship.crew === 'unknown' || '' ? 'N/A' : `${starship.crew}`}</div>
                    </div>
                    <div className='d-flex'>
                        <div className='text-uppercase fw-bolder me-2'>Max speed:</div>
                        <div>{starship.max_atmosphering_speed === 'unknown' || '' ? 'N/A' : `${starship.max_atmosphering_speed}`}</div>
                    </div>
                    <div className='d-flex'>
                        <div className='text-uppercase fw-bolder me-2'>Passengers:</div>
                        <div>{starship.passengers === 'unknown' || '' ? 'N/A' : `${starship.passengers}`}</div>
                    </div>
                    <div className='d-flex'>
                        <div className='text-uppercase fw-bolder me-2'>Cost:</div>
                        <div>{starship.cost_in_credits === 'unknown' || '' ? 'N/A' : `${starship.cost_in_credits} credits`}</div>
                    </div>
                </div>
                <div className='productActions mt-4'>
                    <button className="qtyAdjustBtnMinus" onClick={decreaseQuantity}><TbSquareMinusFilled color='#D2222D' size={25} /></button>
                    <span>{quantity}</span>
                    <button className="qtyAdjustBtnPlus" onClick={increaseQuantity}><TbSquareRoundedPlusFilled color='#238823' size={25} /></button>
                    <button className="submitButton" onClick={() => onBuy(starship.name, quantity)}>BUY</button>
                </div>
            </div>
        </div>
    );
};

export default Product