import React, { FC, useState } from "react"
import { Table, Space, Tooltip } from "antd";
import styles from "./index.module.css";
import userface from "@/assets/userface.png";
import certification from "@/assets/certification.png";
import tips from "@/assets/tips.png";
import { WebSite } from "@/pages/svgComponent/webSite";
import { Twitter } from "@/pages/svgComponent/twitter";
import { Opensea } from "@/pages/svgComponent/openSea";
import { Etherscan } from "@/pages/svgComponent/etherscan";
import Footer from "../Footer";

import { iCollectionItem } from "@/typings";
import { timeFrom } from "@/utils";

interface IProps {
    data: iCollectionItem[]
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

    const [tipsShow, setTipsShow] = useState({})
    const isShowToolTips = (record: iCollectionItem, e: any) => {
        const divEl = e.currentTarget as HTMLElement
        const child = divEl?.firstChild as HTMLElement
        if(divEl?.offsetWidth > child?.offsetWidth) {
            setTipsShow({...tipsShow, [record.name]: false})
        }
    }

    return (
        <div className={styles.dataList}>
            <Table dataSource={data} pagination={{position: ["bottomCenter"]}} tableLayout="fixed">
                <Column
                    title="Collection"
                    key="name"
                    width="300px"
                    render={(_: any, record: iCollectionItem) => (
                        <div className={styles.name}>
                            <img src={record.imageURI ?? userface} alt="" style={{borderRadius: '50%'}}></img>
                            <div className={styles.nameContent}>
                                <Tooltip placement="top" title={record.name} arrowPointAtCenter visible={tipsShow[record.name as keyof typeof tipsShow]}>
                                    <div className={styles.nameDetail} onMouseOver={(e) => isShowToolTips(record, e)}>
                                        <span>{record.name}</span>
                                    </div>
                                </Tooltip>
                                <span className={styles.time}>{timeFrom(record.createdAt)}</span>
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
                    render={(_: any, record: iCollectionItem) => (
                        <div className={styles.topWalletContainer}>
                            <span className={styles.floorPrice}>{record.totalSupply}</span>
                            <img src={certification} alt=""></img>
                        </div>
                    )}
                />
                <Column
                    title="Owner Address"
                    key="price"
                    width="160px"
                    className={styles.floorPrice}
                    render={(_: any, record: iCollectionItem) => (
                        <span>{record.ownerCount}</span>
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
                    render={(_: any, record: iCollectionItem) => (
                        <span>{record.pending}</span>
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
                    render={(_: any, record: iCollectionItem) => (
                        <span>{record.minted}</span>
                    )}
                />
                <Column
                    title="Left / Pending / Minted"
                    key="partion"
                    render={(_: any, record: iCollectionItem) => (
                        <div>
                            <div>
                                <span className={styles.partionTips}>{
                                    partion([
                                        record.totalSupply -  record.pending - record.minted, 
                                        record.pending,
                                        record.minted])
                                        }%
                                </span>
                                <span> / </span>
                                <span className={styles.partionTips}>{
                                    partion([
                                        record.pending,
                                        record.totalSupply -  record.pending - record.minted,
                                        record.minted])
                                    }%
                                </span>
                                <span> / </span>
                                <span className={styles.partionTips}>{
                                    100 - 
                                    partion([
                                        record.totalSupply -  record.pending - record.minted, 
                                        record.pending,
                                        record.minted]) -
                                    partion([
                                        record.pending,
                                        record.totalSupply -  record.pending - record.minted,
                                        record.minted])                                    
                                    }%
                                </span>
                            </div>
                            <Space size={0}>
                                <div style={{ width: partionWidth([
                                            record.totalSupply -  record.pending - record.minted, 
                                            record.pending,
                                            record.minted]) }}>
                                    
                                    <div style={{ height: '12px', backgroundColor: '#217AFF' }}></div>
                                </div>
                                <div style={{ width:  partionWidth([
                                            record.pending,
                                            record.totalSupply -  record.pending - record.minted, 
                                            record.minted]) }}>
                                    <div style={{ height: '12px', backgroundColor: '#5398FF' }}></div>
                                </div>
                                <div style={{ width: partionWidth([
                                            record.minted,
                                            record.totalSupply -  record.pending - record.minted, 
                                            record.pending]) }}>
                                    <div style={{ height: '12px', backgroundColor: '#C1DAFF' }}></div>
                                </div>
                            </Space>
                        </div>
                        
                    )}
                />
                <Column
                    title="Links"
                    key="links"
                    className={styles.linksColumn}
                    render={(_: any, record: iCollectionItem) => (
                        <Space size={24}>
                            {record.website ? 
                            <a href={record.website}>
                               <WebSite/> 
                            </a> :
                            <WebSite color="#9B9A9D"/>
                            }
                            {record.twitter ? 
                            <a href={record.twitter}>
                                 <Twitter/> 
                            </a> :
                            <Twitter color="#9B9A9D"/>
                            }
                            {record.opensea ?
                            <a href={record.opensea}>
                                <Opensea/>
                            </a> : 
                            <Opensea color="#9B9A9D"/>
                            }
                            {record.etherscan ?
                            <a href={record.etherscan}>
                                <Etherscan/>
                            </a> : 
                            <Etherscan color="#9B9A9D"/>
                            }
                        </Space>
                    )}
                />
            </Table>
            <Footer />
        </div>
    )
}