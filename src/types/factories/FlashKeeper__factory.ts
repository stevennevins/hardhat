/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { FlashKeeper } from "../FlashKeeper";

export class FlashKeeper__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _uniswapV2Router: string,
    overrides?: Overrides
  ): Promise<FlashKeeper> {
    return super.deploy(
      _uniswapV2Router,
      overrides || {}
    ) as Promise<FlashKeeper>;
  }
  getDeployTransaction(
    _uniswapV2Router: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_uniswapV2Router, overrides || {});
  }
  attach(address: string): FlashKeeper {
    return super.attach(address) as FlashKeeper;
  }
  connect(signer: Signer): FlashKeeper__factory {
    return super.connect(signer) as FlashKeeper__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FlashKeeper {
    return new Contract(address, _abi, signerOrProvider) as FlashKeeper;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IUniswapV2Router02",
        name: "_uniswapV2Router",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "WithdrawBalance",
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
        internalType: "uint256",
        name: "_tokenAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "ERC20Token",
        type: "address",
      },
    ],
    name: "getEstimatedETHForToken",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
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
  "0x60a060405234801561001057600080fd5b5060405161180a38038061180a8339818101604052602081101561003357600080fd5b81019080805190602001909291905050503373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b81525050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061012c42016001819055505060805160601c6117126100f86000398061078852806108b652806109dd5280610c6a528061129d52506117126000f3fe6080604052600436106100745760003560e01c80634b8a9b071161004e5780634b8a9b071461027a57806356e7b7aa146103325780639d809b9f1461040d578063a39d716d1461045e5761007b565b80632ada8a321461007d5780633eab9ecb1461017957806349df728c146102295761007b565b3661007b57005b005b34801561008957600080fd5b50610177600480360360808110156100a057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803590602001906401000000008111156100f157600080fd5b82018360208201111561010357600080fd5b8035906020019184600183028401116401000000008311171561012557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610468565b005b34801561018557600080fd5b506101d26004803603604081101561019c57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061059d565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102155780820151818401526020810190506101fa565b505050509050019250505060405180910390f35b34801561023557600080fd5b506102786004803603602081101561024c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061073e565b005b6103306004803603602081101561029057600080fd5b81019080803590602001906401000000008111156102ad57600080fd5b8201836020820111156102bf57600080fd5b803590602001918460208302840111640100000000831117156102e157600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192905050506109db565b005b61040b6004803603604081101561034857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561038557600080fd5b82018360208201111561039757600080fd5b803590602001918460018302840111640100000000831117156103b957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610c68565b005b34801561041957600080fd5b5061045c6004803603602081101561043057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e91565b005b61046661129b565b005b73f55a73a366f1f9f03cef4cc10d3cd21e5c6a902673ffffffffffffffffffffffffffffffffffffffff16632ada8a32858585856040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156105135780820151818401526020810190506104f8565b50505050905090810190601f1680156105405780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b15801561056257600080fd5b505af1158015610576573d6000803e3d6000fd5b5050505061059773fa5047c9c78b8877af97bdcb85db743fd7313d4a61073e565b50505050565b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d06ca61f846105e585611556565b6040518363ffffffff1660e01b81526004018083815260200180602001828103825283818151815260200191508051906020019060200280838360005b8381101561063d578082015181840152602081019050610622565b50505050905001935050505060006040518083038186803b15801561066157600080fd5b505afa158015610675573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250602081101561069f57600080fd5b81019080805160405193929190846401000000008211156106bf57600080fd5b838201915060208201858111156106d557600080fd5b82518660208202830111640100000000821117156106f257600080fd5b8083526020830192505050908051906020019060200280838360005b8381101561072957808201518184015260208101905061070e565b50505050905001604052505050905092915050565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107f2577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f193505050501580156107ec573d6000803e3d6000fd5b506109d8565b60008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561085b57600080fd5b505afa15801561086f573d6000803e3d6000fd5b505050506040513d602081101561088557600080fd5b810190808051906020019092919050505090508173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb7f0000000000000000000000000000000000000000000000000000000000000000836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561092957600080fd5b505af115801561093d573d6000803e3d6000fd5b505050506040513d602081101561095357600080fd5b81019080805190602001909291905050506109d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f4552433230206572726f7200000000000000000000000000000000000000000081525060200191505060405180910390fd5b505b50565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a9c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260098152602001807f4e4f54204f574e4552000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b60005b8151811015610c64576000828281518110610ab657fe5b602002602001015190507353463cd0b074e5fdafc55dce7b1c82adf1a43b2e73ffffffffffffffffffffffffffffffffffffffff16636e2246a7826001639d809b9f60e01b85604051602401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610bf0578082015181840152602081019050610bd5565b50505050905090810190601f168015610c1d5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015610c3e57600080fd5b505af1158015610c52573d6000803e3d6000fd5b50505050508080600101915050610a9f565b5050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d29576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260098152602001807f4e4f54204f574e4552000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600060608373ffffffffffffffffffffffffffffffffffffffff16836040518082805190602001908083835b60208310610d785780518252602082019150602081019050602083039250610d55565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610dd8576040519150601f19603f3d011682016040523d82523d6000602084013e610ddd565b606091505b5091509150818190610e8a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610e4f578082015181840152602081019050610e34565b50505050905090810190601f168015610e7c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5050505050565b7382151ca501c81108d032c490e25f804787bef3b873ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610f46576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f4e4f5420424f52524f572050524f58590000000000000000000000000000000081525060200191505060405180910390fd5b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156110be57600060607353463cd0b074e5fdafc55dce7b1c82adf1a43b2e73ffffffffffffffffffffffffffffffffffffffff164760405180600001905060006040518083038185875af1925050503d8060008114611004576040519150601f19603f3d011682016040523d82523d6000602084013e611009565b606091505b50915091508181906110b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561107b578082015181840152602081019050611060565b50505050905090810190601f1680156110a85780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050611298565b60008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561112757600080fd5b505afa15801561113b573d6000803e3d6000fd5b505050506040513d602081101561115157600080fd5b810190808051906020019092919050505090508173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb7353463cd0b074e5fdafc55dce7b1c82adf1a43b2e836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156111e957600080fd5b505af11580156111fd573d6000803e3d6000fd5b505050506040513d602081101561121357600080fd5b8101908080519060200190929190505050611296576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f4552433230206572726f7200000000000000000000000000000000000000000081525060200191505060405180910390fd5b505b50565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461135c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260098152602001807f4e4f54204f574e4552000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff164760405180600001905060006040518083038185875af1925050503d80600081146113ba576040519150601f19603f3d011682016040523d82523d6000602084013e6113bf565b606091505b505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561148a57600080fd5b505afa15801561149e573d6000803e3d6000fd5b505050506040513d60208110156114b457600080fd5b81019080805190602001909291905050506040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561151857600080fd5b505af115801561152c573d6000803e3d6000fd5b505050506040513d602081101561154257600080fd5b810190808051906020019092919050505050565b606080600267ffffffffffffffff8111801561157157600080fd5b506040519080825280602002602001820160405280156115a05781602001602082028036833780820191505090505b50905082816000815181106115b157fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ad5c46486040518163ffffffff1660e01b815260040160206040518083038186803b15801561165157600080fd5b505afa158015611665573d6000803e3d6000fd5b505050506040513d602081101561167b57600080fd5b81019080805190602001909291905050508160018151811061169957fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508091505091905056fea264697066735822122080482ba2984bb9a07a9e0808b65e218d2963b1e73594949a520c340dcc8a878d64736f6c63430007030033";
