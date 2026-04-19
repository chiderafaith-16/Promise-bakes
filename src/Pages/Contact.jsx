import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import '../styles/contact.css'
import emailjs from '@emailjs/browser'

emailjs.init('pm3wVgjx77PBqB1FD')

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', date: '', eventType: '', guests: '', details: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.send(
      'service_1zcuybr',
      'template_wa7sgmv',
      {
        name: form.name,
        email: form.email,
        date: form.date,
        eventType: form.eventType,
        guests: form.guests,
        details: form.details,
      },
      'pm3wVgjx77PBqB1FD'
    ).then(() => {
      setSubmitted(true)
    }).catch((error) => {
      console.error('EmailJS error:', error)
    })
  }

  return (
    <div>
        <Navbar />

        <section className='contact-sect'>
          <h1 className='contact-head'>Get in Touch</h1>
          <p className='contact-para'>Whether it's a dream wedding or an intimate celebration, let us make your special day even sweeter.</p>
          <div className='contact-flex'>
            <div className='contact-flex1'>
              <div className='image-flex'>
                <img src="contact-Icon.png" alt="" />
                <h3>Contact Information</h3>
              </div>
              <div className='contact-line'></div>
              <div className='contact-set'>
                <p>Address</p>
                <p>42 Nwobodo nnam str. maryland, Enugu, Nigeria</p>
              </div>
              <div className='contact-line'></div>
              <div className='contact-set'>
                <p>Phone</p>
                <p>+234 9060613006</p>
              </div>
              <div className='contact-line'></div>
              <div className='contact-set'>
                <p>Email</p>
                <p>mgbachipromise@gmail.com</p>
              </div>
              <div className='contact-line'></div>
              <div className='contact-set'>
                <p>Hours</p>
                <div className='set'>
                  <p>Mon-Sat: 9am - 6pm</p>
                  <p>Sunday: Closed (Event Delivery Only)</p>
                </div>
              </div>
              <div className='contact-line'></div>
              <h6>Connect with us</h6>
              <div className='contact-image'>
                <img src="whatsapp.png" alt="" />
                <img src="instagram.png" alt="" />
                <img src="tiktok.png" alt="" />
              </div>
              <div className='last-image'>
                <p className='paraa'>April 2025</p>
                <p className='paraa2'>Crafting edible art for a decade.</p>
              </div>
            </div>
            <div className='contact-flex2'>
              {submitted ? (
                <div>
                  <h2>Inquiry Sent! 🎉</h2>
                  <p>Thank you! We'll get back to you within 48 hours.</p>
                </div>
              ) : (
              <form onSubmit={handleSubmit}>
                <h2>Event Booking Inquiry</h2>
                <div className='form-input'>
                  <div className='input-flex'>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder='John Doe' required />
                  </div>
                 <div className='input-flex'>
                   <label htmlFor="email">Email Address</label>
                   <input type="email" name="email" value={form.email} onChange={handleChange} placeholder='jane@example.com' required/>
                 </div>
                </div>
                <div className='form-input'>
                  <div className='input-flex'>
                    <label htmlFor="date">Event Date</label>
                    <input type="date" name="date" value={form.date} onChange={handleChange} placeholder='mm/dd/yyyy' required/>
                  </div>
                 <div className='input-flex'>
                   <label htmlFor="text">Event Type</label>
                  <input type="text" name="eventType" value={form.eventType} onChange={handleChange} placeholder='Wedding' required/>
                 </div>
                </div>
                <div className='guest'>
                  <label htmlFor="number">Approximate Guest Count</label>
                  <input type="number" name="guests" value={form.guests} onChange={handleChange} placeholder='50' required/>
                </div>
                <div className='detail'>
                  <label htmlFor="details">Event Details & Requests</label>
                <input type="text" name="details" value={form.details} onChange={handleChange} placeholder='Tell us about your vision, flavors, and any dietary requirements...'  required/>
                </div>
                <button className='contact-button'>
                  Send Inquiry
                  <img src="submit-icon.png" alt="" />
                </button>
                <p className='last-paraa'>By submitting, you agree to our booking terms and conditions.</p>
              </form>
              )}
            </div>
          </div>
        </section>

        <Footer />
    </div>
  )
}

export default Contact