import React, { useEffect, useState } from "react";
import paymentlogo from "../../assest/images/Frame 12537.png";
import { pricingOptions } from "../../utils/subscription";
import Offer from "../offer/Offer";
import PricingOption from "../pricingOption/PriceOption";
import styles from "./PaymentSection.module.css";

const PaymentSection = () => {
    const [checkedValue, setCheckedValue] = useState(2);
    const handleOption = (data) => {
        setCheckedValue(data);
    };
    useEffect(() => { }, [checkedValue]);
    return (
        <div className={styles.container}>
            <div className={styles["signup-subscribe-section"]}>
                <div>
                    <div>
                        <p>1</p>
                    </div>
                    <div>
                        <p>Sign Up</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>2</p>
                    </div>
                    <div>
                        <p>Subscribe</p>
                    </div>
                </div>
            </div>
            <p className={styles.subscriptionplan}>Select your subscription plan</p>
            <div className={styles["pricing-options-container"]}>
                {pricingOptions.map((option) => (
                    <PricingOption
                        key={option.id}
                        {...option}
                        handleOption={handleOption}
                        checkedValue={checkedValue}
                    />
                ))}
            </div>

            <hr />
            <div className={styles.subscription}>
                <p>Subscription Fee</p>
                <p>₹18,500</p>
            </div>
            <Offer />
            <div className={styles.subscription}>
                <p>

                    <span className={styles.total}>Total</span> (Incl. of 18% GST)</p>
                <p className={styles.finalPricing}>
                    ₹{pricingOptions.find((ele) => ele.id === checkedValue)?.totalPrice}
                </p>
            </div>
            <div className={styles.buttons}>
                <button className={styles["secondary-button"]}>CANCEL</button>
                <button className={styles["primary-button"]}>PROCEED TO PAY</button>
            </div>
            <img src={paymentlogo} alt="payment logo" />
        </div>
    );
};

export default PaymentSection;
