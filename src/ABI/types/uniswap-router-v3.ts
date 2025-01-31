import {
  ContractTransaction,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  UniswapRouterV3,
  UniswapRouterV3MethodNames,
  UniswapRouterV3EventsContext,
  UniswapRouterV3Events
>;

export declare type EventFilter = {
  address?: string;
  topics?: Array<string>;
  fromBlock?: string | number;
  toBlock?: string | number;
};

export interface ContractTransactionOverrides {
  /**
   * The maximum units of gas for the transaction to use
   */
  gasLimit?: number;
  /**
   * The price (in wei) per unit of gas
   */
  gasPrice?: BigNumber | string | number | Promise<any>;
  /**
   * The nonce to use in the transaction
   */
  nonce?: number;
  /**
   * The amount to send with the transaction (i.e. msg.value)
   */
  value?: BigNumber | string | number | Promise<any>;
  /**
   * The chain ID (or network ID) to use
   */
  chainId?: number;
}

export interface ContractCallOverrides {
  /**
   * The address to execute the call as
   */
  from?: string;
  /**
   * The maximum units of gas for the transaction to use
   */
  gasLimit?: number;
}
export type UniswapRouterV3Events = undefined;
export interface UniswapRouterV3EventsContext {}
export type UniswapRouterV3MethodNames =
  | 'new'
  | 'WETH9'
  | 'approveMax'
  | 'approveMaxMinusOne'
  | 'approveZeroThenMax'
  | 'approveZeroThenMaxMinusOne'
  | 'callPositionManager'
  | 'checkOracleSlippage'
  | 'checkOracleSlippage'
  | 'exactInput'
  | 'exactInputSingle'
  | 'exactOutput'
  | 'exactOutputSingle'
  | 'factory'
  | 'factoryV2'
  | 'getApprovalType'
  | 'increaseLiquidity'
  | 'mint'
  | 'multicall'
  | 'multicall'
  | 'multicall'
  | 'positionManager'
  | 'pull'
  | 'refundETH'
  | 'selfPermit'
  | 'selfPermitAllowed'
  | 'selfPermitAllowedIfNecessary'
  | 'selfPermitIfNecessary'
  | 'swapExactTokensForTokens'
  | 'swapTokensForExactTokens'
  | 'sweepToken'
  | 'sweepToken'
  | 'sweepTokenWithFee'
  | 'sweepTokenWithFee'
  | 'uniswapV3SwapCallback'
  | 'unwrapWETH9'
  | 'unwrapWETH9'
  | 'unwrapWETH9WithFee'
  | 'unwrapWETH9WithFee'
  | 'wrapETH';
export interface ExactInputRequest {
  path: Arrayish;
  recipient: string;
  amountIn: BigNumberish;
  amountOutMinimum: BigNumberish;
}
export interface ExactInputSingleRequest {
  tokenIn: string;
  tokenOut: string;
  fee: BigNumberish;
  recipient: string;
  amountIn: BigNumberish;
  amountOutMinimum: BigNumberish;
  sqrtPriceLimitX96: BigNumberish;
}
export interface ExactOutputRequest {
  path: Arrayish;
  recipient: string;
  amountOut: BigNumberish;
  amountInMaximum: BigNumberish;
}
export interface ExactOutputSingleRequest {
  tokenIn: string;
  tokenOut: string;
  fee: BigNumberish;
  recipient: string;
  amountOut: BigNumberish;
  amountInMaximum: BigNumberish;
  sqrtPriceLimitX96: BigNumberish;
}
export interface IncreaseLiquidityRequest {
  token0: string;
  token1: string;
  tokenId: BigNumberish;
  amount0Min: BigNumberish;
  amount1Min: BigNumberish;
}
export interface MintRequest {
  token0: string;
  token1: string;
  fee: BigNumberish;
  tickLower: BigNumberish;
  tickUpper: BigNumberish;
  amount0Min: BigNumberish;
  amount1Min: BigNumberish;
  recipient: string;
}
export interface UniswapRouterV3 {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   * @param _factoryV2 Type: address, Indexed: false
   * @param factoryV3 Type: address, Indexed: false
   * @param _positionManager Type: address, Indexed: false
   * @param _WETH9 Type: address, Indexed: false
   */
  'new'(
    _factoryV2: string,
    factoryV3: string,
    _positionManager: string,
    _WETH9: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  WETH9(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param token Type: address, Indexed: false
   */
  approveMax(
    token: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param token Type: address, Indexed: false
   */
  approveMaxMinusOne(
    token: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param token Type: address, Indexed: false
   */
  approveZeroThenMax(
    token: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param token Type: address, Indexed: false
   */
  approveZeroThenMaxMinusOne(
    token: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param data Type: bytes, Indexed: false
   */
  callPositionManager(
    data: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param paths Type: bytes[], Indexed: false
   * @param amounts Type: uint128[], Indexed: false
   * @param maximumTickDivergence Type: uint24, Indexed: false
   * @param secondsAgo Type: uint32, Indexed: false
   */
  checkOracleSlippage(
    paths: Arrayish[],
    amounts: BigNumberish[],
    maximumTickDivergence: BigNumberish,
    secondsAgo: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<void>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param path Type: bytes, Indexed: false
   * @param maximumTickDivergence Type: uint24, Indexed: false
   * @param secondsAgo Type: uint32, Indexed: false
   */
  checkOracleSlippage(
    path: Arrayish,
    maximumTickDivergence: BigNumberish,
    secondsAgo: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<void>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param params Type: tuple, Indexed: false
   */
  exactInput(
    params: ExactInputRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param params Type: tuple, Indexed: false
   */
  exactInputSingle(
    params: ExactInputSingleRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param params Type: tuple, Indexed: false
   */
  exactOutput(
    params: ExactOutputRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param params Type: tuple, Indexed: false
   */
  exactOutputSingle(
    params: ExactOutputSingleRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  factory(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  factoryV2(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param token Type: address, Indexed: false
   * @param amount Type: uint256, Indexed: false
   */
  getApprovalType(
    token: string,
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param params Type: tuple, Indexed: false
   */
  increaseLiquidity(
    params: IncreaseLiquidityRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param params Type: tuple, Indexed: false
   */
  mint(
    params: MintRequest,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param previousBlockhash Type: bytes32, Indexed: false
   * @param data Type: bytes[], Indexed: false
   */
  multicall(
    previousBlockhash: Arrayish,
    data: Arrayish[],
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param deadline Type: uint256, Indexed: false
   * @param data Type: bytes[], Indexed: false
   */
  multicall(
    deadline: BigNumberish,
    data: Arrayish[],
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param data Type: bytes[], Indexed: false
   */
  multicall(
    data: Arrayish[],
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  positionManager(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param token Type: address, Indexed: false
   * @param value Type: uint256, Indexed: false
   */
  pull(
    token: string,
    value: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   */
  refundETH(
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param token Type: address, Indexed: false
   * @param value Type: uint256, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   * @param v Type: uint8, Indexed: false
   * @param r Type: bytes32, Indexed: false
   * @param s Type: bytes32, Indexed: false
   */
  selfPermit(
    token: string,
    value: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: Arrayish,
    s: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param token Type: address, Indexed: false
   * @param nonce Type: uint256, Indexed: false
   * @param expiry Type: uint256, Indexed: false
   * @param v Type: uint8, Indexed: false
   * @param r Type: bytes32, Indexed: false
   * @param s Type: bytes32, Indexed: false
   */
  selfPermitAllowed(
    token: string,
    nonce: BigNumberish,
    expiry: BigNumberish,
    v: BigNumberish,
    r: Arrayish,
    s: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param token Type: address, Indexed: false
   * @param nonce Type: uint256, Indexed: false
   * @param expiry Type: uint256, Indexed: false
   * @param v Type: uint8, Indexed: false
   * @param r Type: bytes32, Indexed: false
   * @param s Type: bytes32, Indexed: false
   */
  selfPermitAllowedIfNecessary(
    token: string,
    nonce: BigNumberish,
    expiry: BigNumberish,
    v: BigNumberish,
    r: Arrayish,
    s: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param token Type: address, Indexed: false
   * @param value Type: uint256, Indexed: false
   * @param deadline Type: uint256, Indexed: false
   * @param v Type: uint8, Indexed: false
   * @param r Type: bytes32, Indexed: false
   * @param s Type: bytes32, Indexed: false
   */
  selfPermitIfNecessary(
    token: string,
    value: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: Arrayish,
    s: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param amountIn Type: uint256, Indexed: false
   * @param amountOutMin Type: uint256, Indexed: false
   * @param path Type: address[], Indexed: false
   * @param to Type: address, Indexed: false
   */
  swapExactTokensForTokens(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param amountOut Type: uint256, Indexed: false
   * @param amountInMax Type: uint256, Indexed: false
   * @param path Type: address[], Indexed: false
   * @param to Type: address, Indexed: false
   */
  swapTokensForExactTokens(
    amountOut: BigNumberish,
    amountInMax: BigNumberish,
    path: string[],
    to: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param token Type: address, Indexed: false
   * @param amountMinimum Type: uint256, Indexed: false
   * @param recipient Type: address, Indexed: false
   */
  sweepToken(
    token: string,
    amountMinimum: BigNumberish,
    recipient: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param token Type: address, Indexed: false
   * @param amountMinimum Type: uint256, Indexed: false
   */
  sweepToken(
    token: string,
    amountMinimum: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param token Type: address, Indexed: false
   * @param amountMinimum Type: uint256, Indexed: false
   * @param feeBips Type: uint256, Indexed: false
   * @param feeRecipient Type: address, Indexed: false
   */
  sweepTokenWithFee(
    token: string,
    amountMinimum: BigNumberish,
    feeBips: BigNumberish,
    feeRecipient: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param token Type: address, Indexed: false
   * @param amountMinimum Type: uint256, Indexed: false
   * @param recipient Type: address, Indexed: false
   * @param feeBips Type: uint256, Indexed: false
   * @param feeRecipient Type: address, Indexed: false
   */
  sweepTokenWithFee(
    token: string,
    amountMinimum: BigNumberish,
    recipient: string,
    feeBips: BigNumberish,
    feeRecipient: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param amount0Delta Type: int256, Indexed: false
   * @param amount1Delta Type: int256, Indexed: false
   * @param _data Type: bytes, Indexed: false
   */
  uniswapV3SwapCallback(
    amount0Delta: BigNumberish,
    amount1Delta: BigNumberish,
    _data: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param amountMinimum Type: uint256, Indexed: false
   * @param recipient Type: address, Indexed: false
   */
  unwrapWETH9(
    amountMinimum: BigNumberish,
    recipient: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param amountMinimum Type: uint256, Indexed: false
   */
  unwrapWETH9(
    amountMinimum: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param amountMinimum Type: uint256, Indexed: false
   * @param recipient Type: address, Indexed: false
   * @param feeBips Type: uint256, Indexed: false
   * @param feeRecipient Type: address, Indexed: false
   */
  unwrapWETH9WithFee(
    amountMinimum: BigNumberish,
    recipient: string,
    feeBips: BigNumberish,
    feeRecipient: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param amountMinimum Type: uint256, Indexed: false
   * @param feeBips Type: uint256, Indexed: false
   * @param feeRecipient Type: address, Indexed: false
   */
  unwrapWETH9WithFee(
    amountMinimum: BigNumberish,
    feeBips: BigNumberish,
    feeRecipient: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param value Type: uint256, Indexed: false
   */
  wrapETH(
    value: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
}
