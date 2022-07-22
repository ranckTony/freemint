export interface iCollectionListParams {
    period: string
}

export interface iCollectionItem {
    name: string,
    type: string,
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

export interface TaskDataType {
    key?: string;
    taskName: string;
    taskType: string;
    quantity: number;
    volume: number[];
}
