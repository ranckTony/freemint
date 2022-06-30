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
