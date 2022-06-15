import React, { FC, useState } from "react"
import { Button } from "antd";
import { HeartOutlined } from '@ant-design/icons';


import styles from "./index.module.css";

const Filter: FC = () => {

    const [active, setActive] = useState("all")
    const [period, setPeriod] = useState("1M")

    const periodList = [{
        text: "1M",
        value: "1M"
    }, {
        text: "5M",
        value: "5M"
    }, {
        text: "15M",
        value: "15M"
    }, {
        text: "30M",
        value: "30M"
    }, {
        text: "1H",
        value: "1H"
    }, {
        text: "6D",
        value: "6D"
    }, {
        text: "12H",
        value: "12H"
    }, {
        text: "1D",
        value: "1D"
    },]



    return (
        <div className={styles.filter}>
            <div className={styles.filterTab}>
                <Button onClick={() => setActive("all")} className="bigButton" style={{ width: "124px" }} type={active === "all" ? "primary" : "default"}>All</Button>
                <Button onClick={() => setActive("verified")} className="bigButton" style={{ width: "124px" }} type={active === "verified" ? "primary" : "default"}>Verified</Button>
                <Button onClick={() => setActive("collection")} className="bigButton" type={active === "collection" ? "primary" : "default"}><HeartOutlined /></Button>
            </div>


            <div className={styles.period}>
                <label htmlFor="">Period:</label>
                <ul>
                    {periodList.map(item => <li onClick={() => setPeriod(item.value)} className={`${item.value === period ? styles.active : ""}`}>{item.text}</li>)}
                </ul>
            </div>

        </div >
    )
}

export default Filter