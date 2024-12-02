import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  anvil
} from 'wagmi/chains';



export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    anvil,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});