import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [mailId, setMailId] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [textBoxCon, setTextBoxCon] = useState('');

//   const sendEmail = (e) => {
//     e.preventDefault();
//     // Logic for sending the email
//   };

  return (
    
      <section className="contact section" id="contact">
        <h2 className="section_title">Contact Me</h2>
        <span className="section_subtitle">Get in Touch</span>

        <div className="contact_container container grid">
          <div className='myinfo'>
            {/* Phone Number */}
            <div className="contact_information">
              <i className="uil uil-phone contact_icon"></i>
              <div>
                <h3 className="contact_title">Call Me</h3>
                <span className="contact_Subtitle">+91 9315580820</span>
              </div>
            </div>

            {/* Email Address */}
            <div className="contact_information">
              <i className="uil uil-envelope contact_icon"></i>
              <div>
                <h3 className="contact_title">Email</h3>
                <span className="contact_Subtitle">singhpiyush1805@gmail.com</span>
              </div>
            </div>

            <div className="contact_information">
              <i className="uil uil-location-point contact_icon"></i>
              <div>
                <h3 className="contact_title">Location</h3>
                <span className="contact_Subtitle">Delhi - India</span>
              </div>
            </div>
          </div>

          <form  className="contact_form grid" method="post">
            <div className="contact_inputs grid">
              <div className="contact_content">
                <label htmlFor="name" className="contact_label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="contact_input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Write your name Here'
                />
              </div>

              <div className="contact_content">
                <label htmlFor="email" className="contact_label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="contact_input"
                  value={mailId}
                  onChange={(e) => setMailId(e.target.value)}
                  placeholder='Write your Email Id Here'
                />
              </div>
            </div>

            <div className="contact_content">
              <label htmlFor="phone" className="contact_label">
                Contact
              </label>
              <input
                type="number"
                id="phone"
                className="contact_input"
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder='Write your Phone Number Here'
              />
            </div>

            <div className="contact_content">
              <label htmlFor="message" className="contact_label">
                Message
              </label>
              <textarea
                id="message"
                cols="0"
                rows="7"
                className="contact_input"
                value={textBoxCon}
                onChange={(e) => setTextBoxCon(e.target.value)}
                placeholder='Write the message Here'
              ></textarea>
            </div>

            <div>
              <button type="submit" className="button button--flex buttonhover">
                Send Message
                <i className="uil uil-message button_icon"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
    
  );
};

export default Contact;
