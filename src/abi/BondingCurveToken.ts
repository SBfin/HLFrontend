export const abiBondingCurveToken = [
    {
      "type": "constructor",
      "inputs": [
        {"name": "poolmAddress", "type": "address", "internalType": "address"},
        {"name": "posmAddress", "type": "address", "internalType": "address"},
        {"name": "hookAddress", "type": "address", "internalType": "address"},
        {"name": "name", "type": "string", "internalType": "string"},
        {"name": "symbol", "type": "string", "internalType": "string"}
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "receive",
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "FEE",
      "inputs": [],
      "outputs": [{"name": "", "type": "uint24", "internalType": "uint24"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "HOOK_ADDRESS",
      "inputs": [],
      "outputs": [{"name": "", "type": "address", "internalType": "address"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "INITIAL_PRICE",
      "inputs": [],
      "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "OWN_SUPPLY",
      "inputs": [],
      "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "PRECISION",
      "inputs": [],
      "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "PRICE_SLOPE",
      "inputs": [],
      "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "TICK_SPACING",
      "inputs": [],
      "outputs": [{"name": "", "type": "int24", "internalType": "int24"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "TOTAL_SUPPLY",
      "inputs": [],
      "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "allowance",
      "inputs": [
        {"name": "owner", "type": "address", "internalType": "address"},
        {"name": "spender", "type": "address", "internalType": "address"}
      ],
      "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "approve",
      "inputs": [
        {"name": "spender", "type": "address", "internalType": "address"},
        {"name": "value", "type": "uint256", "internalType": "uint256"}
      ],
      "outputs": [{"name": "", "type": "bool", "internalType": "bool"}],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [{"name": "account", "type": "address", "internalType": "address"}],
      "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "buy",
      "inputs": [{"name": "amount", "type": "uint256", "internalType": "uint256"}],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "cap",
      "inputs": [],
      "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "decimals",
      "inputs": [],
      "outputs": [{"name": "", "type": "uint8", "internalType": "uint8"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getBuyQuote",
      "inputs": [{"name": "amount", "type": "uint256", "internalType": "uint256"}],
      "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getMarketCap",
      "inputs": [],
      "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getPrice",
      "inputs": [],
      "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getPriceAtSupply",
      "inputs": [{"name": "supply", "type": "uint256", "internalType": "uint256"}],
      "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getPriceInv",
      "inputs": [],
      "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getSellQuote",
      "inputs": [{"name": "amount", "type": "uint256", "internalType": "uint256"}],
      "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "name",
      "inputs": [],
      "outputs": [{"name": "", "type": "string", "internalType": "string"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "ownedNFTs",
      "inputs": [
        {"name": "", "type": "address", "internalType": "address"},
        {"name": "", "type": "uint256", "internalType": "uint256"}
      ],
      "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "poolm",
      "inputs": [],
      "outputs": [{"name": "", "type": "address", "internalType": "contract IPoolManager"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "posm",
      "inputs": [],
      "outputs": [{"name": "", "type": "address", "internalType": "contract PoolModifyLiquidityTest"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "sell",
      "inputs": [{"name": "amount", "type": "uint256", "internalType": "uint256"}],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "symbol",
      "inputs": [],
      "outputs": [{"name": "", "type": "string", "internalType": "string"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "totalSupply",
      "inputs": [],
      "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "transfer",
      "inputs": [
        {"name": "to", "type": "address", "internalType": "address"},
        {"name": "value", "type": "uint256", "internalType": "uint256"}
      ],
      "outputs": [{"name": "", "type": "bool", "internalType": "bool"}],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "transferFrom",
      "inputs": [
        {"name": "from", "type": "address", "internalType": "address"},
        {"name": "to", "type": "address", "internalType": "address"},
        {"name": "value", "type": "uint256", "internalType": "uint256"}
      ],
      "outputs": [{"name": "", "type": "bool", "internalType": "bool"}],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "Approval",
      "inputs": [
        {"name": "owner", "type": "address", "indexed": true, "internalType": "address"},
        {"name": "spender", "type": "address", "indexed": true, "internalType": "address"},
        {"name": "value", "type": "uint256", "indexed": false, "internalType": "uint256"}
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "LiquidityAddedToPool",
      "inputs": [{"name": "positionManager", "type": "address", "indexed": false, "internalType": "address"}],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "NFTReceived",
      "inputs": [
        {"name": "operator", "type": "address", "indexed": false, "internalType": "address"},
        {"name": "from", "type": "address", "indexed": false, "internalType": "address"},
        {"name": "tokenId", "type": "uint256", "indexed": false, "internalType": "uint256"},
        {"name": "data", "type": "bytes", "indexed": false, "internalType": "bytes"}
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "PoolInitialized",
      "inputs": [
        {"name": "poolManager", "type": "address", "indexed": false, "internalType": "address"},
        {"name": "currency0", "type": "address", "indexed": false, "internalType": "address"},
        {"name": "currency1", "type": "address", "indexed": false, "internalType": "address"},
        {"name": "sqrtPriceX96", "type": "uint160", "indexed": false, "internalType": "uint160"}
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Transfer",
      "inputs": [
        {"name": "from", "type": "address", "indexed": true, "internalType": "address"},
        {"name": "to", "type": "address", "indexed": true, "internalType": "address"},
        {"name": "value", "type": "uint256", "indexed": false, "internalType": "uint256"}
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "ERC20ExceededCap",
      "inputs": [
        {"name": "increasedSupply", "type": "uint256", "internalType": "uint256"},
        {"name": "cap", "type": "uint256", "internalType": "uint256"}
      ]
    },
    {
      "type": "error",
      "name": "ERC20InsufficientAllowance",
      "inputs": [
        {"name": "spender", "type": "address", "internalType": "address"},
        {"name": "allowance", "type": "uint256", "internalType": "uint256"},
        {"name": "needed", "type": "uint256", "internalType": "uint256"}
      ]
    },
    {
      "type": "error",
      "name": "ERC20InsufficientBalance",
      "inputs": [
        {"name": "sender", "type": "address", "internalType": "address"},
        {"name": "balance", "type": "uint256", "internalType": "uint256"},
        {"name": "needed", "type": "uint256", "internalType": "uint256"}
      ]
    },
    {
      "type": "error",
      "name": "ERC20InvalidApprover",
      "inputs": [{"name": "approver", "type": "address", "internalType": "address"}]
    },
    {
      "type": "error",
      "name": "ERC20InvalidCap",
      "inputs": [{"name": "cap", "type": "uint256", "internalType": "uint256"}]
    },
    {
      "type": "error",
      "name": "ERC20InvalidReceiver",
      "inputs": [{"name": "receiver", "type": "address", "internalType": "address"}]
    },
    {
      "type": "error",
      "name": "ERC20InvalidSender",
      "inputs": [{"name": "sender", "type": "address", "internalType": "address"}]
    },
    {
      "type": "error",
      "name": "ERC20InvalidSpender",
      "inputs": [{"name": "spender", "type": "address", "internalType": "address"}]
    },
    {
      "type": "error",
      "name": "InvalidAmountError",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NotEnoughETHtoProvideLiquidity",
      "inputs": []
    },
    {
      "type": "error",
      "name": "NotEnoughETHtoSellTokens",
      "inputs": []
    }
  ] as const;