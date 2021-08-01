# Methods inside provider

 - provider.getBalance(address)
 - provider._network
	```json
	{
    "name": "homestead",
    "chainId": 1,
    "ensAddress": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
	}
	```
 - provider.getBlockNumber()
	```js
	return blockNumber
	```
  
 - provider.getBlock(blockNumber)
	```json
	{
    "hash": "0xae67e06f34a85c03b28aed90318b1d0bf81e2e8e07bf5c7f635b67dd6297fcc4",
    "parentHash": "0x9ddf99432b611006ba17d3fbd341b30596efdd0db24394834b60d61c0c9fe42d",
    "number": 12932068,
    "timestamp": 1627717395,
    "nonce": "0x9145479413262d23",
    "difficulty": 7178415404352031,
    "gasLimit": {
        "type": "BigNumber",
        "hex": "0xe4a889"
    },
    "gasUsed": {
        "type": "BigNumber",
        "hex": "0xe46b8f"
    },
    "miner": "0x1aD91ee08f21bE3dE0BA2ba6918E714dA6B45836",
    "extraData": "0x486976656f6e2065752d68656176792074504c4f",
    "transactions": [
        "0x753deec575d73f50606c57251f35bebbf0c0098cb09b9d0afb0776260ff7bad4",
        "0xdca0e730f4392b4a9bf5ffb6b0dc80baba75a27fc73e09e12a3cb71a01e5371d",
		.
		.
		.
        "0xe385302f08519e94aebc4d3d3c3cf6124a1e80ccfad599c290f8ccc57f6ac516",
        "0x961c6597a8de577f65e2838904357773b252b8549c4810ebccb1bea878128d80"
    ]
}
	```