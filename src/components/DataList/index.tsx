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
import tips from "../../assets/tips.png";
import top1 from "../../assets/top1.png";
import top2 from "../../assets/top2.png"; 
import top3 from "../../assets/top3.png"; 
import top4 from "../../assets/top4.png"; 
import Footer from '../../components/Footer';

import { StarOutlined } from '@ant-design/icons';
import { iCollectionItem } from "../../typings";

interface IProps {
    data: iCollectionItem[]
}

export default function DataList({ data }: IProps) {
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

    // const data: DataType[] = [];
    // for (let i = 0; i < 25; i++) {
    //     data.push({
    //         key: i,
    //         name: 'KIWAMI Genesisosss',
    //         time: '23:30 Jun 09',
    //         partion: [41, 39, 20],
    //         floorPrice: 0.012,
    //         items: 652,
    //         pending: 740,
    //         minted: 703,
    //         volume: 589.99,
    //         ranking: 556,
    //         links: {
    //             a: 'www.baidu.com',
    //             b: 'www.baidu.com',
    //             c: 'www.baidu.com',
    //             d: 'www.baidu.com',
    //         }
    //     });
    // }

    const partionColumWidth = 190
    const partionWidth = (partion: number) => {
        return partion / 100 * partionColumWidth;
    }

    return (
        <div className={styles.dataList}>
            <Table dataSource={data} pagination={{position: ["bottomCenter"]}}>
                <Column
                    title="Collection"
                    key="name"
                    // width="260px"
                    render={(_: any, record: iCollectionItem) => (
                        <div className={styles.name}>
                            <img src={userface} alt=""></img>
                            <div className={styles.nameContent}>
                                <div>
                                    <text className={styles.nameDetail}>{record.name}</text>
                                    <StarOutlined style={{ fontSize: '16px', color: '#B4B4B8', marginLeft: '4px' }} />
                                </div>
                                {/* <text className={styles.time}>{record.time}</text> */}
                            </div>
                        </div>
                    )}
                />
                <Column
                    title={
                        <div style={{display:'flex'}}>
                            <span>Items</span>
                            <img src={tips} alt="" style={{width:'24px', height:'24px'}}></img>
                        </div>
                    }
                    key="items"
                    render={(_: any, record: iCollectionItem) => (
                        <div className={styles.topWalletContainer}>
                            <text className={styles.floorPrice}>{record.totalSupply}</text>
                            <img src={certification} alt=""></img>
                        </div>
                    )}
                />
                <Column
                    title="Owner Address"
                    key="price"
                    render={(_: any, record: iCollectionItem) => (
                        <div className={styles.topWalletContainer}>
                            <text className={styles.floorPrice}>{record.ownerCount}</text>
                        </div>
                    )}
                />
                <Column
                    title={
                        <div style={{display:'flex'}}>
                            <span>Pending</span>
                            <img src={tips} alt="" style={{width:'24px', height:'24px'}}></img>
                        </div>
                    }
                    key="pending"
                    dataIndex="pending"
                    className={styles.floorPrice}
                />
                <Column
                    title={
                        <div style={{display:'flex'}}>
                            <span>Minted</span>
                            <img src={tips} alt="" style={{width:'24px', height:'24px'}}></img>
                        </div>
                    }
                    key="minted"
                    dataIndex="minted"
                    className={styles.floorPrice}
                />
                <Column
                    title="Minted / Pending / Leave"
                    key="partion"
                    render={(_: any, record: iCollectionItem) => (
                        <Space size={0}>
                            <div style={{ width: partionWidth(record.partion[0]) }}>
                                <text className={styles.partionTips}>{record.partion[0]}%</text>
                                <div style={{ height: '12px', backgroundColor: '#217AFF' }}></div>
                            </div>
                            <div style={{ width: partionWidth(record.partion[1]) }}>
                                <text className={styles.partionTips}>{record.partion[1]}%</text>
                                <div style={{ height: '12px', backgroundColor: '#5398FF' }}></div>
                            </div>
                            <div style={{ width: partionWidth(record.partion[2]) }}>
                                <text className={styles.partionTips}>{record.partion[2]}%</text>
                                <div style={{ height: '12px', backgroundColor: '#C1DAFF' }}></div>
                            </div>
                        </Space>
                    )}
                />
                <Column
                    title={
                        <div style={{display:'flex'}}>
                            <span>Top Wallet</span>
                            <img src={tips} alt="" style={{width:'24px', height:'24px'}}></img>
                        </div>
                    }
                    key="volume"
                    render={(_: any, record: iCollectionItem) => (
                        <div className={styles.topWalletContainer}>
                            <img src={top1} alt="" style={{zIndex:5}}></img>
                            <img src={top2} alt="" style={{zIndex:4}}></img>
                            <img src={top3} alt="" style={{zIndex:3}}></img>
                            <img src={top4} alt="" style={{zIndex:2}}></img>
                            <img src={top1} alt="" style={{zIndex:1}}></img>
                            <img src={top2} alt="" style={{zIndex:0}}></img>
                            <span className={styles.topWallet}>+12</span>
                        </div>
                    )}
                />
                <Column
                    title="Links"
                    key="links"
                    className={styles.linksColumn}
                    render={(_: any, record: iCollectionItem) => (
                        <Space size={24}>
                            <img src={link1} alt="" style={{ width: '24px' }} ></img>
                            <img src={link2} alt="" style={{ width: '24px' }}></img>
                            <img src={link3} alt="" style={{ width: '24px' }}></img>
                            <img src={link4} alt="" style={{ width: '24px' }}></img>
                        </Space>
                    )}
                />
            </Table>
            <Footer />
        </div>
    )
}