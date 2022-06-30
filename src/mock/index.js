import Mock from "mockjs"

Mock.mock(/\/collection\/list/, "get", option => {
    console.log(option, "mock option")

    const data = Mock.mock({
        "data|1-10": [
            {
                "name|+1": [
                    "Hello",
                    "Mock.js",
                    "!"
                ],
                "totalSupply|1-100": 1,
                "ownerCount|1-10000": 1,
                "verified|1-2": true,
                "imageURI": Mock.Random.dataImage('108x108', 'Hello Mock.js!'),
                "website": Mock.mock('@url'),
                "twitter": Mock.mock('@url'),
                "opensea": Mock.mock('@url'),
                "looksrare": Mock.mock('@url'),
                "x2y2|1-20": "abcdefg",
                "etherscan|1-20": "abcdefg",
                "pending|1-10000": 1,
                "minted|1-10000": 1,
                "partion": [41, 39, 20],
            }
        ]
    })


    return data.data
})


