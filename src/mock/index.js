import Mock from "mockjs"

Mock.mock(/\/collection\/list/, "get", option => {
    console.log(option, "mock option")

    // const data = Mock.mock({
    //     "data|0-50": [
    //         {
    //             "baseInfo": {
    //                 "address": "0x72A94e6c51CB06453B84c049Ce1E1312f7c05e2c",
    //                 "createdAt": "2022-07-09 17:36:20",
    //                 "etherscan": "https://etherscan.io/address/0x72A94e6c51CB06453B84c049Ce1E1312f7c05e2c",
    //                 "imageURI|+1": [
    //                     "https://openseauserdata.com/files/4c5a9e1be89ba5e9cfacf155ef124a50.jpg",
    //                     "https://openseauserdata.com/files/df1f5ebd7eec9e1d15d857e192bef24a.gif",
    //                     "https://openseauserdata.com/files/ca09ec60acca255d82e99d40655b65df.png"
    //                 ],
    //                 "looksrareSite": "https://looksrare.org/collections/0x72A94e6c51CB06453B84c049Ce1E1312f7c05e2c",
    //                 "name|+1": [
    //                     "WiiidesWiiidesWiiidesWiiidesWiiidesWiiidesWiiidesWiiides",
    //                     "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwdddddaaaaadfdsfasdfasdfdggggg",
    //                     "Rejects",
    //                     "Uedine Chapel"
    //                 ],
    //                 "openseaSite": "https://opensea.io/collection/wiiides",
    //                 "owner": "0x0b9b80F2048d683f3E9a5AB9a32342DdC7C1343b",
    //                 "twitter": "wiiides",
    //                 "verified": false,
    //                 "website": "http://www.wiiides.com/",
    //                 "x2y2Site": null
    //             },
    //             "freeMintStatInfo": {
    //                 "minted|10-2000": 1,
    //                 "ownerCount|1-9000": 1,
    //                 "pending|10-2000": 1,
    //                 "totalSupply|4000-9000": 1,
    //                 "valid": 0
    //             }
    //         }
    //     ]
    // })

    const data = Mock.mock({
        "data|0-20": [
            {
                "name|+1": [
                    "WiiidesWiiidesWiiidesWiiidesWiiidesWiiidesWiiidesWiiides",
                    "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwdddddaaaaadfdsfasdfasdfdggggg",
                    "Rejects",
                    "Uedine Chapel"
                ],
                "nameTips": false,
                "totalSupply|4000-9000": 1,
                "ownerCount|1-9000": 1,
                "verified|1-2": true,
                "imageURI|+1": [
                    "https://openseauserdata.com/files/4c5a9e1be89ba5e9cfacf155ef124a50.jpg",
                    "https://openseauserdata.com/files/df1f5ebd7eec9e1d15d857e192bef24a.gif",
                    "https://openseauserdata.com/files/ca09ec60acca255d82e99d40655b65df.png"
                ],
                "website": Mock.mock('@url'),
                "twitter": Mock.mock('@url'),
                "opensea": Mock.mock('@url'),
                "etherscan": "https://etherscan.io/address/0x72A94e6c51CB06453B84c049Ce1E1312f7c05e2c",
                "pending|10-2000": 1,
                "minted|10-2000": 1,
                "createdAt": "2022-07-09 17:36:20",
            }
        ]
    })


    return data
})


