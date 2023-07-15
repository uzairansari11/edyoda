import React from 'react'
import styles from "./Offer.module.css"
import EndTime from "../../assest/SVG/EndTime.svg"

const Offer = () => {

  return (
    <div className={styles.main}>
      <div>
        <p>Limited time offer</p>
        <p>- ₹18,401</p>
      </div>
      <div>
        <img src={EndTime} alt="time icon" />
        <p>Offer valid till 25th March 2023 </p>
      </div>
    </div>
  )
}

export default Offer