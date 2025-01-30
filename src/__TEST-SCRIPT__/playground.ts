import { UniswapVersion } from '../enums/uniswap-version';
import { UniswapPairSettings } from '../factories/pair/models/uniswap-pair-settings';
import { UniswapPair } from '../factories/pair/uniswap-pair';
import { TradeDirection } from '../index';

// WBTC - 0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599
// FUN - 0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b
// REP - 0x1985365e9f78359a9B6AD760e32412f4a445E862
// WETH - 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
// UNI - 0x1f9840a85d5af5bf1d1762f925bdaddc4201f984
// AAVE - 0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9
// GTC - 0xde30da39c46104798bb5aa3fe8b9e0e1f348163f

const BASE_CUSTOM_NETWORK = {
  nameNetwork: "BASE",
  multicallContractAddress: "0xcA11bde05977b3631167028862bE2a173976CA11",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
  },
  nativeWrappedTokenInfo: {
    chainId: 8453,
    contractAddress: "0x4200000000000000000000000000000000000006",
    decimals: 18,
    symbol: "WETH",
    name: "Wrapped Ether",
  },
  baseTokens: {
    usdt: {
      chainId: 8453,
      contractAddress: "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2",
      decimals: 6,
      symbol: "USDT",
      name: "Tether USDT",
    },
    usdc: {
      chainId: 8453,
      contractAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
      decimals: 6,
      symbol: "USDC",
      name: "USD Coin",
    },
  },
};

const ARBITRUM_CUSTOM_NETWORK = {
  nameNetwork: "ARB",
  multicallContractAddress: "0xcA11bde05977b3631167028862bE2a173976CA11",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
  },
  nativeWrappedTokenInfo: {
    chainId: 42161,
    contractAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    decimals: 18,
    symbol: "WETH",
    name: "Wrapped Ether",
  },
  baseTokens: {
    usdt: {
      chainId: 42161,
      contractAddress: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
      decimals: 6,
      symbol: "USDT",
      name: "Tether USDT",
    },
    usdc: {
      chainId: 42161,
      contractAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
      decimals: 6,
      symbol: "USDC",
      name: "USD Coin",
    },
  },
};

//0x3bb4445d30ac020a84c1b5a8a2c6248ebc9779d0
// 0x0000000000000000000000000000000000000000
const routeTest = async () => {
  const fromTokenContractAddress = '0x4200000000000000000000000000000000000006'; //'0xEf0e839Cf88E47be676E72D5a9cB6CED99FaD1CF';
  const toTokenContractAddress = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913'; // 0x1985365e9f78359a9B6AD760e32412f4a445E862
  const ethereumAddress = '0x986f66F28C6a2BBE939dF3161D1D2b238933895c';

  // const fromTokenContractAddress = '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1'; //'0xEf0e839Cf88E47be676E72D5a9cB6CED99FaD1CF';
  // const toTokenContractAddress = '0xaf88d065e77c8cC2239327C5EDb3A432268e5831'; // 0x1985365e9f78359a9B6AD760e32412f4a445E862
  // const ethereumAddress = '0x986f66F28C6a2BBE939dF3161D1D2b238933895c';

  console.log(ARBITRUM_CUSTOM_NETWORK.nameNetwork)

  const uniswapPair = new UniswapPair({
    fromTokenContractAddress,
    toTokenContractAddress,
    ethereumAddress,
    chainId: 8453,
    //providerUrl: "https://arb1.arbitrum.io/rpc", //"https://base.llamarpc.com",
    providerUrl: "https://base.llamarpc.com",
    settings: new UniswapPairSettings({
      // if not supplied it use `0.005` which is 0.5%;
      // all figures
      slippage: 0.01,
      deadlineMinutes: 10,
      disableMultihops: true,
      uniswapVersions: [UniswapVersion.v3],
      customNetwork: BASE_CUSTOM_NETWORK,
      cloneUniswapContractDetails: {
        v3Override: {
          routerAddress: "0x2626664c2603336E57B271c5C0b26F421741e481",
          factoryAddress: "0x33128a8fC17869897dcE68Ed026d694621f6FDfD",
          quoterAddress: "0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a"
        }
      }
    }),
  });

  const startTime = new Date().getTime();

  const uniswapPairFactory = await uniswapPair.createFactory();

  const trade = await uniswapPairFactory.findBestRoute(
    "20",
    TradeDirection.input
  )

  console.log(new Date().getTime() - startTime);
  console.log(trade);

  // console.log(JSON.stringify(trade, null, 4));
  // console.log(trade);
  // console.log(
  //   trade.allTriedRoutesQuotes.filter(
  //     (c) => c.uniswapVersion === UniswapVersion.v3
  //   )
  // );

  // const ethers = new EthersProvider({ chainId: ChainId.MAINNET });
  // await ethers.provider.estimateGas(trade.transaction);
  // console.log(
  //   'gas',
  //   (await ethers.provider.estimateGas(trade.transaction)).toHexString()
  // );

  // process.stdin.resume();

  // console.log(JSON.stringify(trade));

  // const data = await uniswapPairFactory.generateApproveMaxAllowanceData();
  // console.log(data);

  // const toToken = uniswapPairFactory.toToken;
  // console.log(toToken);

  // const fromToken = uniswapPairFactory.fromToken;
  // console.log(fromToken);

  // const tokenContractAddress = '0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b';

  // const tokenFactoryPublic = new TokenFactoryPublic(
  //   fromTokenContractAddress,
  //   ChainId.MAINNET
  // );

  // console.log(
  //   await tokenFactoryPublic.getAllowanceAndBalanceOf(ethereumAddress)
  // );

  // // the contract address for which you are allowing to move tokens on your behalf
  // const spender = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';

  // // the amount you wish to allow them to move, this example just uses the max
  // // hex. If not each time they do a operation which needs to move tokens then
  // // it will cost them 2 transactions, 1 to approve the allowance then 1 to actually
  // // do the contract call to move the tokens.
  // const value =
  //   '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';

  // const data = tokenFactoryPublic.generateApproveAllowanceData(spender, value);
  // console.log(data);
};

routeTest();
