import React from 'react';
import ProductsCard from '../components/ProductsCard';
import productsData from '../data/productsData';

export default function Home() {
  return (
    <div>
      <section id="home">
        <div className='container'>
          <div className='home_content'>
            {
              productsData.map((item)=>(
                <ProductsCard key={item.id} {...item}></ProductsCard>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}
