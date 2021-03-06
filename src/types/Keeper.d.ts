/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface KeeperInterface extends ethers.utils.Interface {
  functions: {
    "borrowCallback(address)": FunctionFragment;
    "claim(address,uint256,uint256,bytes)": FunctionFragment;
    "delegateCall(address,bytes)": FunctionFragment;
    "doBorrow(address[])": FunctionFragment;
    "withdrawTokens(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "borrowCallback",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "delegateCall",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "doBorrow", values: [string[]]): string;
  encodeFunctionData(
    functionFragment: "withdrawTokens",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "borrowCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "delegateCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "doBorrow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawTokens",
    data: BytesLike
  ): Result;

  events: {};
}

export class Keeper extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: KeeperInterface;

  functions: {
    borrowCallback(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "borrowCallback(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    claim(
      _to: string,
      _earningsToDate: BigNumberish,
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "claim(address,uint256,uint256,bytes)"(
      _to: string,
      _earningsToDate: BigNumberish,
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    delegateCall(
      to: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "delegateCall(address,bytes)"(
      to: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    doBorrow(
      tokens: string[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "doBorrow(address[])"(
      tokens: string[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    withdrawTokens(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawTokens(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  borrowCallback(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "borrowCallback(address)"(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  claim(
    _to: string,
    _earningsToDate: BigNumberish,
    _nonce: BigNumberish,
    _signature: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "claim(address,uint256,uint256,bytes)"(
    _to: string,
    _earningsToDate: BigNumberish,
    _nonce: BigNumberish,
    _signature: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  delegateCall(
    to: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "delegateCall(address,bytes)"(
    to: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  doBorrow(
    tokens: string[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "doBorrow(address[])"(
    tokens: string[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  withdrawTokens(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawTokens(address)"(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    borrowCallback(token: string, overrides?: CallOverrides): Promise<void>;

    "borrowCallback(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    claim(
      _to: string,
      _earningsToDate: BigNumberish,
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "claim(address,uint256,uint256,bytes)"(
      _to: string,
      _earningsToDate: BigNumberish,
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    delegateCall(
      to: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "delegateCall(address,bytes)"(
      to: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    doBorrow(tokens: string[], overrides?: CallOverrides): Promise<void>;

    "doBorrow(address[])"(
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawTokens(token: string, overrides?: CallOverrides): Promise<void>;

    "withdrawTokens(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    borrowCallback(token: string, overrides?: Overrides): Promise<BigNumber>;

    "borrowCallback(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    claim(
      _to: string,
      _earningsToDate: BigNumberish,
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "claim(address,uint256,uint256,bytes)"(
      _to: string,
      _earningsToDate: BigNumberish,
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    delegateCall(
      to: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "delegateCall(address,bytes)"(
      to: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    doBorrow(
      tokens: string[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "doBorrow(address[])"(
      tokens: string[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    withdrawTokens(token: string, overrides?: Overrides): Promise<BigNumber>;

    "withdrawTokens(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    borrowCallback(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "borrowCallback(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    claim(
      _to: string,
      _earningsToDate: BigNumberish,
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "claim(address,uint256,uint256,bytes)"(
      _to: string,
      _earningsToDate: BigNumberish,
      _nonce: BigNumberish,
      _signature: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    delegateCall(
      to: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "delegateCall(address,bytes)"(
      to: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    doBorrow(
      tokens: string[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "doBorrow(address[])"(
      tokens: string[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    withdrawTokens(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawTokens(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
