import React, { FC, useState } from "react"
import { Button, Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import styles from "./index.module.css";
import logooo from "@/assets/logooo.png";
import { ethers } from "ethers";

export default function Header() {

    const [walletAddress, setWalletAddress] =  useState<String>("")
    const [btnLoading, setBtnLoading] = useState<boolean>(false)

    const ethEnabled = async () => {
        if (typeof window.ethereum !== 'undefined') {
            // await window.ethereum.request({ method: 'eth_requestAccounts' });
            setBtnLoading(true)
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            await provider.send("eth_requestAccounts", []);

            const signer = provider.getSigner()
            const myAddress = await signer.getAddress()
            const myBalance = await signer.getBalance()
            setWalletAddress(myAddress)
            setBtnLoading(false)
            console.log('balance:', ethers.utils.formatEther(myBalance))
            return true;
        }
        console.log("MetaMask not detected")
        return false;
      }

      
      let btn;
      if(walletAddress) {
        btn = <div className={styles.headerAcount}>
            { walletAddress.slice(0,6) + '...' + walletAddress.slice(-4)}
            </div>
      } else {
        btn = <Button className="headerWallet" type="primary" onClick={ethEnabled} loading={btnLoading} >Connect Wallet</Button>
      }

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logooo} alt="" style={{width: '128px'}}></img>
            </div>
            <div className={styles.search}>
                <Input className="headerInput" placeholder="Search" prefix={<SearchOutlined />} />
            </div>
            <div className={styles.wallet}>
                {btn}
            </div>
        </div>
    )
}