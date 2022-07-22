import React, { FC } from "react"
import { Modal } from "antd";
import styles from "./index.module.less";
import {TaskDataType} from "@/typings";
import eth from "@/assets/eth.png";

interface IProps {
    detailVisible: boolean,
    changeVisible: (a: boolean) => void
    record: TaskDataType
}


const DetailModal: FC<IProps> = ({detailVisible, changeVisible, record }) => {
    return (
        <Modal
            centered
            visible={detailVisible}
            onCancel={() => changeVisible(false)}
            footer={null}
            width={500}
        >
            <div className={styles.modalTitle} >Task Detail</div>
            <div className={styles.modalHeader}>Task Name</div>
            <div className={styles.modalContent}>{record.taskName}</div>
            <div className={styles.modalDivider}/>
            <div className={styles.modalHeader}>Quantity</div>
            <div className={styles.modalContent}>{record.quantity}</div>
            <div className={styles.modalDivider}/>
            <div className={styles.modalHeader}>Spent</div>
            {<div className={styles.modalContent}>
                <div className={styles.volume}>
                    <div className={styles.volume0}>
                        <img src={eth} alt=""/>
                        <span>{record.volume && record.volume[0]}</span>
                    </div>
                    <div className={styles.volume1}>${record.volume && record.volume[1]}</div>
                </div>
            </div>}
            <div className={styles.modalDivider}/>
            <div className={styles.modalHeader}>Time</div>
            <div className={styles.modalContent}>06-30 19:22 - 06-31 19:21</div>
            <div className={styles.modalDivider}/>
            <div className={styles.modalHeader}>Rules</div>
            <div className={styles.modalContent}>120 mins number of mint/total issue overtake 99%</div>
            <div className={styles.modalDivider}/>
            <div className={styles.modalHeader}> The remaining quantity as a percentage of the total</div>
            <div className={styles.modalContent}>99%</div>
        </Modal>
    )
}

export default DetailModal;
