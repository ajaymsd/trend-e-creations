import React from 'react'
import './contact.css';
function Contact() {
  return (
    <div>
                <div class="contact container">
            <form>
                <div class="form">
                    <div class="form-txt">
                        <h1>Contact Us</h1>
                        <span>As you might expect of a company that began as a high-end interiors contractor, we pay strict
                        attention.</span>
                        <h3>Address</h3>
                        <p>Jaihindpuram 2nd main road<br></br>+91 97511 86737</p>
                        <h3>Email</h3>
                        <p>trend-e-creations@gmail.com</p>
                    </div>
                    <div class="form-details">
                        <input type="text" name="name" id="name" placeholder="Name" required></input>
                        <input type="email" name="email" id="email" placeholder="Email" required></input>
                        <textarea name="message" id="message" cols="52" rows="7" placeholder="Message" required></textarea>
                        <button>SEND MESSAGE</button>
                    </div>
                </div>
            </form>
        </div>

        <section class="map_sec">
        <div class="container">
            <div class="row">
                <div class="col-md-10 offset-md-1">
                    <div class="map_inner">
                        <h4>Find Us on Google Map</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi assumenda, expedita aliquam minima tenetur maiores neque incidunt repellat aut voluptas hic dolorem sequi ab porro, quia error.</p>
                        <div class="map_bind">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.336986670076!2d78.10452397612636!3d9.905865990194807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c57e1ef33f87%3A0xc387fb0ad3799e55!2sJaihindpuram%202nd%20Main%20Rd%2C%20Madurai%2C%20Tamil%20Nadu%20625011!5e0!3m2!1sen!2sin!4v1697354472769!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Contact