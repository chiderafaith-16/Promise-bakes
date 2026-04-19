import React, { useState, useEffect } from 'react'
import Navbar from '../Component/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../Component/Footer'
import '../styles/Pastries.css'
import data from '../Component/Data'
import { GrNext, GrPrevious } from "react-icons/gr";
import Categories from '../Component/Categories'

const Pastries = () => {
  const [index, setIndex] = useState(0)
  const [menuItems, setMenuItems] = useState(data)
  const [activeCategory, setActiveCategory] = useState('all')

  // ✅ detect mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // ✅ categories
  const [categories] = useState([
    'all',
    ...new Set(data.map((item) => item.category))
  ])

  const ITEMS_PER_SLIDE = 3

  // ✅ FILTER FUNCTION
  const filterItems = (category) => {
    setActiveCategory(category)

    if (category === 'all') {
      setMenuItems(data)
      setIndex(0)
      return
    }

    const newItems = data.filter(
      (item) => item.category === category
    )

    setMenuItems(newItems)
    setIndex(0)
  }

  const nextSlide = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex + ITEMS_PER_SLIDE
      if (newIndex >= menuItems.length) newIndex = 0
      return newIndex
    })
  }

  const prevSlide = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex - ITEMS_PER_SLIDE
      if (newIndex < 0) {
        newIndex = Math.max(menuItems.length - ITEMS_PER_SLIDE, 0)
      }
      return newIndex
    })
  }

  // ✅ KEY FIX (desktop vs mobile)
  const displayProducts = isMobile
    ? menuItems
    : menuItems.slice(index, index + ITEMS_PER_SLIDE)

  if (menuItems.length === 0) {
    return <h2>No items found</h2>
  }

  return (
    <div>
      <Navbar />

      <section className='pastery-hero'>
        <div className='pasteryhero-image'>
          <div className='pasteryhero-text'>
            <h1>Exquisite Promise Pastries</h1>
            <p>
              Indulge in our handcrafted collection of delicate macarons,
              buttery croissants, and jewel-like tarts.
            </p>
            <button className='pastery-btn'>
              <Link to="/gallery">View Gallery</Link>
            </button>
          </div>
        </div>

        <Categories 
          categories={categories} 
          filterItems={filterItems}
          activeCategory={activeCategory}
        />

        <div className='pastry-line'></div>
      </section>

      <section className='pastry-sect2'>
        <div className='pastryhead-flex'>
          <h2>My Signature Creations</h2>
          <p>{menuItems.length} Items Available</p>
        </div>

        <div className="pastry-container">
          {displayProducts.map((product) => (
            <article className='pastry-product' key={product.id}>
              <img src={product.image} alt={product.title} />

              {product.bestseller && (
                <span className="best">{product.bestseller}</span>
              )}

              {product.version && (
                <span className="badge-version">{product.version}</span>
              )}

              <div className='title-flex'>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
              </div>

              <p className='pastry-para'>{product.description}</p>

              <div className='butt-flex'>
                <button>{product.order}</button>
                <span>{product.icon}</span>
              </div>
            </article>
          ))}

          {/* hide buttons on mobile via CSS */}
          <button className='prev' onClick={prevSlide}>
            <GrPrevious />
          </button>

          <button className='next' onClick={nextSlide}>
            <GrNext />
          </button>
        </div>
      </section>

      <section className='pastry-sect3'>
        <div className='pastrysect3-flex'>
          <div className='sect3flex-image'>
            <img src="pastry-about.png" alt="" />
          </div>
          <div className='sect3flex-text'>
            <h1>The Secret is in the Details</h1>
            <p className='sect3-para'>
              My master pâtissiers believe that perfection is found in the finest ingredients.
            </p>

            <div className='para-flex'>
              <img src="pastry-icon.png" alt="" />
              <p>100% Organic Flours & Grains</p>
            </div>

            <div className='para-flex'>
              <img src="pastry-icon.png" alt="" />
              <p>No Artificial Preservatives</p>
            </div>

            <div className='para-flex'>
              <img src="pastry-icon.png" alt="" />
              <p>Fresh Daily Small-Batch Production</p>
            </div>

            <button className='pastery-bttn'>
              <Link to="/gallery">View Gallery</Link>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Pastries