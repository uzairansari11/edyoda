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
    text,
    color,
}) => {
    const handleCheckedValue = () => {
        handleOption(id);
    };

    return (
        <label name="subscription">
            <div
                className={`${id === checkedValue ? styles["selected-container"] : styles.container
                    } ${id === 1 ? styles["additional-class"] : ""}`}
            >
                {text ? (
                    <div className={styles.extraInfo} style={{ backgroundColor: color }}>
                        {text}
                    </div>
                ) : (
                    <></>
                )}

                <div className={`${!text ? styles["main-without-text"] : styles.main}`}>
                    <input
                        type="radio"
                        name="subscription"
                        value={value}
                        onChange={handleCheckedValue}
                        checked={checkedValue === id}
                        disabled={text === "Offer expired"}
                    />

                    <div className={styles.content}>
                        <div>
                            <p className={`${id === 1 ? styles.titleNameFirst : styles.titleName}`}>{title}</p>
                        </div>
                        <div className={styles["main-pricing"]}>
                            <div className={styles.price}>
                                <div>
                                    <p className={styles.total}>Total</p>
                                    <p className={styles.mainPricing}> ₹{totalPrice}</p>
                                </div>
                            </div>
                            <div className={styles.price}>
                                <div>
                                    <p>₹{monthlyPrice} </p>
                                    <p className={styles.month}>/mo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </label>
    );
};

export default PricingOption;
