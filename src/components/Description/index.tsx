import React, { FC } from "react"
import { Button, Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import styles from "./index.module.css";

export default function Description() {
    return (
        <div className={styles.descrip}>
           <div>
            <h1>Discover Freemint NFT projects minting now </h1>
            <p>Professional monitor real time ERC-721 free mints down to the minute</p>
           </div>

           <div className={styles.gasfree}>
            <h3>Gas fee now</h3>
            <div className={styles.gasfreeContent}>
                <i></i>
                <strong>0.02</strong>
                <span>$20</span>
            </div>
           </div>
        </div>
    )
}