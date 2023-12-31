import React from "react";
import styles from "./Highlights.module.css";
import { lists } from "../../utils/highlights";

const Highlights = ({ imgURI, title, iconTitle, slash }) => {
    const words = title.split(" ");
    const firstWord = words[0];
    let lastWord = "";

    if (title === lists[lists.length - 2].title) {
        lastWord = words[words.length - 1];
        words.splice(words.length - 1, 1);
    }

    return (
        <div className={styles.main}>
            <div className={styles.icon}>
                <img className={styles.svg} src={imgURI} alt={title} />
                {iconTitle ? <p className={styles.text}>{iconTitle}</p> : <></>}
                {slash ? <p className={styles.slash}></p> : <></>}
            </div>


            <p>
                <span className={title === lists[lists.length - 2].title ? styles.whiteWord : styles.firstWord}>
                    {firstWord.split("-").join(" ")}
                </span>{" "}
                {words.slice(1).join(" ")}{" "}
                {lastWord && <span className={styles.lastWord}>{lastWord}</span>}
            </p>
        </div>
    );
};

export default Highlights;
