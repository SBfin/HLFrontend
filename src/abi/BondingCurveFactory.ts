export const abiBondingCurveFactory = 
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
        },
        {
          "name": "_hookAddress",
          "type": "address",
          "internalType": "address payable"
        },
        {
          "name": "_salt",
          "type": "bytes32",
          "internalType": "bytes32"
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
      "name": "hook",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract HookRevenues"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "hookAddress",
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
    }
  ] as const; 