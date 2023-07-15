import styles from "./Payment.module.css";
import Highlights from "../../components/highlight/Highlights";
import { lists } from "../../utils/highlights";
import PaymentSection from "../../components/paymentSection/PaymentSection";
import Offer from "../../components/offer/Offer";
import paymentlogo from "../../assest/images/Frame 12537.png"
const Payment = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles["payment-left-section"]}>
          <p>Access curated courses worth</p>
          <p>₹ 18,500 at just ₹ 99 per year!</p>
          <div className={styles.listing}>
            {lists.length &&
              lists.map((ele) => <Highlights key={ele.id} {...ele} />)}
          </div>
        </div>
        <div className={styles["payment-right-section"]}>
          <PaymentSection />
          <div className={styles.subscription}>
            <p>Subscription Fee</p>
            <p>₹18,500</p>
          </div>
          <Offer />
          <div className={styles.subscription}>
            <p>Total (Incl. of 18% GST)</p>
            <p>₹149</p>
          </div>
          <div className={styles.buttons}>
            <button className={styles["secondary-button"]}>CANCEL</button>
            <button className={styles["primary-button"]}>PROCEED TO PAY</button>
          </div>
          <img src={paymentlogo} alt="payment logo" />
        </div>
      </div>
    </div>
  );
};

export default Payment;
