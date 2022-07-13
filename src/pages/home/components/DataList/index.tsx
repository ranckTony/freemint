import React, { FC, useEffect, useRef } from "react"
import { Table, Space, Tooltip } from "antd";
import styles from "./index.module.css";
import userface from "@/assets/userface.png";
import certification from "@/assets/certification.png";
import link1 from "@/assets/link1.png";
import link2 from "@/assets/link2.png";
import link3 from "@/assets/link3.png";
import link4 from "@/assets/link4.png";
import tips from "@/assets/tips.png";
import Footer from '@/components/Footer';

import { StarOutlined } from '@ant-design/icons';
import { iCollectionListItem } from "@/typings";
import { timeFrom } from "@/utils";

interface IProps {
    data: iCollectionListItem[]
}

export default function DataList({ data }: IProps) {
    const { Column } = Table

    const partionColumWidth = 190
    const partionWidth = (a: number[]) => {
        return a[0]/(a[0]+a[1]+a[2]) * partionColumWidth;
    }
    const partion = (a: number[]) => {
        return Math.round(a[0]/(a[0]+a[1]+a[2]) * 100) 
    }

    return (
        <div className={styles.dataList}>
            <Table dataSource={data} pagination={{position: ["bottomCenter"]}} tableLayout="fixed">
                <Column
                    title="Collection"
                    key="name"
                    width="300px"
                    render={(_: any, record: iCollectionListItem) => (
                        <div className={styles.name}>
                            <img src={record.baseInfo.imageURI ?? userface} alt="" style={{borderRadius: '50%'}}></img>
                            <div className={styles.nameContent}>
                                <div>
                                    <div className={styles.nameDetail}>
                                        <span>{record.baseInfo.name}</span>
                                    </div>
                                    <StarOutlined style={{ fontSize: '16px', color: '#B4B4B8', marginLeft: '4px' }} />
                                </div>
                                <span className={styles.time}>{timeFrom(record.baseInfo.createdAt)}</span>
                            </div>
                        </div>
                    )}
                />
                <Column
                    title={
                        <Tooltip placement="top" title={"ItemsItemsItemsItems"} arrowPointAtCenter>
                            <div style={{display:'flex'}}>
                                <span>Items</span>
                                <img src={tips} alt="" style={{width:'24px', height:'24px'}}></img>
                            </div>
                        </Tooltip>
                    }
                    key="items"
                    width="150px"
                    render={(_: any, record: iCollectionListItem) => (
                        <div className={styles.topWalletContainer}>
                            <span className={styles.floorPrice}>{record.freeMintStatInfo.totalSupply}</span>
                            <img src={certification} alt=""></img>
                        </div>
                    )}
                />
                <Column
                    title="Owner Address"
                    key="price"
                    width="160px"
                    render={(_: any, record: iCollectionListItem) => (
                        <Tooltip placement="top" title={record.baseInfo.owner} arrowPointAtCenter>
                            <div className={styles.topWalletContainer}>
                                <span className={styles.floorPrice}>{record.baseInfo.owner.slice(0,6) + '...' + record.baseInfo.owner.slice(-4)}</span>
                            </div>
                        </Tooltip>
                    )}
                />
                <Column
                    title={
                        <Tooltip placement="top" title={"PendingPendingPendingPending"} arrowPointAtCenter>
                            <div style={{display:'flex'}}>
                                <span>Pending</span>
                                <img src={tips} alt="" style={{width:'24px', height:'24px'}}></img>
                            </div>
                        </Tooltip>

                    }
                    key="pending"
                    width="150px"
                    className={styles.floorPrice}
                    render={(_: any, record: iCollectionListItem) => (
                        <span>{record.freeMintStatInfo.pending}</span>
                    )}
                />
                <Column
                    title={
                        <Tooltip placement="top" title={"MintedMintedMinted MintedMinted  Minted"} arrowPointAtCenter>
                            <div style={{display:'flex'}}>
                                <span>Minted</span>
                                <img src={tips} alt="" style={{width:'24px', height:'24px'}}></img>
                            </div>
                        </Tooltip>
                    }
                    key="minted"
                    width="150px"
                    className={styles.floorPrice}
                    render={(_: any, record: iCollectionListItem) => (
                        <span>{record.freeMintStatInfo.minted}</span>
                    )}
                />
                <Column
                    title="Left / Pending / Minted"
                    key="partion"
                    render={(_: any, record: iCollectionListItem) => (
                        <Space size={0}>
                            <div style={{ width: partionWidth([
                                        record.freeMintStatInfo.totalSupply -  record.freeMintStatInfo.pending - record.freeMintStatInfo.minted, 
                                        record.freeMintStatInfo.pending,
                                        record.freeMintStatInfo.minted]) }}>
                                <span className={styles.partionTips}>{
                                    partion([
                                        record.freeMintStatInfo.totalSupply -  record.freeMintStatInfo.pending - record.freeMintStatInfo.minted, 
                                        record.freeMintStatInfo.pending,
                                        record.freeMintStatInfo.minted])
                                        }%
                                    </span>
                                <div style={{ height: '12px', backgroundColor: '#217AFF' }}></div>
                            </div>
                            <div style={{ width:  partionWidth([
                                        record.freeMintStatInfo.pending,
                                        record.freeMintStatInfo.totalSupply -  record.freeMintStatInfo.pending - record.freeMintStatInfo.minted, 
                                        record.freeMintStatInfo.minted]) }}>
                                <span className={styles.partionTips}>{
                                    partion([
                                        record.freeMintStatInfo.pending,
                                        record.freeMintStatInfo.totalSupply -  record.freeMintStatInfo.pending - record.freeMintStatInfo.minted,
                                        record.freeMintStatInfo.minted])
                                    }%
                                </span>
                                <div style={{ height: '12px', backgroundColor: '#5398FF' }}></div>
                            </div>
                            <div style={{ width: partionWidth([
                                        record.freeMintStatInfo.minted,
                                        record.freeMintStatInfo.totalSupply -  record.freeMintStatInfo.pending - record.freeMintStatInfo.minted, 
                                        record.freeMintStatInfo.pending]) }}>
                                <span className={styles.partionTips}>{
                                    100 - 
                                    partion([
                                        record.freeMintStatInfo.totalSupply -  record.freeMintStatInfo.pending - record.freeMintStatInfo.minted, 
                                        record.freeMintStatInfo.pending,
                                        record.freeMintStatInfo.minted]) -
                                    partion([
                                        record.freeMintStatInfo.pending,
                                        record.freeMintStatInfo.totalSupply -  record.freeMintStatInfo.pending - record.freeMintStatInfo.minted,
                                        record.freeMintStatInfo.minted])                                    
                                    }%
                                </span>
                                <div style={{ height: '12px', backgroundColor: '#C1DAFF' }}></div>
                            </div>
                        </Space>
                    )}
                />
                <Column
                    title="Links"
                    key="links"
                    className={styles.linksColumn}
                    render={(_: any, record: iCollectionListItem) => (
                        <Space size={24}>
                            {record.baseInfo.looksrareSite &&
                            <a href={record.baseInfo.looksrareSite}>
                                <img src={link1} alt="" style={{ width: '24px' }} ></img>
                            </a>
                            }
                            {record.baseInfo.twitter && 
                            <a href={record.baseInfo.twitter}>
                                <img src={link2} alt="" style={{ width: '24px' }}></img>
                            </a>
                            }
                            {record.baseInfo.openseaSite && 
                            <a href={record.baseInfo.openseaSite}>
                                <img src={link3} alt="" style={{ width: '24px' }}></img>
                            </a>
                            }
                            {record.baseInfo.etherscan && 
                            <a href={record.baseInfo.etherscan}>
                                <img src={link4} alt="" style={{ width: '24px' }}></img>
                            </a>
                            }
                        </Space>
                    )}
                />
            </Table>
            <Footer />
        </div>
    )
}