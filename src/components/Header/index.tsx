import React, { FC } from "react"
import { Button, Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import styles from "./index.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                LOGO
            </div>
            <div className={styles.search}>
                <Input className="headerInput" placeholder="Search" prefix={<SearchOutlined />} />
            </div>
            <div className={styles.wallet}>
                <Button className="headerWallet" type="primary">Connect Wallet</Button>

            </div>
        </div>
    )
}