import React from "react";
import styles from "./Payment.module.css";
import Highlights from "../../components/highlight/Highlights";
const Payment = () => {
  return (
    <div className={styles.container}>
      <div>
        <p>Access curated courses worth</p>
        <div>
          <p>₹ 18,500
            at just ₹ 99 per year!
          </p>
        </div>
        <Highlights />
      </div>
    </div>
  );
};

export default Payment;
