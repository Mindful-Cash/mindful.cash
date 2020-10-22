/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface PProxyStorageInterface extends Interface {
  functions: {
    addressToBytes32: TypedFunctionDescription<{
      encode([_value]: [string]): string;
    }>;

    bytes32ToAddress: TypedFunctionDescription<{
      encode([_value]: [Arrayish]): string;
    }>;

    bytes32ToString: TypedFunctionDescription<{
      encode([_value]: [Arrayish]): string;
    }>;

    readAddress: TypedFunctionDescription<{
      encode([_key]: [Arrayish]): string;
    }>;

    readBool: TypedFunctionDescription<{ encode([_key]: [Arrayish]): string }>;

    readString: TypedFunctionDescription<{
      encode([_key]: [Arrayish]): string;
    }>;

    storageRead: TypedFunctionDescription<{
      encode([_key]: [Arrayish]): string;
    }>;

    stringToBytes32: TypedFunctionDescription<{
      encode([_value]: [string]): string;
    }>;
  };

  events: {};
}

export class PProxyStorage extends Contract {
  connect(signerOrProvider: Signer | Provider | string): PProxyStorage;
  attach(addressOrName: string): PProxyStorage;
  deployed(): Promise<PProxyStorage>;

  on(event: EventFilter | string, listener: Listener): PProxyStorage;
  once(event: EventFilter | string, listener: Listener): PProxyStorage;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): PProxyStorage;
  removeAllListeners(eventName: EventFilter | string): PProxyStorage;
  removeListener(eventName: any, listener: Listener): PProxyStorage;

  interface: PProxyStorageInterface;

  functions: {
    addressToBytes32(_value: string): Promise<string>;

    bytes32ToAddress(_value: Arrayish): Promise<string>;

    bytes32ToString(_value: Arrayish): Promise<string>;

    readAddress(_key: Arrayish): Promise<string>;

    readBool(_key: Arrayish): Promise<boolean>;

    readString(_key: Arrayish): Promise<string>;

    storageRead(_key: Arrayish): Promise<string>;

    stringToBytes32(_value: string): Promise<string>;
  };

  addressToBytes32(_value: string): Promise<string>;

  bytes32ToAddress(_value: Arrayish): Promise<string>;

  bytes32ToString(_value: Arrayish): Promise<string>;

  readAddress(_key: Arrayish): Promise<string>;

  readBool(_key: Arrayish): Promise<boolean>;

  readString(_key: Arrayish): Promise<string>;

  storageRead(_key: Arrayish): Promise<string>;

  stringToBytes32(_value: string): Promise<string>;

  filters: {};

  estimate: {
    addressToBytes32(_value: string): Promise<BigNumber>;

    bytes32ToAddress(_value: Arrayish): Promise<BigNumber>;

    bytes32ToString(_value: Arrayish): Promise<BigNumber>;

    readAddress(_key: Arrayish): Promise<BigNumber>;

    readBool(_key: Arrayish): Promise<BigNumber>;

    readString(_key: Arrayish): Promise<BigNumber>;

    storageRead(_key: Arrayish): Promise<BigNumber>;

    stringToBytes32(_value: string): Promise<BigNumber>;
  };
}
