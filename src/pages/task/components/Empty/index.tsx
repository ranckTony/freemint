import React, { FC } from "react"
import { Button, Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import styles from "./index.module.less";
import eth from "@/assets/eth.png";

export default function Empty() {
    return (
        <div className={styles.empty}>
            <h1 >Create my first Task</h1>
          <Button type="primary">Start New Task</Button>
        </div>
    )
}