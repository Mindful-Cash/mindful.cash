/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractFactory, Signer} from "ethers";
import {Provider} from "ethers/providers";
import {UnsignedTransaction} from "ethers/utils/transaction";

import {TransactionOverrides} from ".";
import {PProxyPausable} from "./PProxyPausable";

export class PProxyPausableFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<PProxyPausable> {
    return super.deploy(overrides) as Promise<PProxyPausable>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): PProxyPausable {
    return super.attach(address) as PProxyPausable;
  }
  connect(signer: Signer): PProxyPausableFactory {
    return super.connect(signer) as PProxyPausableFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PProxyPausable {
    return new Contract(address, _abi, signerOrProvider) as PProxyPausable;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    stateMutability: "payable",
    type: "fallback"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_value",
        type: "address"
      }
    ],
    name: "addressToBytes32",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_value",
        type: "bytes32"
      }
    ],
    name: "bytes32ToAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_value",
        type: "bytes32"
      }
    ],
    name: "bytes32ToString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "getImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPauzer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getProxyOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32"
      }
    ],
    name: "readAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32"
      }
    ],
    name: "readBool",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32"
      }
    ],
    name: "readString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renouncePauzer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newImplementation",
        type: "address"
      }
    ],
    name: "setImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_value",
        type: "bool"
      }
    ],
    name: "setPaused",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newPauzer",
        type: "address"
      }
    ],
    name: "setPauzer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address"
      }
    ],
    name: "setProxyOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32"
      }
    ],
    name: "storageRead",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_value",
        type: "string"
      }
    ],
    name: "stringToBytes32",
    outputs: [
      {
        internalType: "bytes32",
        name: "result",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061005460405160200180806913d5d3915497d4d313d560b21b815250600a019050604051602081830303815290604052805190602001203361009d60201b60201c565b61009860405160200180806a14105556915497d4d313d560aa1b815250600b019050604051602081830303815290604052805190602001203361009d60201b60201c565b6100d5565b6100c1826100b3836001600160e01b036100c516565b6001600160e01b036100d116565b5050565b6001600160a01b031690565b9055565b610d2d806100e46000396000f3fe6080604052600436106100fe5760003560e01c806382c947b711610095578063aaf10f4211610064578063aaf10f4214610377578063bb15ac8e1461038c578063caaee91c146103b6578063cfb51928146103e9578063d784d4261461049c576100fe565b806382c947b7146102bd5780638f4edfe2146102f05780639201de55146103235780639d84ae691461034d576100fe565b806337a440e6116100d157806337a440e6146102195780634bde4b2e146102555780635ced058e1461026a5780636805b84b14610294576100fe565b806316c38b3c1461010857806317b857dd146101345780631ab7710d146101495780631bc289601461017a575b6101066104cf565b005b34801561011457600080fd5b506101066004803603602081101561012b57600080fd5b50351515610552565b34801561014057600080fd5b5061010661061f565b34801561015557600080fd5b5061015e6106ea565b604080516001600160a01b039092168252519081900360200190f35b34801561018657600080fd5b506101a46004803603602081101561019d57600080fd5b503561072d565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101de5781810151838201526020016101c6565b50505050905090810190601f16801561020b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561022557600080fd5b506102436004803603602081101561023c57600080fd5b5035610748565b60408051918252519081900360200190f35b34801561026157600080fd5b5061015e61074c565b34801561027657600080fd5b5061015e6004803603602081101561028d57600080fd5b503561078b565b3480156102a057600080fd5b506102a961078e565b604080519115158252519081900360200190f35b3480156102c957600080fd5b50610243600480360360208110156102e057600080fd5b50356001600160a01b03166107cd565b3480156102fc57600080fd5b506101066004803603602081101561031357600080fd5b50356001600160a01b03166107d9565b34801561032f57600080fd5b506101a46004803603602081101561034657600080fd5b50356108a2565b34801561035957600080fd5b5061015e6004803603602081101561037057600080fd5b50356109a7565b34801561038357600080fd5b5061015e6109ba565b34801561039857600080fd5b506102a9600480360360208110156103af57600080fd5b5035610a01565b3480156103c257600080fd5b50610106600480360360208110156103d957600080fd5b50356001600160a01b0316610a15565b3480156103f557600080fd5b506102436004803603602081101561040c57600080fd5b81019060208101813564010000000081111561042757600080fd5b82018360208201111561043957600080fd5b8035906020019184600183028401116401000000008311171561045b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610add945050505050565b3480156104a857600080fd5b50610106600480360360208110156104bf57600080fd5b50356001600160a01b0316610afb565b61050c60405160200180806a14105554d15117d4d313d560aa1b815250600b01905060405160208183030381529060405280519060200120610a01565b156105485760405162461bcd60e51b815260040180806020018281038252602c815260200180610ccc602c913960400191505060405180910390fd5b610550610bcc565b565b61058f60405160200180806a14105556915497d4d313d560aa1b815250600b019050604051602081830303815290604052805190602001206109a7565b6001600160a01b0316336001600160a01b0316146105de5760405162461bcd60e51b8152600401808060200182810382526030815260200180610c716030913960400191505060405180910390fd5b61061c60405160200180806a14105554d15117d4d313d560aa1b815250600b0190506040516020818303038152906040528051906020012082610c3a565b50565b61065c60405160200180806a14105556915497d4d313d560aa1b815250600b019050604051602081830303815290604052805190602001206109a7565b6001600160a01b0316336001600160a01b0316146106ab5760405162461bcd60e51b8152600401808060200182810382526030815260200180610c716030913960400191505060405180910390fd5b61055060405160200180806a14105556915497d4d313d560aa1b815250600b019050604051602081830303815290604052805190602001206000610c5f565b600061072860405160200180806913d5d3915497d4d313d560b21b815250600a019050604051602081830303815290604052805190602001206109a7565b905090565b606061074061073b83610748565b6108a2565b90505b919050565b5490565b600061072860405160200180806a14105556915497d4d313d560aa1b815250600b019050604051602081830303815290604052805190602001206109a7565b90565b600061072860405160200180806a14105554d15117d4d313d560aa1b815250600b01905060405160208183030381529060405280519060200120610a01565b6001600160a01b031690565b61081560405160200180806913d5d3915497d4d313d560b21b815250600a019050604051602081830303815290604052805190602001206109a7565b6001600160a01b0316336001600160a01b0316146108645760405162461bcd60e51b815260040180806020018281038252602b815260200180610ca1602b913960400191505060405180910390fd5b61061c60405160200180806a14105556915497d4d313d560aa1b815250600b0190506040516020818303038152906040528051906020012082610c5f565b6040805160208082528183019092526060918291906020820181803683370190505090506000805b6020811015610920576008810260020a85026001600160f81b031981161561091757808484815181106108f957fe5b60200101906001600160f81b031916908160001a9053506001909201915b506001016108ca565b506060816040519080825280601f01601f19166020018201604052801561094e576020820181803683370190505b50905060005b8281101561099e5783818151811061096857fe5b602001015160f81c60f81b82828151811061097f57fe5b60200101906001600160f81b031916908160001a905350600101610954565b50949350505050565b60006107406109b583610748565b61078b565b600061072860405160200180807212535413115351539510551253d397d4d313d5606a1b8152506013019050604051602081830303815290604052805190602001206109a7565b60006001610a0e83610748565b1492915050565b610a5160405160200180806913d5d3915497d4d313d560b21b815250600a019050604051602081830303815290604052805190602001206109a7565b6001600160a01b0316336001600160a01b031614610aa05760405162461bcd60e51b815260040180806020018281038252602b815260200180610ca1602b913960400191505060405180910390fd5b61061c60405160200180806913d5d3915497d4d313d560b21b815250600a0190506040516020818303038152906040528051906020012082610c5f565b80516000908290610af2575060009050610743565b50506020015190565b610b3760405160200180806913d5d3915497d4d313d560b21b815250600a019050604051602081830303815290604052805190602001206109a7565b6001600160a01b0316336001600160a01b031614610b865760405162461bcd60e51b815260040180806020018281038252602b815260200180610ca1602b913960400191505060405180910390fd5b61061c60405160200180807212535413115351539510551253d397d4d313d5606a1b81525060130190506040516020818303038152906040528051906020012082610c5f565b6000610c1360405160200180807212535413115351539510551253d397d4d313d5606a1b8152506013019050604051602081830303815290604052805190602001206109a7565b905060405136600082376000803683855af43d806000843e818015610c36578184f35b8184fd5b8015610c5057610c4b826001610c6c565b610c5b565b610c5b826000610c6c565b5050565b610c5b82610c6c836107cd565b905556fe5050726f78795061757361626c652e6f6e6c795061757a65723a206d73672073656e646572206e6f74207061757a65725050726f78792e6f6e6c7950726f78794f776e65723a206d73672073656e646572206e6f74206f776e65725050726f78795061757361626c652e6e6f745061757365643a20636f6e747261637420697320706175736564a2646970667358221220402a3349b51886149d11d3fe7ed7ff4d98a6c6375ecb098e332019cc656fb6d864736f6c63430006040033";
