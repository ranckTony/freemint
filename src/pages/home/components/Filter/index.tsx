import React, { FC } from "react"
import { Button } from "antd";


import styles from "./index.module.css";

interface IProps {
    value: string,
    activeValue: string,
    change: (a: string) => void
    changActive: (a: string) => void
}


const Filter: FC<IProps> = ({ value, activeValue, change, changActive }) => {

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
                <Button onClick={() => changActive("all")} className="bigButton" style={{ width: "124px" }} type={activeValue === "all" ? "primary" : "default"}>All</Button>
                <Button onClick={() => changActive("verified")} className="bigButton" style={{ width: "124px" }} type={activeValue === "verified" ? "primary" : "default"}>Verified</Button>
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
