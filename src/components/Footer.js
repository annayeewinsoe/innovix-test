import React, { useState } from "react"
import "../css/footer.css"
import logo from "../img/Apogee Logo (BG-Black)_without Dimensions.png"
import facebook from "../img/facebook-app-symbol.png"
import viber from "../img/viber (3).png"
import insta from "../img/instagram (2).png"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaEvernote } from "react-icons/fa"

const payment_data = [
  { pic: `${process.env.PUBLIC_URL}/assets/img/payment/asset-3.png` },
  { pic: `${process.env.PUBLIC_URL}/assets/img/payment/0-02-06-456eadbe6170e0f70d18bbe7061faeb8b1d889d0510d888c97c30250d247324b_dafdb7b9.png` },
  { pic: `${process.env.PUBLIC_URL}/assets/img/payment/0-02-06-732a59c415b5e24b405a7b62d3b4bf1316c0c9b9380c3aa34c086a1c04d9e60c_45b83584.png` },
  { pic: `${process.env.PUBLIC_URL}/assets/img/payment/kbz.png` },
  { pic: `${process.env.PUBLIC_URL}/assets/img/payment/asset-2.png` },
  { pic: `${process.env.PUBLIC_URL}/assets/img/payment/asset-3.png` },
  { pic: `${process.env.PUBLIC_URL}/assets/img/payment/0-02-06-456eadbe6170e0f70d18bbe7061faeb8b1d889d0510d888c97c30250d247324b_dafdb7b9.png` },
  { pic: `${process.env.PUBLIC_URL}/assets/img/payment/0-02-06-732a59c415b5e24b405a7b62d3b4bf1316c0c9b9380c3aa34c086a1c04d9e60c_45b83584.png` },
]

export default function Footer() {
  const [payments, setPayments] = useState(payment_data)

  return (
    <>
      <footer>
        <div className="container">
          <img src={logo} alt="apogee" />
        </div>

        <div className="container">

          <div id="contacts">
            <p>
              <FaMapMarkerAlt color="#FFFFFF" size="25px" className="icon" />
              No 23, Yadana Street, 16/2 Ward, Thingangyun Township, Yangon, Myanmar.
            </p>
            <p>
              <FaPhoneAlt color="#FFFFFF" size="25px" className="icon" />
              +95 9xxxxxxxxx, +959xxxxxxxxx
            </p>
            <p>
              <FaEnvelope color="#FFFFFF" size="25px" className="icon" />
              xxxxxxxxx@xxxxxxxxxxx.com
            </p>
            <div id="social-media">
              <div className="social">
                <img src={facebook} alt="social" />
              </div>
              <div className="social">
                <img src={viber} alt="social" />
              </div>
              <div className="social">
                <img src={insta} alt="social" />
              </div>
            </div>
          </div>

          <div>
            <h3>Information</h3>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h3>Customer Service</h3>
            <ul>
              <li>Service Ticket</li>
              <li>Home Service</li>
              <li>Express Service</li>
            </ul>
          </div>

          <div id="payments">
            <h3>Payment Type</h3>
            {payments.map((p, index) => (
              <img src={p.pic} alt="payment" key={index} />
            ))}
          </div>

        </div>
      </footer>

      <div className="copyright">
        Copyright © Steadfast 2020. Powered by <span>Innovix Digital.</span>
      </div>
    </>
  )
}
