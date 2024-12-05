export const abiBondingCurveFactory = 
[
  {
    type: "constructor",
    inputs: [
      { name: "_poolManager", type: "address", internalType: "address" },
      { name: "_modifyLiquidityRouter", type: "address", internalType: "address" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "createToken",
    inputs: [
      { name: "name", type: "string", internalType: "string" },
      { name: "symbol", type: "string", internalType: "string" },
      { name: "precomputedHookAddress", type: "address", internalType: "address" },
      { name: "salt", type: "bytes32", internalType: "bytes32" }
    ],
    outputs: [{ name: "token", type: "address", internalType: "address" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "modifyLiquidityRouter",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "poolManager",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "contract IPoolManager" }],
    stateMutability: "view"
  },
  {
    type: "event",
    name: "TokenCreated",
    inputs: [
      { name: "creator", type: "address", indexed: true, internalType: "address" },
      { name: "tokenAddress", type: "address", indexed: false, internalType: "address" },
      { name: "hookAddress", type: "address", indexed: false, internalType: "address" }
    ]
  }
] as const; 