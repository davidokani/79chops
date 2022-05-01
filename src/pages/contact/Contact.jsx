import React from 'react'
import { Link } from 'react-router-dom'
import './contact.css'

const Contact = () => {
  return (
    <div>
      <h1>Contact page</h1>
      <div className='contact-pic'>
        <img src='/images/pic2.jpg' alt='img2' />
      </div>
      <p>
        We hope to always serve you the best at every meal eaten here because
        the food eaten here by our customers are made from some of the best
        cooks in the country. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam facere suscipit tempore, dignissimos sit architecto
        facilis exercitationem beatae. Culpa quo rem eveniet molestias deserunt
        enim voluptatibus modi molestiae? Ipsa, tempore!
      </p>
      <p>To contact or reach out to us,please see the details below: </p>
      <h3>79chops contact form</h3>
      <div class='content-input'>
        <div class='container'>
          <form action=''>
            <label for='name'>Name</label>
            <br />

            <input
              type='text'
              placeholder='Enter Name'
              class='contact__input'
              required
            />
            <br />

            <label for='email'>Email</label>
            <br />

            <input
              type='mail'
              placeholder='Enter Email'
              class='contact__input'
              required
            />
            <br />

            <label for='message'>Messeage</label>
            <br />

            <textarea
              name=''
              id=''
              cols='25'
              rows='10'
              class='contact__input'
              required
            ></textarea>

            <br />

            <input type='submit' value='Send' class='contact_input button' />
          </form>
        </div>
      </div>
    </div>
  )
}
export default Contact
