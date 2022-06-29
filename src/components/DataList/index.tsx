import React, { FC } from "react"
import { Table, Space } from "antd";
import styles from "./index.module.css";
import userface from "../../assets/userface.png";
import eth from "../../assets/eth.png";
import certification from "../../assets/certification.png";
import link1 from "../../assets/link1.png";
import link2 from "../../assets/link2.png";
import link3 from "../../assets/link3.png";
import link4 from "../../assets/link4.png";

import { StarOutlined } from '@ant-design/icons';

export default function DataList() {
    const { Column } = Table
    interface DataType {
        key: React.Key;
        name: string;
        time: string;
        partion: number[];
        floorPrice: number;
        items: number;
        pending: number;
        minted: number;
        volume: number;
        ranking: number;
        links: Object;
      }

    const data: DataType[] = [];
    for (let i = 0; i < 25; i++) {
        data.push({
            key: i,
            name: 'KIWAMI Genesisosss',
            time: '23:30 Jun 09',
            partion: [41, 39, 20],
            floorPrice: 0.012,
            items: 652,
            pending: 740,
            minted: 703,
            volume: 589.99,
            ranking: 556,
            links: {
                a: 'www.baidu.com',
                b: 'www.baidu.com',
                c: 'www.baidu.com',
                d: 'www.baidu.com',
            }
        });
    }

    const partionColumWidth = 190
    const partionWidth = (partion: number) => {
        return partion/100 * partionColumWidth;
    }

    return (
        <div className={styles.dataList}>
            <Table dataSource={data}>
                <Column 
                    title="Collection" 
                    key="name" 
                    // width="260px"
                    render={(_: any, record: DataType) => (
                        <div className={styles.name}>
                            <img src={userface} alt=""></img>
                            <div className={styles.nameContent}>
                                <div>
                                    <text className={styles.nameDetail}>{record.name}</text>
                                    <StarOutlined style={{ fontSize: '16px', color: '#B4B4B8',marginLeft: '4px' }} />
                                </div>
                                <text className={styles.time}>{record.time}</text>
                            </div>
                        </div>
                    )}
                 />
                 <Column
                    title="Floor Price"
                    key="price"
                    render={(_: any, record: DataType) => (
                        <div className={styles.floorPriceContainer}>
                            <img src={eth} alt=""></img>
                            <text className={styles.floorPrice}>{record.floorPrice}</text>
                        </div>
                    )}
                 />
                 <Column
                    title="Items"
                    key="items"
                    render={(_: any, record: DataType) => (
                        <div className={styles.floorPriceContainer}>
                            <text className={styles.floorPrice}>{record.items}</text>
                            <img src={certification} alt=""></img>
                        </div>
                    )}
                 />
                 <Column
                    title="Pending"
                    key="pending"
                    dataIndex="pending"
                    className={styles.floorPrice}
                 />
                 <Column
                    title="Minted"
                    key="minted"
                    dataIndex="minted"
                    className={styles.floorPrice}
                 />
                 <Column
                    title="Minted / Pending / Leave"
                    key="partion"
                    render={(_: any, record: DataType) => (
                        <Space size={0}>
                            <div style={{width: partionWidth(record.partion[0])}}>
                                <text className={styles.partionTips}>{record.partion[0]}%</text>
                                <div style={{height:'12px', backgroundColor:'#217AFF'}}></div>
                            </div>
                            <div style={{width: partionWidth(record.partion[1])}}>
                                <text className={styles.partionTips}>{record.partion[1]}%</text>
                                <div style={{height:'12px', backgroundColor:'#5398FF'}}></div>
                            </div>
                            <div style={{width: partionWidth(record.partion[2])}}>
                                <text className={styles.partionTips}>{record.partion[2]}%</text>
                                <div style={{height:'12px', backgroundColor:'#C1DAFF'}}></div>
                            </div>
                        </Space>
                    )}
                 />
                <Column
                    title="Volume (Ranking)"
                    key="volume"
                    render={(_: any, record: DataType) => (
                        <div className={styles.floorPriceContainer}>
                            <img src={eth} alt=""></img>
                            <text className={styles.floorPrice}>{record.volume}</text>
                            <text className={styles.ranking} style={{marginLeft: '4px' }}>{record.ranking}</text>
                        </div>
                    )}
                 />
                 <Column
                    title="Links"
                    key="links"
                    render={(_: any, record: DataType) => (
                        <Space size={24}>
                            <img src={link1} alt="" style={{width:'24px' }} ></img>
                            <img src={link2} alt="" style={{width:'24px' }}></img>
                            <img src={link3} alt="" style={{width:'24px' }}></img>
                            <img src={link4} alt="" style={{width:'24px' }}></img>
                        </Space>
                    )}
                 />
            </Table>
        </div>
    )
}