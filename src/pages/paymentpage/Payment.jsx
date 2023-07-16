import Highlights from "../../components/highlight/Highlights";
import PaymentSection from "../../components/paymentSection/PaymentSection";
import { lists } from "../../utils/highlights";
import styles from "./Payment.module.css";
const Payment = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles["payment-left-section"]}>
          <div>
            <p>Access curated courses worth</p>
            <p>
              <span
                style={{
                  textDecoration: "line-through",
                  textDecorationColor: "red",
                  marginRight: "8px",
                }}
              >
                ₹ 18,500
              </span>
              at just <span style={{ color: "#0096FF" }}>₹ 99</span> per year!
            </p>
          </div>

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
