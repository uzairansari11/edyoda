import React from "react";
import styles from "./PricingOption.module.css";

const PricingOption = ({
    id,
    title,
    totalPrice,
    monthlyPrice,
    value,
    handleOption,
    checkedValue,
}) => {
    const handleCheckedValue = () => {
        handleOption(id);
    };

    return (
        <label name='subscription'>
            <div
                className={`${id === checkedValue ? styles.containerSelected : styles.container
                    }`}
            >
                <div>
                    <input
                        type="radio"
                        name="subscription"
                        value={value}
                        onChange={handleCheckedValue}
                        checked={checkedValue === id}
                        disabled={id === 1}
                    />
                </div>
                <div className={styles.content}>
                    <div>
                        <p>{title}</p>
                    </div>
                    <div className={styles["main-pricing"]}>
                        <div className={styles.price}>
                            <div>
                                <p>Total {totalPrice}</p>
                            </div>
                        </div>
                        <div className={styles.price}>
                            <div>
                                <p>{monthlyPrice} /mo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </label>
    );
};

export default PricingOption;
