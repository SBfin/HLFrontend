import { useState, useEffect } from 'react';
import { useWriteContract, useTransaction, useConfig } from 'wagmi';
import { BONDING_CURVE_FACTORY_ADDRESS, HOOK_ADDRESS, SALT } from '../constants'; // You'll need to create this
import { abiBondingCurveFactory } from '../abi/BondingCurveFactory';
import { abiBondingCurveToken } from '../abi/BondingCurveToken';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getTransactionReceipt } from '@wagmi/core';
import { simulateContract } from '@wagmi/core';
import { type SimulateContractParameters } from '@wagmi/core'
import { ethers } from 'ethers';
import { BaseError, ContractFunctionRevertedError } from 'viem';
import { usePublicClient } from 'wagmi';
import { readContract } from '@wagmi/core'

// Define a type for the token object
type Token = {
  creator: string;
  tokenAddress: string;
  hookAddress: string;
  name: string;
  symbol: string;
};

// Add this near the top with other constants
const ETH_PRICE_USD = 3900;

const Home: NextPage = () => {
  const config = useConfig();
  const provider = usePublicClient();
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [newTokenAddress, setNewTokenAddress] = useState<string | null>(null);
  const [createdTokens, setCreatedTokens] = useState<Token[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const tokensPerPage = 5;
  const [isBuyPopupOpen, setIsBuyPopupOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState<string | null>(null);

  const { data: hash, writeContract } = useWriteContract();

  // ie: -> Flash(address,address,uint256,uint256,uint256,uint256)
  const getEventSignature = (eventName: string, abi: any) => {
    const eventAbi = abi.find((entry: any) => entry.name === eventName);
    const types = eventAbi.inputs.map((input: any) => input.type);
    return `${eventName}(${types.join(',')})`;
  }

  useEffect(() => {
    const getReceipt = async () => {
      if (hash) {
        const eventSignature = getEventSignature('TokenCreated', abiBondingCurveFactory);
        const filter = {
          address: BONDING_CURVE_FACTORY_ADDRESS,
          topics: [ethers.id(eventSignature)],
          fromBlock: BigInt(0),
          toBlock: 'latest'
        };

        try {
          const logs = await provider?.getLogs(filter as any);
          if (!logs) return;

          const contractInterface = new ethers.Interface(abiBondingCurveFactory);
          
          const newTokens = await Promise.all(logs.map(async log => {
            const decodedLog = contractInterface.decodeEventLog(
              'TokenCreated',
              log.data,
              log.topics
            );

            // get the price
            const price = await readContract(config, {
              abi: abiBondingCurveToken,
              address: decodedLog.tokenAddress.toString(),
              functionName: 'getPrice',
            });

            console.log('price', price);

            // get the supply
            const supply = await readContract(config, {
              abi: abiBondingCurveToken,
              address: decodedLog.tokenAddress.toString(),
              functionName: 'totalSupply',
            });

            console.log('supply', supply);
            
            return {
              creator: decodedLog.creator.toString(),
              tokenAddress: decodedLog.tokenAddress.toString(),
              hookAddress: decodedLog.hookAddress.toString(),
              name: decodedLog.name.toString(),
              symbol: decodedLog.symbol.toString(),
              price: price,
              supply: supply
            };
          }));

          setCreatedTokens(newTokens);
        } catch (error) {
          console.error('Error processing logs:', error);
        }
      }
    };
    getReceipt();
  }, [hash, provider]);

  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-3)}`;
  };

  const formatPrice = (price: bigint) => {
    const priceInEth = Number(price) / 1e18;
    const priceInUsd = priceInEth * ETH_PRICE_USD;
    return `$${priceInUsd.toFixed(2)}`;
  };

  const formatMarketCap = (price: bigint, supply: bigint) => {
    const priceInEth = Number(price) / 1e18;
    const priceInUsd = priceInEth * ETH_PRICE_USD;
    const marketCap = priceInUsd * (Number(supply) / 1e18);
    
    if (marketCap >= 1000) {
      return `$${(marketCap / 1000).toFixed(0)}k`;
    }
    return `$${marketCap.toFixed(0)}`;
  };

  const indexOfLastToken = currentPage * tokensPerPage;
  const indexOfFirstToken = indexOfLastToken - tokensPerPage;
  const currentTokens = [...createdTokens].reverse().slice(indexOfFirstToken, indexOfLastToken);
  const totalPages = Math.ceil(createdTokens.length / tokensPerPage);

  return (
    <div className={styles.container}>
      <Head>
        <title>RainbowKit App</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            brain.fun
          </h1>
          <ConnectButton />
        </div>

        <section className={styles.getStarted}>
          <div className={styles.inputContainer}>
            <div className={styles.inputGroup}>
              <label htmlFor="tokenName">Token Name</label>
              <input
                id="tokenName"
                type="text"
                placeholder="Enter token name"
                value={tokenName}
                onChange={(e) => setTokenName(e.target.value)}
                className={styles.input}
              />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="tokenSymbol">Token Symbol</label>
              <input
                id="tokenSymbol"
                type="text"
                placeholder="Enter token symbol"
                value={tokenSymbol}
                onChange={(e) => setTokenSymbol(e.target.value)}
                className={styles.input}
              />
            </div>
          </div>
          
          <button className={styles.launchButton}
            onClick={async () => {
              console.log('Button clicked');
              // Option 3: Use token parameters to create a unique salt
              // Option 2: Use a random salt
              const paddedSalt = ethers.zeroPadValue(ethers.randomBytes(32), 32);
              // log type of paddedSalt
              console.log('Type of paddedSalt:', typeof paddedSalt);
              //const paddedSalt = ethers.zeroPadValue(SALT, 32);
              
              // Simulate transaction first
              try {
                const result = await simulateContract(config, {
                  abi: abiBondingCurveFactory as SimulateContractParameters['abi'],
                  address: BONDING_CURVE_FACTORY_ADDRESS as `0x${string}`,
                  functionName: 'createToken',
                  args: [
                    tokenName, 
                    tokenSymbol
                  ]
                } as SimulateContractParameters);

                console.log('Simulation result:', result);
              } catch (simulationError: any) {
                console.error('Simulation Error:', simulationError);
                alert('Transaction simulation failed. Please check the console for more details.');
                return;
              }

              // If simulation succeeds, proceed with contract write
              try {
                console.log('tokenName', tokenName);
                console.log('tokenSymbol', tokenSymbol);
                console.log('HOOK_ADDRESS', HOOK_ADDRESS);
                console.log('paddedSalt', paddedSalt);
                await writeContract({
                  abi: abiBondingCurveFactory,
                  address: BONDING_CURVE_FACTORY_ADDRESS,
                  functionName: 'createToken',
                  args: [
                    tokenName, 
                    tokenSymbol
                  ]
                });
              } catch (writeError: any) {
                console.error('Write Contract Error:', writeError);
                alert('Failed to write to contract. Please check the console for more details.');
              }
            }}
            className={`${styles.createButton} ${styles.launchButton}`}
          >
            Launch Token
          </button>
        </section>

        <section className={styles.tokenTable}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>Token Address</th>
                <th>Hook Address</th>
                <th>Price</th>
                <th>Market Cap</th>
                <th>Revenues</th>
                <th>Trade</th>
                <th>Agent Txs</th>
              </tr>
            </thead>
            <tbody>
              {currentTokens.map((token, index) => (
                <tr key={index}>
                  <td>{token.name}</td>
                  <td>{token.symbol}</td>
                  <td>{formatAddress(token.tokenAddress)}</td>
                  <td>{formatAddress(token.hookAddress)}</td>
                  <td>{formatPrice(token.price)}</td>
                  <td>{formatMarketCap(token.price, token.supply)}</td>
                  <td></td> {/* Revenues */}
                  <td className={styles.actionButtons}>
                    <button
                      className={`${styles.tradeButton} ${styles.buyButton}`}
                      onClick={() => {
                        setSelectedToken(token.name);
                        setIsBuyPopupOpen(true);
                      }}
                    >
                      Buy
                    </button>
                    <button className={`${styles.tradeButton} ${styles.sellButton}`}>
                      Sell
                    </button>
                  </td>
                  <td>
                    {/* Agent Txs content here */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {isBuyPopupOpen && (
          <div 
            className={styles.popupOverlay} 
            onClick={() => setIsBuyPopupOpen(false)}
          >
            <div 
              className={styles.swapWidget}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.swapSection}>
                <span>You pay</span>
                <div className={styles.inputGroup}>
                  <input 
                    type="number" 
                    placeholder="0" 
                    className={styles.input}
                    min="0"
                    step="any"
                  />
                  <button className={styles.tokenButton}>ETH</button>
                </div>
              </div>
              <div className={styles.swapDivider}>
                <span>⇅</span>
              </div>
              <div className={styles.swapSection}>
                <span>You receive</span>
                <div className={styles.inputGroup}>
                  <input 
                    type="number" 
                    placeholder="0" 
                    className={styles.input}
                    min="0"
                    step="any"
                  />
                  <button className={styles.tokenButton}>
                    {selectedToken || 'Select token'}
                  </button>
                </div>
              </div>
              <button className={styles.swapConfirmButton}>
                Swap
              </button>
            </div>
          </div>
        )}

        <div className={styles.pagination}>
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={styles.pageButton}
          >
            Previous
          </button>
          <span className={styles.pageInfo}>
            Page {currentPage} of {totalPages}
          </span>
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={styles.pageButton}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
