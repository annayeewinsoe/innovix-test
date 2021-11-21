import React, { useState } from "react"
import "../css/services.css"
import service from "../img/service1.png"

const service_data = [
  {
    pic: `${process.env.PUBLIC_URL}/assets/img/services/hands-mechanic-using-diagnostic-tool-flip.png`,
    service: "Service Ticket",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    pic: `${process.env.PUBLIC_URL}/assets/img/services/car-service-worker-polishing-car-wheels-with-microfiber-cloth.png`,
    service: "Home Service",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    pic: `${process.env.PUBLIC_URL}/assets/img/services/muscular-car-service-worker-repairing-vehicle.png`,
    service: "Express Service",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
]

export default function Services() {
  const [services, setServices] = useState(service_data)

  return (
    <div id="services">
      <div className="container">
        {services.map((s, index) => (
          <div className="service" key={index}>
            <img src={service} alt="services" className="service1" />
            <img src={s.pic} alt="services" />
            <div>
              <h3>{s.service}</h3>
              <p>{s.text}</p>
            </div>
            <button>Explore More</button>
          </div>
        ))}
      </div>
    </div>
  )
}
