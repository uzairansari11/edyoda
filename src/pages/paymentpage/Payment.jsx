import Highlights from "../../components/highlight/Highlights";
import PaymentSection from "../../components/paymentSection/PaymentSection";
import { lists } from "../../utils/highlights";
import styles from "./Payment.module.css";
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

        </div>
      </div>
    </div>
  );
};

export default Payment;
