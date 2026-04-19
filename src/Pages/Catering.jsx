import React from 'react'
import "../styles/catering.css"
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'

const Catering = () => {
  const [showMenu, setShowMenu] = React.useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div>
        <Navbar />

        <section className='catering-hero'>
          <div className='catering-flex'>
            <div className='catering-text'>
              <h4>Premium Culinary Experiences</h4>
              <h1> 
                <span className='headspan1'>Exquisite </span>
                <span className='headspan2'> Event </span> 
                <span className='headspan3'>Catering</span>
              </h1>
              <p>Elevate your special occasions with our bespoke culinary experiences, from artisanal grazing tables to gourmet appetizers and signature desserts.</p>
              <div className='cater-btns'>
                 <button className='cater-butt1'>
                   <Link to="/contact">Book Now</Link>
                </button>
                <button className='cater-butt2'>
                  <Link to="/gallery">View My Gallery</Link>
                </button>
              </div>
            </div>
            <div className='catering-image'>
              <img src="catering-hero.png" alt="" />
            </div>
          </div>
        </section>

        <section className='catering-sect1'>
          <div className='cateringsect1-center'>
            <h1>My Catering Services</h1>
            <div className='rule-lined'></div>
            <div className='cater-flex'>
              <div className='cater-set'>
                <img src="cater1.png" alt="" />
                <h3>Wedding Catering</h3>
                <p>Elegant dining experiences tailored for your most romantic day. From plated dinners to whimsical dessert bars.</p>
              </div>
              <div className='cater-set'>
                <img src="cater2.png" alt="" />
                <h3>Corporate Events</h3>
                <p>Professional and polished service for high-stakes meetings, product launches, and company galas.</p>
              </div>
              <div className='cater-set'>
                <img src="cater3.png" alt="" />
                <h3>Private Parties</h3>
                <p>Intimate home gatherings with curated menus that allow you to be a guest at your own party.</p>
              </div>
            </div>
          </div>
        </section>

        <section className='catering-sect2'>
          <h1>Menu Highlights</h1>
          <div className='heading-flex'>
            <p>A glimpse into our signature collection of savory bites and artisan pastries.</p>
            <p onClick={toggleMenu}>
              {showMenu ? 'Hide Full Menu' : 'View Full Menu'}
            </p>
          </div>
          <div>
            {showMenu ? bigMenu() : smallMenu()}
          </div>
        </section>

        <section className='catering-sect3'>
          <div className='cateringsect3-flex'>
            <div  className='cateringflex-text'>
              <h1>Beyond the Plate: The Promise Experience</h1>
              <div className='cateringtext-set'>
               <div className='head-flex'>
                 <img src="plate1.png" alt="" />
                <h3>Meticulous Detail</h3>
               </div>
               <p>Every garnish is placed with intention, and every table setting is styled to perfection.</p>
              </div>
              <div className='cateringtext-set'>
               <div className='head-flex'>
                 <img src="plate2.png" alt="" />
                <h3>Professional Staff</h3>
               </div>
               <p>Our team is trained in fine-dining hospitality, ensuring your guests feel pampered and well-attended.</p>
              </div>
              <div className='cateringtext-set'>
               <div className='head-flex'>
                 <img src="plate3.png" alt="" />
                <h3>Sustainably Sourced</h3>
               </div>
               <p>We partner with local farmers and artisans to bring the freshest, most ethical ingredients to your table.</p>
              </div>
            </div>
            <div className='cateringflex-image'>
              <img src="green-image.png" alt="" />
            </div>
          </div>
        </section>

        <section className='catering-sect4'>
          <h1>Planning Your Event</h1>
          <p className='cater-para'>Four simple steps to a flawless catering experience</p>
          <div className='cateringsect4-center'>
            <div className='sect4center-set'>
              <div>1</div>
              <h3>Consultation</h3>
              <p>We discuss your vision, dietary needs, and event style.</p>
            </div>
             <div className='sect4center-set'>
              <div>2</div>
              <h3>Custom Proposal</h3>
              <p>Receive a tailored menu and transparent pricing quote.</p>
            </div>
             <div className='sect4center-set'>
              <div>3</div>
              <h3>Tasting</h3>
              <p>Sample your chosen menu and finalize every detail.</p>
            </div>
             <div className='sect4center-set'>
              <div>4</div>
              <h3>Execution</h3>
              <p>Relax while our team handles the setup, service, and clean-up.</p>
            </div>
          </div>

          <div className='catering-lastsect'>
            <div className='catering-last'>
              <h1>
                <span>Ready to create something </span>
                <span>unforgettable?</span>
              </h1>
              <p>Dates for the upcoming season are filling fast. Contact us today to secure your event date and begin your bespoke menu design.</p>
              <div className='catering-btns'>
              <button className='cater-but1'>
                <Link to="/contact">Book Me Now</Link>
              </button>
              <button className='cater-but2'>
                <Link to="/https://wa.me/2349060613006">Book a Consultation</Link>
              </button>
            </div>
            </div>
          </div>
        </section>

        <Footer />
    </div>
  )
}

export default Catering

const bigMenu = () => {
   return(
     <div className='big-menu'>
       <img src="menu1.png" alt="" />
       <img src="menu2.png" alt="" />
       <img src="menu3.png" alt="" />
       <img src="menu4.png" alt="" />
       <img src="menu2.png" alt="" />
       <img src="menu3.png" alt="" />
       <img src="menu4.png" alt="" />
       <img src="menu1.png" alt="" />
     </div>
   )
}

const smallMenu = () => {
   return(
     <div className='small-menu'>
       <img src="menu1.png" alt="" />
       <img src="menu2.png" alt="" />
       <img src="menu3.png" alt="" />
       <img src="menu4.png" alt="" />
     </div>
   )
}

