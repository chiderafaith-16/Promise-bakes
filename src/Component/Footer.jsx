import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";



const Footer = () => {
  return (
   <section className='footer'>
       <div className='sect1'>
           <div className='sect-flex'>
                <div className='set1'>
                <div className='logos'>
                    <img src="logo.jpeg" alt="" />
                    <h3>Ogechi Promise</h3>
               </div>
               <p>Elevating life's celebrations through the
                  art of fine pastry. Handcrafted daily in
                  our boutique atelier.
                </p>
                <div className='images'>
                    <img src="whatsapp.png" alt="" />
                    <img src="tiktok.png" alt="" />
                    <img src="instagram.png" alt="" />
                </div>
               </div>
               <div className='set2'>
               <h4>QUICK LINKS</h4>
               <ul>
                  <li>Gallery</li>
                  <li>About</li>
                  <li>Catering</li>
                  <li>Pastries</li>
               </ul>
               </div>
               <div className='set3'>
               <h4>CONTACTS</h4>
               <p>
                  <span><MdOutlineLocationOn /></span>
                  <span>42 Nwobodo nnam street, maryland, Enugu state, Nigeria.</span>
               </p>
               <p>
                  <span><MdOutlineLocalPhone /></span>
                  <span>+234 90606130006</span>
              </p>
              <p>
                   <span><IoTimeOutline /></span>
                   <span>Monday - saturday 8am - 10pm</span>
              </p>
              </div>
              <div className='set4'>
                <h4>NEWSLETTER</h4>
                <p>Join our inner circle for exclusive
                     flavors and event invites.
                </p>
                <div>
                     <input type="text"  placeholder='Email address'/>
                     <button>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='rule-line'></div>
        <p className='para'>© 2026 Ogechi Promise Cakes. All rights reserved. Taste meets Class.</p>
    </div>
   </section>
  )
}

export default Footer
