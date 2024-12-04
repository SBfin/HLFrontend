export const abiBondingCurveFactory =
    [{"type":"constructor","inputs":[{"name":"_poolManager","type":"address","internalType":"address"},{"name":"_modifyLiquidityRouter","type":"address","internalType":"address"}],"stateMutability":"nonpayable"},{"type":"function","name":"createToken","inputs":[{"name":"name","type":"string","internalType":"string"},{"name":"symbol","type":"string","internalType":"string"}],"outputs":[{"name":"token","type":"address","internalType":"address"}],"stateMutability":"nonpayable"},{"type":"function","name":"getTokenCount","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"getTokenList","inputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"tuple[]","internalType":"struct BondingCurveFactory.UserTokenInfo[]","components":[{"name":"creatorAddress","type":"address","internalType":"address"},{"name":"tokenAddress","type":"address","internalType":"address"},{"name":"hookAddress","type":"address","internalType":"address"}]}],"stateMutability":"view"},{"type":"function","name":"modifyLiquidityRouter","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"poolManager","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract IPoolManager"}],"stateMutability":"view"},{"type":"function","name":"tokenCount","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"tokenList","inputs":[{"name":"","type":"uint256","internalType":"uint256"},{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"creatorAddress","type":"address","internalType":"address"},{"name":"tokenAddress","type":"address","internalType":"address"},{"name":"hookAddress","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"event","name":"TokenCreated","inputs":[{"name":"creator","type":"address","indexed":true,"internalType":"address"},{"name":"tokenAddress","type":"address","indexed":false,"internalType":"address"},{"name":"hookAddress","type":"address","indexed":false,"internalType":"address"},{"name":"name","type":"string","indexed":false,"internalType":"string"},{"name":"symbol","type":"string","indexed":false,"internalType":"string"}],"anonymous":false}] as const;
  