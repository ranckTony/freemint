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
    openseaSite: string,
    etherscan: string,
    pending: number,
    minted: number,
    createdAt: string
}
