import "./Contact.css";
import BlurTextUsage from "./blurText/BlurTextUsage";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Contact() {
  return (
    <div className="contact-container" id="contact">
      <h1>
        <span>Contact</span> Me
      </h1>
      <BlurTextUsage />
      <div className="cont-parent">
        <div className="form-wrapper">
          <h2>Send a Message</h2>
          <form action="https://formspree.io/f/xqawrzlp" method="POST">
            <input
              type="text"
              name="name"
              placeholder="Your Name ..."
              required
            />
            <input type="tel" name="phone" placeholder="Your Phone +20 ..." />
            <input type="email" name="email" placeholder="Your Email @..." />
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your Message"></textarea>
            <button type="submit">Send Message ✈</button>
          </form>
        </div>
        <div className="footer-container">
          <div className="end-con">
            <p>If you're curious about my other designs send me</p>
            <p>In this site i used react.JS</p>
          </div>
          <div className="con-info">
            <h2>Contact Information</h2>
            <div>
              <p>Phone</p>
              <span> +20 109 214 5163</span>
            </div>
            <div>
              <p>Email</p>
              <a href="mailto:ahmed_kh_99@outlook.com">
                ahmed_kh_99@outlook.com
              </a>
            </div>
            <div>
              <p>Location</p>
              <p>Giza, Egypt</p>
            </div>
            <div className="soc-icons">
              <a href="https://github.com/ahmedkhld99">
                <FaGithub />
              </a>
              <a href="https://wa.me/+201092145163" target="_blank">
                <IoLogoWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
