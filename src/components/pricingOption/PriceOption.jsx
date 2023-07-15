import styles from "./PricingOption.module.css";

const PricingOption = () => {
    return (
        <div className={styles.container}>
            <div>
                <input type="radio" />
            </div>
            <div className={styles.content}>
                <div>
                    <p>12 Months Subscription </p>
                </div>
                <div className={styles["main-pricing"]}>
                    <div className={styles.price}>
                        <div>
                            <p>Total 99</p>
                        </div>
                    </div>
                    <div className={styles.price}>
                        <div>
                            <p>8 /mo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingOption;
