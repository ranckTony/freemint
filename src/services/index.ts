import axios from "axios"
import { iCollectionListParams } from "../typings"


export const getCollectionList = (params: iCollectionListParams) => {
    return axios.get("/collection/list", { params })
}