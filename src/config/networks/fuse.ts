import fuseLogo from 'src/config/assets/token_fuse.svg'
import {
  EnvironmentSettings,
  ETHEREUM_LAYER,
  ETHEREUM_NETWORK,
  FEATURES,
  NetworkConfig,
  WALLETS,
} from 'src/config/networks/network.d'

const baseConfig: EnvironmentSettings = {
  clientGatewayUrl: 'https://safe-client.gnosis.io/v1',
  txServiceUrl: 'https://safe-transaction.fuse.gnosis.io/api/v1',
  safeUrl: 'https://fuse.gnosis-safe.io/app',
  gasPrice: 3e6,
  rpcServiceUrl: 'https://rpc.fuse.io/',
  safeAppsRpcServiceUrl: 'https://rpc.fuse.io/',
  networkExplorerName: 'Blockscout',
  networkExplorerUrl: 'https://explorer.fuse.io/',
  networkExplorerApiUrl: 'https://explorer.fuse.io/api',
}

const fuse: NetworkConfig = {
  environment: {
    dev: {
      ...baseConfig,
      safeUrl: 'https://safe-team-fuse.staging.gnosisdev.com/app/',
    },
    staging: {
      ...baseConfig,
      safeUrl: 'https://safe-team-fuse.staging.gnosisdev.com/app/',
    },
    production: {
      ...baseConfig,
    },
  },
  network: {
    id: ETHEREUM_NETWORK.FUSE,
    backgroundColor: '#073756',
    textColor: '#ffffff',
    label: 'fuse',
    isTestNet: false,
    ethereumLayer: ETHEREUM_LAYER.L2,
    nativeCoin: {
      address: '0x0000000000000000000000000000000000000000',
      name: 'fuse',
      symbol: 'fuse',
      decimals: 18,
      logoUri: fuseLogo,
    },
  },
  disabledWallets: [
    WALLETS.TREZOR,
    WALLETS.LEDGER,
    WALLETS.COINBASE,
    WALLETS.FORTMATIC,
    WALLETS.OPERA,
    WALLETS.OPERA_TOUCH,
    WALLETS.TORUS,
    WALLETS.TRUST,
    WALLETS.WALLET_LINK,
    WALLETS.AUTHEREUM,
    WALLETS.LATTICE,
  ],
  disabledFeatures: [FEATURES.DOMAIN_LOOKUP],
}

export default fuse
