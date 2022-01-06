import React from 'react';
import ProductCard from './ProductCard';
import '../css/card.css';
import Banner from './Banner';

function HomePage() {
  return (
    <div>
      <div className="wrapper">
        <ProductCard
          img="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="Red Nike"
          description="Run like there is no tomorrow"
          price="10,000"
        />
        <ProductCard
          img="https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
          title="Play Station 5"
          description="Play Has No Limits"
          price="52,000"
        />
        <ProductCard
          img="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="UTL Headphones"
          description="Sorry Can't hear you"
          price="2,000"
        />
        <ProductCard
          img="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          title="Lenovo Legion"
          description="For people who do"
          price="100,000"
        />
      </div>
      <Banner
        img="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80"
        title="Suggested Products For You"
      />
      <Banner
        img="https://images.unsplash.com/photo-1561069934-eee225952461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        title="Discounts For You"
      />
    </div>
  );
}

export default HomePage;
