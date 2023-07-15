import React, { useEffect, useState } from "react";
import styles from "./PaymentSection.module.css";
import PricingOption from "../pricingOption/PriceOption";
import { pricingOptions } from "../../utils/subscription";

const PaymentSection = () => {
    const [checkedValue, setCheckedValue] = useState(2);

    const handleOption = (data) => {
        setCheckedValue(data);
    };
    useEffect(() => {

    }, [checkedValue])
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
            {pricingOptions.map((option) => (
                <PricingOption
                    key={option.id}
                    {...option}
                    handleOption={handleOption}
                    checkedValue={checkedValue}

                />
            ))}
            <hr />
        </div>
    );
};

export default PaymentSection;
