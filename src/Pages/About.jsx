import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import '../styles/About.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <Navbar />
      <section className='about-hero'>
        <div className='about-flex'>
          <div className='about-text'>
            <h1>Crafting Sweet Memories</h1>
            <p>The intersection of traditional French techniques and modern artistic expression.</p>
          </div>
        </div>
      </section>
      <section className='about-sect2'>
         <div className='aboutsect2-flex'>
          <div className='aboutflex-text'>
            <h1>My Story</h1>
            <div className='ruler'></div>
            <p className='aboutpara1'>What started as a pursuit of a career quickly became my passion. I began baking at home, experimenting, learning, and pouring my heart into every recipe. With time, what was once just an idea grew into something beautiful and meaningful.</p>
            <p className='aboutpara2'>Through late nights, constant creativity, and dedication, I’ve continued to grow and refine my craft. Every cake, pastry, and catering service I offer is made with care, passion, and attention to detail.
               For me, baking isn’t just business — it’s love expressed in every bite.
            </p>
            <div className='abouttext-flex'>
              <div>
                <h3>8+</h3>
                <p>Years of Craft</p>
              </div>
              <div>
                <h3>15k+</h3>
                <p>Cakes Baked</p>
              </div>
              <div>
                <h3>100%</h3>
                <p>Natural Ingredients</p>
              </div>
           </div>
           </div>
           <div className='aboutflex-image'>
            <img src="about.png" alt="" />
           </div>
         </div>
      </section>
       <section className='about-sect3'>
          <h1>My Philosophy</h1>
          <p className='about-para3'>We believe that the best cakes come from the best beginnings. Quality is not an act, it is a habit.</p>
          <div className='abouts'>
            <div className='about-card1'>
              <img src="/icon1.png" alt="" />
              <h3 className='abouthead'>Premium Ingredients</h3>
              <p className='aboutpara'>We source only the finest organic flour,
                 Madagascar vanilla, and single-origin
                 Belgian chocolate. No shortcuts, ever.
              </p>
            </div>
             <div className='about-card'>
              <img src="/icon 2.png" alt="" />
              <h3 className='abouthead'>Artisanal Craftsmanship</h3>
              <p className='aboutpara'>Every petal, pearl, and brushstroke is
                 handcrafted by our master decorators
                 with surgical precision.
              </p>
            </div>
             <div className='about-card'>
              <img src="/icon3.png" alt="" />
              <h3 className='abouthead'>Uncompromising Quality</h3>
              <p className='aboutpara'>From the first whisk to the final
                 delivery, we ensure perfection in every
                 bite through rigorous testing.
              </p>
            </div>
          </div>
        </section>
        <section className='about-sect4'>
          <div className='aboutsect4-flex'>
            <div className='aboutsect4-image'> 
              <img src="/meet-image.png" alt="" />
            </div>
            <div className='aboutsect4-text'>
              <h4>The Visionary</h4>
              <h2>Meet Ogechi Promise</h2>
              <p className='aboutsect4-para1'>"Baking is a language of love, where ingredients are words and flavor is the emotion."</p>
              <p className='aboutsect4-para2'>With a degree from Lenity catering and service and a decade of experience in Nigeria's most prestigious patisseries, Ogechi promise founded Promise Cakes to bring world-class pastry art to her local community. Her eye for detail and commitment to flavor profiles has redefined local luxury baking.</p>
              <div className='image-flex'>
                <img src="whatsapp.png" alt="" />
                <img src="instagram.png" alt="" />
              </div>
            </div>
          </div>
          <div className='allset'>
            <h2>Why Choose Promise Cakes?</h2>
            <div className='set-flex'>
              <div className='sets'> 
                <img src="promise1.png" alt="" />
                <h4>Bespoke Design</h4>
                <p>Tailored to your event's theme</p>
              </div>
              <div className='sets'> 
                <img src="promise2.png" alt="" />
                <h4>Bespoke Design</h4>
                <p>Tailored to your event's theme</p>
              </div>
              <div className='sets'> 
                <img src="promise3.png" alt="" />
                <h4>Bespoke Design</h4>
                <p>Tailored to your event's theme</p>
              </div>
              <div className='sets'> 
                <img src="promise4.png" alt="" />
                <h4>Bespoke Design</h4>
                <p>Tailored to your event's theme</p>
              </div>
            </div>
          </div>
          <div className='ruling-line'></div>
          <div className='ready-sect'>
            <h1>Ready for something sweet?</h1>
            <p>Whether it's a wedding, birthday, or just a Tuesday, let us make it extraordinary.</p>
            <div className='butts-flex'>
              <button className='view-butt'>
                <Link to="/gallery">View Gallery</Link>
              </button>
               <button className='book-butt'>
                <Link to="/contact">Book Now</Link>
              </button>
            </div>
          </div>
        </section>

      <Footer />
    </div>
  )
}

export default About
