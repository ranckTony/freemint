import React, { FC, useState } from "react"
import { Button } from "antd";


import styles from "./index.module.css";

interface IProps {
    value: string,
    change: (a: string) => void
}


const Filter: FC<IProps> = ({ value, change }) => {



    const [active, setActive] = useState("all")

    const periodList = [{
        text: "1M",
        value: "MINUTE_01"
    }, {
        text: "5M",
        value: "MINUTE_05"
    }, {
        text: "15M",
        value: "MINUTE_15"
    }, {
        text: "30M",
        value: "MINUTE_30"
    }, {
        text: "1H",
        value: "HOUR_01"
    }, {
        text: "6H",
        value: "HOUR_06"
    }, {
        text: "12H",
        value: "HOUR_12"
    }, {
        text: "24H",
        value: "HOUR_24"
    },]



    return (
        <div className={styles.filter}>
            <div className={styles.filterTab}>
                <Button onClick={() => setActive("all")} className="bigButton" style={{ width: "124px" }} type={active === "all" ? "primary" : "default"}>All</Button>
                <Button onClick={() => setActive("verified")} className="bigButton" style={{ width: "124px" }} type={active === "verified" ? "primary" : "default"}>Verified</Button>
            </div>
            <span className={styles.blockDelay}>区块延时：0.5s</span>
            <div className={styles.period}>
                <label htmlFor="">Period:</label>
                <ul>
                    {periodList.map(item => <li onClick={() => change(item.value)} className={`${item.value === value ? styles.active : ""}`}>{item.text}</li>)}
                </ul>
            </div>
        </div >
    )
}

export default Filter