import React from 'react';
import '../css/banner.css';

function Banner(props) {
  return (
    <div className="banner">
      <h1 className="banner-title">{props.title}</h1>
      <img className="banner-img" src={props.img} alt="" />
    </div>
  );
}

export default Banner;
