import React, { useState } from "react"
import "../css/products.css"
import Carousel from "react-elastic-carousel"

const products_data = [
  {
    pic: `${process.env.PUBLIC_URL}/assets/img/products/avmfcvts5rnr8mrwahvs_600x.png`,
    percent: "-20%",
    name: "Back-to-Black Heavy Duty Trim Cleaner Kit",
    price: "28000 Ks",
    oldPrice: "35000 Ks"
  },
  {
    pic: `${process.env.PUBLIC_URL}/assets/img/products/kaamntyjhpgl0f2qbtmi_600x.png`,
    percent: "-20%",
    name: "Back-to-Black Tire Shine",
    price: "28000 Ks",
    oldPrice: "35000 Ks"
  },
  {
    pic: `${process.env.PUBLIC_URL}/assets/img/products/y53xlw4wtzll7zx4vds2_600x.png`,
    percent: "-20%",
    name: "Back-to-Black Trim & Plastic Restorer",
    price: "28000 Ks",
    oldPrice: "35000 Ks"
  },
  {
    pic: `${process.env.PUBLIC_URL}/assets/img/products/tjbpuoy6nievpe2dhqcy_600x.png`,
    percent: "-20%",
    name: "Trim & Plastic Restorer - Aerosol",
    price: "28000 Ks",
    oldPrice: "35000 Ks"
  },
]

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 3 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 4 },
]

export default function Products() {
  const [products, setProducts] = useState(products_data)

  return (
    <div className="products">
      <div className="container">

        <h1><span className="black">LATEST</span> <span className="primary">PRODUCTS</span></h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>

        <Carousel breakPoints={breakPoints}>
          {products.map((p, index) => (
            <div className="product" key={index}>
              <div>
                <img src={p.pic} alt="product" />
              </div>
              <div>{p.percent}</div>
              <h3>{p.name}</h3>
              <h3>
                <span className="primary">{p.price}</span>
                <span className="old-price">{p.oldPrice}</span>
              </h3>
            </div>
          ))}
        </Carousel>

        <img src={`${process.env.PUBLIC_URL}/assets/img/1170x250.png`} alt="ad" />

      </div>
    </div>
  )
}
