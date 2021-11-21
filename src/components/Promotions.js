import React, { useState } from "react"
import "../css/promotions.css"

const promo_data = [
  {
    name: "Product Name",
    discount: "30% OFF",
    text: "Lorem Ipsum Is Simply Dummy Text Of The Printing",
    pic: `${process.env.PUBLIC_URL}/assets/img/6d379a026f8b--mothers.png`
  },
  {
    name: "Product Name",
    discount: "20% OFF",
    text: "Lorem Ipsum Is Simply Dummy Text Of The Printing",
    pic: `${process.env.PUBLIC_URL}/assets/img/47a939a8fb07--Application-TireAndWheel.png`
  }
]

export default function Promotions() {
  const [items, setItems] = useState(promo_data)
  return (
    <div className="promotions">
      <div className="container">

        <div className="promo-items">
          {items.map((item, index) => (
            <div className="promo-item" key={index}>
              <div>
                <h3>{item.name}</h3>
                <h2>{item.discount}</h2>
                <p>{item.text}</p>
              </div>
              <img src={item.pic} />
            </div>
          ))}
        </div>

        <div className="all-promotions">
          <h3>All Promotions</h3>
        </div>
      </div>
    </div>
  )
}
