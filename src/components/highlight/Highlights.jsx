import React from "react";
import styles from "./Highlights.module.css";
const Highlights = ({imgURI,title}) => {
    return (
        <div className={styles.main}>
            <img className={styles.svg} src={imgURI} alt={title} />
            <p>{title}</p>
        </div>
    );
};

export default Highlights;
