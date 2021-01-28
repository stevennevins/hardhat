/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { FlashBorrower } from "../FlashBorrower";

export class FlashBorrower__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<FlashBorrower> {
    return super.deploy(overrides || {}) as Promise<FlashBorrower>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FlashBorrower {
    return super.attach(address) as FlashBorrower;
  }
  connect(signer: Signer): FlashBorrower__factory {
    return super.connect(signer) as FlashBorrower__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FlashBorrower {
    return new Contract(address, _abi, signerOrProvider) as FlashBorrower;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "borrowCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_earningsToDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "delegateCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "doBorrow",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "withdrawTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b503373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152505060805160601c611050610074600039806105075280610635528061075c52806109e952506110506000f3fe60806040526004361061004e5760003560e01c80632ada8a321461005757806349df728c146101535780634b8a9b07146101a457806356e7b7aa1461025c5780639d809b9f1461033757610055565b3661005557005b005b34801561006357600080fd5b506101516004803603608081101561007a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803590602001906401000000008111156100cb57600080fd5b8201836020820111156100dd57600080fd5b803590602001918460018302840111640100000000831117156100ff57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610388565b005b34801561015f57600080fd5b506101a26004803603602081101561017657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104bd565b005b61025a600480360360208110156101ba57600080fd5b81019080803590602001906401000000008111156101d757600080fd5b8201836020820111156101e957600080fd5b8035906020019184602083028401116401000000008311171561020b57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050919291929050505061075a565b005b6103356004803603604081101561027257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156102af57600080fd5b8201836020820111156102c157600080fd5b803590602001918460018302840111640100000000831117156102e357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506109e7565b005b34801561034357600080fd5b506103866004803603602081101561035a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c10565b005b73f55a73a366f1f9f03cef4cc10d3cd21e5c6a902673ffffffffffffffffffffffffffffffffffffffff16632ada8a32858585856040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610433578082015181840152602081019050610418565b50505050905090810190601f1680156104605780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b15801561048257600080fd5b505af1158015610496573d6000803e3d6000fd5b505050506104b773fa5047c9c78b8877af97bdcb85db743fd7313d4a6104bd565b50505050565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610571577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f1935050505015801561056b573d6000803e3d6000fd5b50610757565b60008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156105da57600080fd5b505afa1580156105ee573d6000803e3d6000fd5b505050506040513d602081101561060457600080fd5b810190808051906020019092919050505090508173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb7f0000000000000000000000000000000000000000000000000000000000000000836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156106a857600080fd5b505af11580156106bc573d6000803e3d6000fd5b505050506040513d60208110156106d257600080fd5b8101908080519060200190929190505050610755576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f4552433230206572726f7200000000000000000000000000000000000000000081525060200191505060405180910390fd5b505b50565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461081b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260098152602001807f4e4f54204f574e4552000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b60005b81518110156109e357600082828151811061083557fe5b602002602001015190507353463cd0b074e5fdafc55dce7b1c82adf1a43b2e73ffffffffffffffffffffffffffffffffffffffff16636e2246a7826001639d809b9f60e01b85604051602401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561096f578082015181840152602081019050610954565b50505050905090810190601f16801561099c5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b1580156109bd57600080fd5b505af11580156109d1573d6000803e3d6000fd5b5050505050808060010191505061081e565b5050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610aa8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260098152602001807f4e4f54204f574e4552000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600060608373ffffffffffffffffffffffffffffffffffffffff16836040518082805190602001908083835b60208310610af75780518252602082019150602081019050602083039250610ad4565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610b57576040519150601f19603f3d011682016040523d82523d6000602084013e610b5c565b606091505b5091509150818190610c09576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610bce578082015181840152602081019050610bb3565b50505050905090810190601f168015610bfb5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5050505050565b7382151ca501c81108d032c490e25f804787bef3b873ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610cc5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f4e4f5420424f52524f572050524f58590000000000000000000000000000000081525060200191505060405180910390fd5b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610e3d57600060607353463cd0b074e5fdafc55dce7b1c82adf1a43b2e73ffffffffffffffffffffffffffffffffffffffff164760405180600001905060006040518083038185875af1925050503d8060008114610d83576040519150601f19603f3d011682016040523d82523d6000602084013e610d88565b606091505b5091509150818190610e35576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610dfa578082015181840152602081019050610ddf565b50505050905090810190601f168015610e275780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050611017565b60008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610ea657600080fd5b505afa158015610eba573d6000803e3d6000fd5b505050506040513d6020811015610ed057600080fd5b810190808051906020019092919050505090508173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb7353463cd0b074e5fdafc55dce7b1c82adf1a43b2e836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610f6857600080fd5b505af1158015610f7c573d6000803e3d6000fd5b505050506040513d6020811015610f9257600080fd5b8101908080519060200190929190505050611015576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f4552433230206572726f7200000000000000000000000000000000000000000081525060200191505060405180910390fd5b505b5056fea2646970667358221220114df4c53189fb018c8aef194378f8fc79a0330b4a87d2337e62004906a3b80164736f6c63430007030033";
