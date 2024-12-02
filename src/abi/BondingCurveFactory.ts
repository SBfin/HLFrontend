export const abi =
    [
      {
        "type": "constructor",
        "inputs": [
          {
            "name": "_poolManager",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "_modifyLiquidityRouter",
            "type": "address",
            "internalType": "address"
          }
        ],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "createToken",
        "inputs": [
          {
            "name": "name",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "symbol",
            "type": "string",
            "internalType": "string"
          }
        ],
        "outputs": [
          {
            "name": "token",
            "type": "address",
            "internalType": "address"
          }
        ],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "modifyLiquidityRouter",
        "inputs": [],
        "outputs": [
          {
            "name": "",
            "type": "address",
            "internalType": "address"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "poolManager",
        "inputs": [],
        "outputs": [
          {
            "name": "",
            "type": "address",
            "internalType": "contract IPoolManager"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "userTokens",
        "inputs": [
          {
            "name": "",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "",
            "type": "uint256",
            "internalType": "uint256"
          }
        ],
        "outputs": [
          {
            "name": "tokenAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "hookAddress",
            "type": "address",
            "internalType": "address"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "event",
        "name": "TokenCreated",
        "inputs": [
          {
            "name": "creator",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "tokenAddress",
            "type": "address",
            "indexed": false,
            "internalType": "address"
          },
          {
            "name": "hookAddress",
            "type": "address",
            "indexed": false,
            "internalType": "address"
          },
          {
            "name": "name",
            "type": "string",
            "indexed": false,
            "internalType": "string"
          },
          {
            "name": "symbol",
            "type": "string",
            "indexed": false,
            "internalType": "string"
          }
        ],
        "anonymous": false
      }
    ] as const;
  