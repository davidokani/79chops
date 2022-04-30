import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div>
      <h1>Contact page</h1>
      <p>We hope to always serve you the best at every meal eaten here because the food eaten here by our customers are made from some of the best cooks in the country</p>
      <p>To contact or reach out to us,please see the details below: </p>
      <h3>79chops contact form</h3>
      <fieldset>
        <label for="name">Name: </label><br />
        <input type="text" name="" id="name" value="" required="" placeholder="your full name" />
        <br />

        <label for="company">Company: </label><br />
        <input type="text" name="" id="company" value="" required="" placeholder="your company" />
        <br />

        <label for="email">Email: </label><br />
        <input type="email" name="" id="email" value="" required="" placeholder="your email" /><br />
        <br />

        <label for="contact">Telephone: </label><br />
        <input type="number" name="" id="contact" value="" required="" placeholder="your telephone" /><br />
        <br />

        <textarea placeholder="your message to us..." class="box" cols="30" rows="10" required></textarea>
        <br /><br />
        <button type="submit">Submit Message</button>
        <h3>Subscribe!</h3>

        <label for="mail">Email Address: </label><br />
        <input type="text" name="" id="mail" value="" required="" /><br />

        <br />
        <button type="submit">Subscribe</button>
      </fieldset>

      <h3>Stay in Touch!</h3>
      <a href="#">Instagram</a><br />
      <a href="#">Twitter</a><br />
      <a href="#">Linkedln</a><br />

    </div>
  );
}

export default Contact
