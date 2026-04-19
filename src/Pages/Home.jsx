import React from 'react'
import "../styles/Home.css"
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import ProductCard from '../Component/ProductCard'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";


const Home = () => {
  return (
    <div>
      <Navbar />
        <section className='hero'>
          <div className='hero-flex'>
            <div className='hero-text'>
              <h1>Promise Cakes & Bespoke Catering</h1>
              <h5>Crafting Sweet Memories, One Bite at a Time.</h5>
              <p>Crafting unforgettable culinary
                 experiences for your most precious
                 moments. From intimate weddings
                 to grand corporate events.
              </p>
              <div  className='btns' >
                <button className='btn1'>
                  <Link to="/contact">Book a Consultation</Link>
                </button>
                <button className='btn2'>
                  <Link to="/gallery">View Gallery</Link>
                </button>
              </div>
            </div>
             <div className='hero-image'>
              <img src="hero-image.png" alt="" />
             </div>
          </div>
        </section>
        <section className='sect2'>
           <div>
            <h1>Featured Delicacies</h1>
            <p className='para'>Discover our most beloved signature creations.</p>
            <ProductCard />
            <Link to="/gallery" className='view-btn'> View Gallary <FaArrowRightLong /></Link>
           </div>
        </section>
        <section className='sect3'>
          <h1>My Premium Services</h1>
          <p className='para3'>From intimate celebrations to grand events, we bring luxury pastry craftsmanship to every occasion.</p>
          <div className='services'>
            <div className='service-card'>
              <img src="/service1.png" alt="" />
              <h3>Bespoke Cakes</h3>
              <p>Collaborate with our lead designer to
                 create a one-of-a-kind center piece for
                 your special day.
              </p>
            </div>
             <div className='service-card'>
              <img src="/service2.png" alt="" />
              <h3>Event Catering</h3>
              <p>Complete dessert table setups and
                 professional service for weddings and
                 corporate galas.
              </p>
            </div>
             <div className='service-card'>
              <img src="/service3.png" alt="" />
              <h3>Pastry Boxes</h3>
              <p>Curated monthly selections of our
                 finest petit fours and seasonal pastries
                 delivered home.
              </p>
            </div>
          </div>
        </section>
        <section className='sect4'>
          <div className='sect4-flex'>
            <div className='sect4-image'>
              <img src="/about.png" alt="" />
              <div className='overlay'>About Me</div>
            </div>
            <div className='sect4-text'>
              <h5>Crafting Excellence</h5>
              <h1>My Story: A Passion for Perfection</h1>
              <p className='text1'>"Baking is an art where precision meets soul."</p>
              <p className='text2'>What started as a pursuit of a career quickly became my passion. 
                I began baking at home, experimenting, learning, and pouring my heart 
                into every recipe. With time, what was once just an idea grew into something 
                beautiful and meaningful.
              </p>
              <p className='text2'>
                Through late nights, constant creativity,
                and dedication, I’ve continued to grow and refine my craft. Every cake, pastry, 
                and catering service I offer is made with care, passion, and attention to detail.
                For me, baking isn’t just business — it’s love expressed in every bite.
              </p>
              <Link to="/about" className='about-btn'> Learn more about my heritage <FaArrowRightLong /></Link>
            </div>
          </div>
        </section>
        <section className='sect5'>
           <h1>Voices of Delight</h1>
           <p className='Para'>Our customers share their artisan experience.</p>
           <div className='testimony-flex'>
            <div className='testimony-card'>
              <div className='star-flex'>
                <span><FaRegStar /></span>
                <span><FaRegStar /></span>
                <span><FaRegStar /></span>
                <span><FaRegStar /></span>
                <span><FaRegStar /></span>
              </div>
              <p className='para5'>
                "The wedding cake Clara designed for us was not just a dessert; it was a
                masterpiece. Our guests are still talking about the elderflower infusion!"
              </p>
              <div className='testimony-profile'>
                <img src="/testimony.png" alt="" />
                <div className='profile-text'>
                  <h3>Eleanor Vance</h3>
                  <p>Bridal Client</p>
                </div>
              </div>
            </div>
            <div className='testimony-card'>
              <div className='star-flex'>
                <span><FaRegStar /></span>
                <span><FaRegStar /></span>
                <span><FaRegStar /></span>
                <span><FaRegStar /></span>
                <span><FaRegStar /></span>
              </div>
              <p className='para5'>
               "The chocolate truffle cake is the most
               decadent thing I've ever tasted. Pure
               luxury in every bite. Highly recommend
               the delivery service too."
              </p>
              <div className='testimony-profile'>
                <img src="/testimony2.png" alt="" />
                <div className='profile-text'>
                  <h3>Marcus Thorne</h3>
                  <p>Regular Customer</p>
                </div>
              </div>
            </div>
            <div className='testimony-card'>
              <div className='star-flex'>
                <span><FaRegStar /></span>
                <span><FaRegStar /></span>
                <span><FaRegStar /></span>
                <span><FaRegStar /></span>
                <span><FaRegStar /></span>
              </div>
              <p className='para5'>
                "As an event planner, Artisan Cakes is my
                go-to for all high-end galas. Their
                attention to detail and flavor profiles are
                unmatched in the industry."
              </p>
              <div className='testimony-profile'>
                <img src="/testimony3.png" alt="" />
                <div className='profile-text'>
                  <h3>Sophia Laurent</h3>
                  <p>Event Strategist</p>
                </div>
              </div>
            </div>
           </div>
        </section>
        <section className='sect6'>
          <div className='sect6-flex'> 
            <h1>Ready to Start Your Custom Order?</h1>
            <p>Whether it's a birthday, anniversary, or the wedding of your dreams, we're here to make it unforgettable.</p>.
            <div className='sect6-btns'>
              <button className='consult-btn'>
                <Link to="/contact">Book a Consultation</Link>
              </button>
              <button className='view-btns'>Start Custom Order </button>
            </div>
          </div>
        </section>
      <Footer />
    </div>
  )
}

export default Home
