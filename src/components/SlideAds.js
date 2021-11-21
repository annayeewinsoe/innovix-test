import React, { useState, useRef } from "react"
import Carousel from "react-elastic-carousel"
import "../css/slideAds.css"

const ad_list = [
  { ad: `${process.env.PUBLIC_URL}/assets/img/ad1.png` },
  { ad: `${process.env.PUBLIC_URL}/assets/img/ad2.png` },
  { ad: `${process.env.PUBLIC_URL}/assets/img/ad3.png` },
]

export default function SlideAds() {
  const [ads, setAds] = useState(ad_list)
  const carouselRef = useRef(null);
  let resetTimeout;

  return (
    <div className="slide-ads">
      <Carousel enableAutoPlay autoPlaySpeed={2000} itemsToShow={1} itemsToScroll={1} outerSpacing={0} ref={carouselRef} itemPadding={[0, 0]}
        onNextEnd={({ index }) => {
          clearTimeout(resetTimeout)
          if (index + 1 === ads.length) {
            resetTimeout = setTimeout(() => {
              carouselRef.current.goTo(0)
            }, 2000) // same time
          }
        }} >
        {ads.map((ad, index) => (
          <img src={ad.ad} alt="ads" key={index} />
        ))}
      </Carousel>
    </div>
  )
}
