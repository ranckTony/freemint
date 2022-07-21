import React, { FC } from "react"
import { Button } from "antd";
import useUrlState from '@ahooksjs/use-url-state';

import styles from "./index.module.css";

interface IProps {
    activeValue: string,
    changePeriod: (a: string) => void
    changActive: (a: string) => void
}


const Filter: FC<IProps> = ({activeValue, changePeriod, changActive }) => {

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

    const [urlPeriodParam, setUrlPeriodParam] = useUrlState({ period: 'HOUR_01' });

    const periodChange = (item: any) => {
        if(item.value === 'MINUTE_01') return;
        changePeriod(item.value)
        setUrlPeriodParam({period: item.value})
    }

    return (
        <div className={styles.filter}>
            <div className={styles.filterTab}>
                <Button type="primary" onClick={() => changActive("all")}  className={activeValue === "all" ? styles.filterActive : styles.filterUnActive}>All</Button>
                <Button type="primary" onClick={() => changActive("verified")} className={activeValue === "verified" ? styles.filterActive : styles.filterUnActive}>Verified</Button>
            </div>
            <div className={styles.period}>
                <label htmlFor="">Period:</label>
                <ul>
                    {periodList.map(item => <li onClick={() => periodChange(item)} className={`${item.value === urlPeriodParam.period ? styles.active : ""}`}>{item.text}</li>)}
                </ul>
            </div>
        </div >
    )
}

export default Filter
