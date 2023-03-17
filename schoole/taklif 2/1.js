async function mint(req, res, next) {
    try {
        let { quantity, mint_type, walletAddress } = req.body
        quantity = Number(quantity)

        let providerTestnetUrl = 'https://goerli.blockpi.network/v1/rpc/public'
        let web3 = new Web3(providerTestnetUrl)

        Contract.setProvider(providerTestnetUrl)
        const config = nftConfig.ethereum.mainnet;
        var contract = new Contract(
            nftConfig.ethereum.contractAbi,
            config.contractAddress,
        )

        let data
        let value
        switch (mint_type) {
            case 'Public_Mint_Legendry':
                data = await contract.methods.Public_Mint_Legendry(quantity).encodeABI()
                value = config.factorPublicLegendary * config.pricePublic * quantity
                break
            case 'Public_Mint_Common':
                data = await contract.methods.Public_Mint_Common(quantity).encodeABI()
                value = config.factorPublicCommon * config.pricePublic * quantity
                break
            case 'Public_Mint_Epic':
                data = await contract.methods.Public_Mint_Epic(quantity).encodeABI()
                value = config.factorPublicEpic * config.pricePublic * quantity
                break
            case 'Public_Mint_Rare':
                data = await contract.methods.Public_Mint_Rare(quantity).encodeABI()
                value = config.factorPublicRare * config.pricePublic * quantity
                break
            default:
                throw new Error('Not Supported Mint Function')
        }

        let nonce = await web3.eth.getTransactionCount(walletAddress, 'latest')
        let weiValue = web3utils.toWei(String(value), 'ether')

        const transaction = {
            from: walletAddress,
            to: config.contractAddress,
            value: web3utils.numberToHex(weiValue),
            nonce,
            gas: web3utils.numberToHex(500000),
            maxPriorityFeePerGas: web3utils.numberToHex(2999999987),
            data,
        }
        return transaction;
    }
}