export const collectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
        const addressArray = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          if (addressArray.length > 0) {
              return {
                  addressContent: addressArray[0],
                  status: 0
                }
          }
          return {
              addressContent: '',
              status: 1
            }
    }
    return {
        addressContent: '',
        status: 2
    }
}

export const getCurrentWalletConnected = async () => {
    if (typeof window.ethereum !== "undefined") {
        const addressArray = await window.ethereum.request({
            method: "eth_accounts",
          });
          if (addressArray.length > 0) {
            return {
                addressContent: addressArray[0],
                status: 0
              }
          }
          return {
            addressContent: '',
            status: 1
          }
    }
    return {
        addressContent: '',
        status: 2
    }
}