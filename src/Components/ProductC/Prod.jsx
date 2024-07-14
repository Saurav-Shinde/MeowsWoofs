import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Prod.css"
import { Link } from 'react-router-dom';

const Prod = () => {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div className="pmain">
    <div className='product-container'>
      <div className="prdimg">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="prddtl">
        <h1>{product.title}</h1>
        <p>{product.title}</p>
        <p>Price: {product.price}</p>
        <button className='paybtn'><Link to={'/payment'}>Buy</Link></button>
      </div>
      
    </div>
    </div>
  );
};

export default Prod;