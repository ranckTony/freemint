export interface iCollectionListParams {
    period: string
}

export interface iCollectionItem {
    name: string,
    totalSupply: number,
    ownerCount: number,
    verified: boolean,
    imageURI: string,
    website: string,
    twitter: string,
    opensea: string,
    looksrare: string,
    x2y2: string,
    etherscan: string,
    pending: number,
    minted: number,
    partion: number[]
}


interface iBaseInfo {
    address: string
    createTime: string
    createdAt: string
    description: string
    etherscan: string
    id: number
    imageURI: string
    looksrareSite: string
    name: string
    openseaSite: string
    owner: string
    slug: string
    totalSupply: number
    twitter: string
    txHash: string
    txParams: string
    type: string
    updateTime: string
    verified: boolean
    website: string
    x2y2Site: string
}

interface iFreeMintStatInfo {
    collectionId: number
    createdAt: string
    hot: number
    id: number
    minted: number
    ownerCount: number
    pending: number
    totalSupply: number
    valid: number
}

export interface iCollectionListItem {
    baseInfo: iBaseInfo
    freeMintStatInfo: iFreeMintStatInfo
}
