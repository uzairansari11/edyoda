import React from "react";
import styles from "./PaymentSection.module.css";
import PricingOption from "../pricingOption/PriceOption";
const PaymentSection = () => {
    return (
        <div className={styles.container}>
            {/* first div */}
            <div className={styles["signup-subscribe-section"]}>
                {/* sign in section */}
                <div>
                    <div>
                        <p>1</p>
                    </div>
                    <div>
                        <p>Sign Up</p>
                    </div>
                   
                </div>
                {/* sign up section */}

                <div>
                    <div>
                        <p>2</p>
                    </div>
                    <div>
                        <p>Subscribe</p>

                    </div>
                </div>
            </div>
            <p>Select your subcription plan</p>
            
            <PricingOption />
            <PricingOption />
            <PricingOption />
            <PricingOption />
<hr/>
        </div>
    );
};

export default PaymentSection;
