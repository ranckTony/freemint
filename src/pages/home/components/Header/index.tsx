import React, { FC, useState } from "react";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styles from "./index.module.css";
import profitKing from "@/assets/profitKing.png";
import { ethers } from "ethers";
import Web3 from "web3";

import axios from "axios";

export default function Header() {
  const [walletAddress, setWalletAddress] = useState<String>("");
  const [btnLoading, setBtnLoading] = useState<boolean>(false);

  const ethEnabledWeb3 = async () => {
    if (typeof window.ethereum !== "undefined") {
      setBtnLoading(true);
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      setBtnLoading(false);
      const account = accounts[0];
      setWalletAddress(account);

      // sign for login
      const message = `hello world`;
      const signRes = await web3.eth.personal.sign(
        web3.utils.utf8ToHex(message),
        account,
        ""
      ); // MetaMask will ignore the password argument here
      axios
        .post(`http://127.0.0.1:9125/api/auth/metamask`, {
          publicAddress: account.toLowerCase(),
          signature: signRes,
          message: message,
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
    }
  };

  const ethEnabled = async () => {
    if (typeof window.ethereum !== "undefined") {
      // await window.ethereum.request({ method: 'eth_requestAccounts' });
      setBtnLoading(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

      const signer = provider.getSigner();
      const myAddress = await signer.getAddress();
      const myBalance = await signer.getBalance();
      setWalletAddress(myAddress);
      setBtnLoading(false);
      console.log("balance:", ethers.utils.formatEther(myBalance));

      // sign message
      // const message = `请签名证明你是钱包账户的拥有者-${Date.now()}`
      const message = `请签名证明你是钱包账户的拥有者`;

      // signMessage 方法会让钱包弹出对话框询问用户是否同意签名，用户同意后我们就可以拿到签名
      const signature = await signer.signMessage(message);
      console.log("signature", signature);

      axios
        .post(`http://127.0.0.1:9125/api/auth/metamask`, {
          publicAddress: myAddress.toLowerCase(),
          signature: signature,
          message: message,
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });

      return true;
    }
    console.log("MetaMask not detected");
    return false;
  };

  let btn;
  if (walletAddress) {
    btn = (
      <div className={styles.headerAcount}>
        {walletAddress.slice(0, 6) + "..." + walletAddress.slice(-4)}
      </div>
    );
  } else {
    btn = (
      <Button
        className="headerWallet"
        type="primary"
        onClick={ethEnabledWeb3}
        loading={btnLoading}
      >
        Connect Wallet
      </Button>
    );
  }

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={profitKing} alt="" style={{ width: "128px" }}></img>
      </div>
      <div className={styles.search}>
        <Input
          className="headerInput"
          placeholder="Search"
          prefix={<SearchOutlined />}
        />
      </div>
      <div className={styles.wallet}>{btn}</div>
    </div>
  );
}
