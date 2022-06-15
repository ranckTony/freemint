

import React, { FC } from "react"
import { Table } from "antd";
import styles from "./index.module.css";

export default function DataList() {
    const dataSource = [{}]
    const columns = [{
        title: 'Collection',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: 'Floor Price',
        dataIndex: 'Floor Price',
        key: 'Floor Price',
    }, {
        title: 'Items',
        dataIndex: 'Items',
        key: 'Items',
    }, {
        title: 'Pending',
        dataIndex: 'Pending',
        key: 'Pending',
    }, {
        title: 'Minted',
        dataIndex: 'Minted',
        key: 'Minted',
    }, {
        title: 'Minted / Pending / Leave',
        dataIndex: 'process',
        key: 'process',
    }, {
        title: 'Volume (Ranking)',
        dataIndex: 'Volume',
        key: 'Volume',
    }, {
        title: 'Links',
        dataIndex: 'Links',
        key: 'Links',
    },]
    return (
        <div className={styles.dataList}>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}