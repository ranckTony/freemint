declare global {
    interface Window{
        ethereum:any
        web3:any
    }
}

export default window || {}