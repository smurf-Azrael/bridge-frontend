/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface GovernorInterface extends utils.Interface {
  contractName: "Governor";
  functions: {
    "addGovernor(address)": FunctionFragment;
    "governors(address)": FunctionFragment;
    "isGovernor(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeGovernor(address)": FunctionFragment;
    "renounceGovernor()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addGovernor", values: [string]): string;
  encodeFunctionData(functionFragment: "governors", values: [string]): string;
  encodeFunctionData(functionFragment: "isGovernor", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "removeGovernor", values: [string]): string;
  encodeFunctionData(functionFragment: "renounceGovernor", values?: undefined): string;
  encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
  encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;

  decodeFunctionResult(functionFragment: "addGovernor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "governors", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isGovernor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removeGovernor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "renounceGovernor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;

  events: {
    "GovernorAdded(address)": EventFragment;
    "GovernorRemoved(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GovernorAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GovernorRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type GovernorAddedEvent = TypedEvent<[string], { account: string }>;

export type GovernorAddedEventFilter = TypedEventFilter<GovernorAddedEvent>;

export type GovernorRemovedEvent = TypedEvent<[string], { account: string }>;

export type GovernorRemovedEventFilter = TypedEventFilter<GovernorRemovedEvent>;

export type OwnershipTransferredEvent = TypedEvent<[string, string], { previousOwner: string; newOwner: string }>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface Governor extends BaseContract {
  contractName: "Governor";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GovernorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addGovernor(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    governors(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    isGovernor(_account: string, overrides?: CallOverrides): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeGovernor(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    renounceGovernor(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  addGovernor(
    _account: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  governors(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  isGovernor(_account: string, overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeGovernor(
    _account: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  renounceGovernor(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    addGovernor(_account: string, overrides?: CallOverrides): Promise<void>;

    governors(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    isGovernor(_account: string, overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeGovernor(_account: string, overrides?: CallOverrides): Promise<void>;

    renounceGovernor(overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "GovernorAdded(address)"(account?: null): GovernorAddedEventFilter;
    GovernorAdded(account?: null): GovernorAddedEventFilter;

    "GovernorRemoved(address)"(account?: null): GovernorRemovedEventFilter;
    GovernorRemoved(account?: null): GovernorRemovedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    addGovernor(_account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    governors(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    isGovernor(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeGovernor(_account: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    renounceGovernor(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addGovernor(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    governors(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isGovernor(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeGovernor(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    renounceGovernor(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}