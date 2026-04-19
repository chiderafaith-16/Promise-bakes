import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import '../styles/Gallery.css'
import { Link } from 'react-router-dom'

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <section className='gallery-hero'>
         <div className='gallery-flex'>
          <div className='gallery-text'>
            <h1>My Collections</h1>
            <p>Handcrafted elegance in every bite. Discover my premium selection of
               artisanal treats, meticulously designed for life's most precious moments.
            </p>
            <button>
              <Link to="/contact">Book Now</Link>
            </button>
          </div>
         </div>
      </section>
      <section className='Gallery-sect1'>
        <div className='Gallary-head'>
          <h2>Signature Cakes</h2>
          <p className='Gallery-para'>The pinnacle of our pastry craftsmanship</p>
        </div>
        <div className='Gallarysect1-flex'>
          <div className='set'>
            <img src="/signature1.png" alt="" />
            <h3>Wedding Collection</h3>
            <p className='Gallery-discription'>Timeless tiered elegance featuring hand-piped textures and organic floral arrangements.</p>
            <p className='Gallery-price'>From N80,000</p>
          </div>
          <div className='set'>
            <img src="/signature2.png" alt="" />
            <h3>Birthday Series</h3>
            <p className='Gallery-discription'>Vibrant celebrations reimagined with seasonal flavors and bespoke colorful finishes.</p>
            <p className='Gallery-price'>From N8,000</p>
          </div>
          <div className='set'>
            <img src="/signature3.png" alt="" />
            <h3>Minimalist Designs</h3>
            <p className='Gallery-discription'>Modern aesthetic perfection with clean lines, smooth finishes, and understated luxury.</p>
            <p className='Gallery-price'>From N25,000</p>
          </div>
        </div>
      </section>
      <section className='Gallery-sect2'>
        <h1>Artisanal Doughnuts</h1>
        <div className='line'></div>
        <p className='Gallery-para2'>Elevated classics and bold new flavors, crafted fresh every morning using the finest organic ingredients.</p>
        <div className='sect2-flex'>
          <div className='sect2-set'>
            <img src="/artisanal1.png" alt="" />
            <h3>Maple Pecan</h3>
            <p>N5,000</p>
          </div>
          <div className='sect2-set'>
            <img src="/artisanal2.png" alt="" />
            <h3>Wild Berry Bliss</h3>
            <p>N5,500</p>
          </div>
          <div className='sect2-set'>
            <img src="/artisanal3.png" alt="" />
            <h3>Matcha Zen</h3>
            <p>N6,000</p>
          </div>
          <div className='sect2-set'>
            <img src="artisanal4.png" alt="" />
            <h3>Dark Velvet</h3>
            <p>N8,000</p>
          </div>
        </div>
      </section>
      <section className='Gallery-sect3'>
        <div className='header-flex'>
          <h2>Fine Pastries</h2>
          <div className='ruler-line'></div>
        </div>
        <div className='sect3-flex'>
          <div className='sett-flex'>
            <img src="/pastery1.png" alt="" />
            <div className='sett'>
            <h3>Parisian Macarons</h3>
            <p className='pastery-description'>Light, airy, and filled with artisanal ganache.</p>
            <p className='pastery-price'>Box of 6 · #18,000</p>
            </div>
          </div>
          <div className='sett-flex'>
            <img src="/pastery2.png" alt="" />
            <div className='sett'>
            <h3>Seasonal Tarts</h3>
            <p className='pastery-description'>Buttery crust with velvety cream and fresh fruit.</p>
            <p className='pastery-price'>Individual · #8,000</p>
            </div>
          </div>
          <div className='sett-flex'>
            <img src="/pastery3.png" alt="" />
            <div className='sett'>
            <h3>Golden Croissants</h3>
            <p className='pastery-description'>Authentic 24-hour fermented sourdough layers.</p>
            <p className='pastery-price'>Classic · #4,000</p>
            </div>
          </div>
        </div>
      </section>
      <section className='Gallery-sect2'>
        <h1>Small Chops</h1>
        <div className='line'></div>
        <p className='Gallery-para2'> Traditional favorites reimagined. A delightful assortment of bite-sized treats perfect for any gathering.</p>
        <div className='sect2-flex'>
          <div className='sect2-set'>
            <img src="/puff4.png" alt="" />
            <h3>Golden Puff-Puff</h3>
            <p>N12,000 / Box</p>
          </div>
          <div className='sect2-set'>
            <img src="/puff3.png" alt="" />
            <h3>Crispy Spring Rolls</h3>
            <p>#15,000 / Box</p>
          </div>
          <div className='sect2-set'>
            <img src="/puff2.png" alt="" />
            <h3>Spicy Samosas</h3>
            <p>N15,500 / Box</p>
          </div>
          <div className='sect2-set'>
            <img src="/puff3.png" alt="" />
            <h3>Variety Platter</h3>
            <p>N15,500 / Box</p>
          </div>
        </div>
      </section>
       <section className='Gallery-sect1'>
        <div className='Gallary-head'>
          <h2>Savory Snacks</h2>
          <p className='Gallery-para'>Hearty and satisfying artisan bakes</p>
        </div>
        <div className='Gallarysect1-flex'>
          <div className='set'>
            <img src="/snacks1.png" alt="" />
            <h3>Artisan Meat Pies</h3>
            <p className='Gallery-discription'>Flaky, buttery shortcrust pastry filled with seasoned minced beef and diced vegetables.</p>
            <p className='Gallery-price'>N600 each</p>
          </div>
          <div className='set'>
            <img src="/snacks2.png" alt="" />
            <h3>Premium Sausage Rolls</h3>
            <p className='Gallery-discription'>Hand-rolled puff pastry wrapped around succulent herbed sausage meat.</p>
            <p className='Gallery-price'>N500 each</p>
          </div>
          <div className='set'>
            <img src="/snacks3.png" alt="" />
            <h3>Creamy Chicken Pies</h3>
            <p className='Gallery-discription'>Tender chicken chunks in a rich white sauce, encased in golden pastry.</p>
            <p className='Gallery-price'>N700 each</p>
          </div>
        </div>
      </section>
      <section className='Gallery-sect3'>
        <div className='header-flex'>
          <h2>Refreshments</h2>
          <div className='ruler-line'></div>
        </div>
        <div className='sect3-flex'>
          <div className='sett-flex'>
            <img src="/yogurt1.png" alt="" />
            <div className='sett'>
            <h3>Greek Honey Yogurt</h3>
            <p className='pastery-description'>Thick, creamy yogurt drizzled with organic wildflower honey.</p>
            <p className='pastery-price'>N6,000</p>
            </div>
          </div>
          <div className='sett-flex'>
            <img src="/yogurt2.png" alt="" />
            <div className='sett'>
            <h3>Wild Berry Parfait</h3>
            <p className='pastery-description'>Layered yogurt with fresh forest berries and granola.</p>
            <p className='pastery-price'>N7,000</p>
            </div>
          </div>
          <div className='sett-flex'>
            <img src="/yogurt3.png" alt="" />
            <div className='sett'>
            <h3>Tropical Bliss Smoothie</h3>
            <p className='pastery-description'>Freshly blended mango, pineapple, and coconut milk.</p>
            <p className='pastery-price'>N8,000</p>
            </div>
          </div>
        </div>
      </section>
       <section className='Gallery-sect2'>
        <h1>Hot Bites</h1>
        <div className='line'></div>
        <p className='Gallery-para2'>Fresh from the oven. Gourmet mini-pizzas and warm treats made to order.</p>
        <div className='sect2-flex'>
          <div className='sect2-set'>
            <img src="/bite1.png" alt="" />
            <h3>Margherita Mini</h3>
            <p>N15,000</p>
          </div>
          <div className='sect2-set'>
            <img src="/bite2.png" alt="" />
            <h3>Pepperoni Punch</h3>
            <p>N17,500</p>
          </div>
          <div className='sect2-set'>
            <img src="/bite3.png" alt="" />
            <h3>Garden Veggie</h3>
            <p>N61,000</p>
          </div>
          <div className='sect2-set'>
            <img src="/bite4.png" alt="" />
            <h3>BBQ Chicken Mini</h3>
            <p>N18,000</p>
          </div>
        </div>
      </section>
      <section className='Gallery-sect1'>
        <div className='Gallary-head'>
          <h2>Grills</h2>
          <p className='Gallery-para'>Sizzling flavors and premium wraps</p>
        </div>
        <div className='Gallarysect1-flex'>
          <div className='set'>
            <img src="/grill1.png" alt="" />
            <h3>Prime Beef Shawarma</h3>
            <p className='Gallery-discription'>Thinly sliced grilled beef, crisp veggies, and signature garlic sauce in toasted pita.</p>
            <p className='Gallery-price'>N12,000</p>
          </div>
          <div className='set'>
            <img src="/grill2.png" alt="" />
            <h3>Zesty Chicken Shawarma</h3>
            <p className='Gallery-discription'>Marinated grilled chicken with pickled vegetables and spicy tahini dressing.</p>
            <p className='Gallery-price'>N14,000</p>
          </div>
          <div className='set'>
            <img src="/grill3.png" alt="" />
            <h3>Artisan Mixed Grill</h3>
            <p className='Gallery-discription'>A sampler of our finest grilled meats served with saffron rice and fresh herbs.</p>
            <p className='Gallery-price'>N13,000</p>
          </div>
        </div>
      </section>
       <section className='Gallery-sect2'>
        <h1>Breakfast Treats</h1>
        <div className='line'></div>
        <p className='Gallery-para2'>Start your morning with perfection. Light, fluffy, and decadent breakfast classics.</p>
        <div className='sect2-flex'>
          <div className='sect2-set'>
            <img src="/treat1.png" alt="" />
            <h3>Buttermilk Pancakes</h3>
            <p>N9,000</p>
          </div>
          <div className='sect2-set'>
            <img src="/treat2.png" alt="" />
            <h3>Blueberry Stack</h3>
            <p>N6,000</p>
          </div>
          <div className='sect2-set'>
            <img src="/treat3.png" alt="" />
            <h3>Choco-Drip Stack</h3>
            <p>N7,000</p>
          </div>
          <div className='sect2-set'>
            <img src="/treat4.png" alt="" />
            <h3>Artisan French Toast</h3>
            <p>N5,000</p>
          </div>
        </div>
      </section>
      <section className='last-sect'>
        <div className="vision-section">
          <div className="content-container">
             <h1>Bring Your Vision to Life</h1>
             <p className='last-para'>Planning a special event? My baking specialties lie in creating custom masterpieces tailored to your unique style and taste preferences.</p>
               <div className="buttons-container">
                   <button className="custom-order-btn">Inquire for Custom Orders</button>
                   <button className="pricing-guide-btn">View Pricing Guide</button>
               </div>
           </div>
        </div>
    </section>

      <Footer />
    </div>
  )
}

export default Gallery
