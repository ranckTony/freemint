import React, { FC } from "react"
import { TwitterOutlined, MailFilled } from '@ant-design/icons';

import styles from "./index.module.css";

const Footer: FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.copyright}>
                © Elserare, Inc. All rights reserved.
            </div>
            <div className={styles.message}>
                <div className={styles.icon}>
                    <TwitterOutlined />
                </div>
                <div className={styles.icon}>
                    <MailFilled />
                </div>
            </div>

        </div>
    )
}

export default Footer