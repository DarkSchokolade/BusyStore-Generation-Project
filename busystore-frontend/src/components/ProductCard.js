import React from 'react';

function ProductCard(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.img} alt={props.title} />
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
        <h3 className="card-price">{props.price}</h3>
        <button className="card-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
