import React, { useState } from "react"
import "../css/categories.css"

const category_data = [
  {
    pic: `${process.env.PUBLIC_URL}/assets/img/categories/engine.png`,
    text: "Automotive"
  },
  {
    pic: `${process.env.PUBLIC_URL}/assets/img/categories/7-150x150.png`,
    text: "Auto Care"
  },
  {
    pic: `${process.env.PUBLIC_URL}/assets/img/categories/cart-part.png`,
    text: "Auto Electronics"
  },
  {
    pic: `${process.env.PUBLIC_URL}/assets/img/categories/5-150x150.png`,
    text: "Tire & Wheel"
  },
  {
    pic: `${process.env.PUBLIC_URL}/assets/img/categories/car-battery-jumper-cables_41929-427.png`,
    text: "Car Battery"
  },
  {
    pic: `${process.env.PUBLIC_URL}/assets/img/categories/selection10.png`,
    text: "Oil & Lubricant"
  },
  {
    pic: `${process.env.PUBLIC_URL}/assets/img/categories/perfume.png`,
    text: "Moto Parts & Accessories"
  },
  {
    pic: `${process.env.PUBLIC_URL}/assets/img/categories/Untitled-7-300x300.png`,
    text: "Motorcycle Riding Gear"
  },
  {
    pic: `${process.env.PUBLIC_URL}/assets/img/categories/sticker.png`,
    text: "Sticker"
  },
  {
    pic: `${process.env.PUBLIC_URL}/assets/img/categories/avmfcvts5rnr8mrwahvs_600x.png`,
    text: "Car Paint"
  },
]

export default function Categories() {
  const [categories, setCategories] = useState(category_data)

  return (
    <div id="categories">
      <div className="container">

        <h1>CATEGORIES</h1>

        {categories.map((c, index) => (
          <div className="category" key={index}>
            <img src={c.pic} alt="category" />
            <h4>{c.text}</h4>
          </div>
        ))}


      </div>
    </div>
  )
}
