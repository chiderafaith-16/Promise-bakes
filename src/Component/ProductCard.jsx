import React from 'react'
import "../styles/ProductCard.css"
import cake from '../assets/cake.jpeg'

const ProductCard = () => {
  const products = [
   {
      Id: 1,
      image: cake,
      name: 'Velvet Rose Cake',
      price: 'N35,000',
      description:'Signature Floral Infusion',
   },
   {
      Id: 2,
      image: '/product2.png',
      name: 'Dark Choco Truffle',
      price: 'N45,000',
      description:'85% Single Origin Cocoa',
   },
   {
      Id: 3,
      image: '/product3.png',
      name: 'Salted Caramel Macarons',
      price: 'N45,000',
      description:'Box of 12 Artisanal Pieces',
   },
   {
      Id: 4,
      image: '/product4.png',
      name: 'Lemon Meringue Tart',
      price: 'N40,000',
      description:'Zesty Sicilian Lemons',
   },
    
 ]
 console.log(products.image);
 

  return (
    <div className='Flex-card'>
      {
        products.map((product)=>{
          return(
             <div key={product.Id} >
             <article className='product-card'>
             <img src={product.image}  alt="product image" className='product-image'/>
             <div className='name-flex'>
             <h4 className='product-name'>{product.name}</h4>
             <p className='product-price'>{product.price}</p>
             </div>
             <p className='product-description'>{product.description}</p>
       </article>
       </div>
          )
        })
      }
    </div>
  )
}

export default ProductCard
