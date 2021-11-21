import React from "react"
import "../css/offers.css"
import delivery from "../img/delivery.png"
import support from "../img/support (1).png"
import secure from "../img/surface1.png"
import pricetag from "../img/price-tag.png"

export default function Offers() {
  return (
    <div id="offers">
      <div className="container">

        <div className="offer">
          <img src={delivery} alt="offer" />
          <div>
            <h3>FREE SHIPPING</h3>
            <p>For orders from 30000Ks</p>
          </div>
        </div>

        <div className="offer">
          <img src={support} alt="offer" />
          <div>
            <h3>SUPPORT 24/7</h3>
            <p>Call us anytime</p>
          </div>
        </div>

        <div className="offer">
          <img src={secure} alt="offer" />
          <div>
            <h3>100% SAFETY</h3>
            <p>Only secure payments</p>
          </div>
        </div>

        <div className="offer">
          <img src={pricetag} alt="offer" />
          <div>
            <h3>HOT OFFERS</h3>
            <p>Discounts up to 90%</p>
          </div>
        </div>

      </div>
    </div>
  )
}
