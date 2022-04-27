/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UpgradeableERC20, UpgradeableERC20Interface } from "./UpgradeableERC20";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cap",
        type: "uint256",
      },
    ],
    name: "MinterCapUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAUSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "getMinterCap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "minterSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "cap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    name: "setMetadata",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "cap",
        type: "uint256",
      },
    ],
    name: "setMinterCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506005805461ff0019169055611f528061002b6000396000f3fe608060405234801561001057600080fd5b50600436106102115760003560e01c806379cc679011610125578063a9059cbb116100ad578063d53913931161007c578063d5391393146104b3578063d547741f146104da578063dd62ed3e146104ed578063de7ea79d14610500578063e63ab1e91461051357610211565b8063a9059cbb14610451578063c8e1b4ce14610464578063ca15c87314610477578063cd3c7e1f1461048a57610211565b806395609212116100f457806395609212146103df57806395d89b411461041b5780639dc29fac14610423578063a217fddf14610436578063a457c2d71461043e57610211565b806379cc6790146103865780638456cb59146103995780639010d07c146103a157806391d14854146103cc57610211565b8063313ce567116101a857806340c10f191161017757806340c10f191461031357806342966c681461032657806351335b50146103395780635c975abb1461034c57806370a082311461035d57610211565b8063313ce567146102d057806336568abe146102e557806339509351146102f85780633f4ba83a1461030b57610211565b806318160ddd116101e457806318160ddd1461027357806323b872dd14610285578063248a9ca3146102985780632f2ff15d146102bb57610211565b806301ffc9a71461021657806306fdde031461023e578063095ea7b314610253578063158ef93e14610266575b600080fd5b610229610224366004611c4a565b610528565b60405190151581526020015b60405180910390f35b610246610555565b6040516102359190611dd1565b610229610261366004611bc6565b6105e7565b6008546102299060ff1681565b6002545b604051908152602001610235565b610229610293366004611b8b565b610601565b6102776102a6366004611bef565b60009081526006602052604090206001015490565b6102ce6102c9366004611c07565b610625565b005b60055460405160ff9091168152602001610235565b6102ce6102f3366004611c07565b61064f565b610229610306366004611bc6565b6106d2565b6102ce6106f4565b6102ce610321366004611bc6565b61077d565b6102ce610334366004611bef565b6108a1565b6102ce610347366004611c72565b6108ae565b610229600554610100900460ff1690565b61027761036b366004611b3f565b6001600160a01b031660009081526020819052604090205490565b6102ce610394366004611bc6565b6108cb565b6102ce61098d565b6103b46103af366004611c29565b610a12565b6040516001600160a01b039091168152602001610235565b6102296103da366004611c07565b610a31565b6104066103ed366004611b3f565b6009602052600090815260409020805460019091015482565b60408051928352602083019190915201610235565b610246610a5c565b6102ce610431366004611bc6565b610a6b565b610277600081565b61022961044c366004611bc6565b610a75565b61022961045f366004611bc6565b610af0565b6102ce610472366004611bc6565b610afe565b610277610485366004611bef565b610b63565b610277610498366004611b3f565b6001600160a01b031660009081526009602052604090205490565b6102777f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6102ce6104e8366004611c07565b610b7a565b6102776104fb366004611b59565b610b9f565b6102ce61050e366004611cd3565b610bca565b610277600080516020611efd83398151915281565b60006001600160e01b03198216635a05180f60e01b148061054d575061054d82610cde565b90505b919050565b60606003805461056490611e95565b80601f016020809104026020016040519081016040528092919081815260200182805461059090611e95565b80156105dd5780601f106105b2576101008083540402835291602001916105dd565b820191906000526020600020905b8154815290600101906020018083116105c057829003601f168201915b5050505050905090565b6000336105f5818585610d13565b60019150505b92915050565b60003361060f858285610e37565b61061a858585610eb1565b506001949350505050565b6000828152600660205260409020600101546106408161108a565b61064a8383611094565b505050565b6001600160a01b03811633146106c45760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6106ce82826110b6565b5050565b6000336105f58185856106e58383610b9f565b6106ef9190611e04565b610d13565b61070c600080516020611efd833981519152336103da565b6107735760405162461bcd60e51b815260206004820152603260248201527f5570677261646561626c6545524332303a206d75737420686176652070617573604482015271657220726f6c6520746f20756e706175736560701b60648201526084016106bb565b61077b6110d8565b565b6107a77f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336103da565b61080b5760405162461bcd60e51b815260206004820152602f60248201527f5570677261646561626c6545524332303a206d7573742068617665206d696e7460448201526e195c881c9bdb19481d1bc81b5a5b9d608a1b60648201526084016106bb565b3360009081526009602052604081206001810180549192849261082f908490611e04565b90915550508054600182015411156108975760405162461bcd60e51b815260206004820152602560248201527f5570677261646561626c6545524332303a206d696e7465722063617020657863604482015264195959195960da1b60648201526084016106bb565b61064a8383611177565b6108ab3382611263565b50565b60006108b98161108a565b6108c2836113bd565b61064a826113d0565b33600090815260096020526040902080541515806108ed575060008160010154115b1561097857818160010154101561096c5760405162461bcd60e51b815260206004820152603960248201527f5570677261646561626c6545524332303a206275726e20616d6f756e7420657860448201527f6365656473206d696e74657220746f74616c20737570706c790000000000000060648201526084016106bb565b60018101805483900390555b610983833384610e37565b61064a8383611263565b6109a5600080516020611efd833981519152336103da565b610a0a5760405162461bcd60e51b815260206004820152603060248201527f5570677261646561626c6545524332303a206d7573742068617665207061757360448201526f657220726f6c6520746f20706175736560801b60648201526084016106bb565b61077b6113e3565b6000828152600760205260408120610a2a908361146b565b9392505050565b60009182526006602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60606004805461056490611e95565b6106ce82826108cb565b60003381610a838286610b9f565b905083811015610ae35760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016106bb565b61061a8286868403610d13565b6000336105f5818585610eb1565b6000610b098161108a565b6001600160a01b03831660008181526009602052604090819020849055517f9917e077a26c11e709ef1e3646df334b6146e2b10a05501633864b047c53432c90610b569085815260200190565b60405180910390a2505050565b600081815260076020526040812061054d90611477565b600082815260066020526040902060010154610b958161108a565b61064a83836110b6565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60085460ff1615610c135760405162461bcd60e51b8152602060048201526013602482015272696e697469616c697a656420616c726561647960681b60448201526064016106bb565b6008805460ff19166001179055610c29846113bd565b610c32836113d0565b6005805460ff191660ff8416179055610c4c600082611481565b610c64600080516020611efd83398151915282611481565b610c8e7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633611481565b336000818152600960209081526040918290206000199081905591519182527f9917e077a26c11e709ef1e3646df334b6146e2b10a05501633864b047c53432c910160405180910390a250505050565b60006001600160e01b03198216637965db0b60e01b148061054d57506301ffc9a760e01b6001600160e01b031983161461054d565b6001600160a01b038316610d755760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016106bb565b6001600160a01b038216610dd65760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016106bb565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000610e438484610b9f565b90506000198114610eab5781811015610e9e5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016106bb565b610eab8484848403610d13565b50505050565b6001600160a01b038316610f155760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016106bb565b6001600160a01b038216610f775760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016106bb565b610f8283838361148b565b6001600160a01b03831660009081526020819052604090205481811015610ffa5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016106bb565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290611031908490611e04565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161107d91815260200190565b60405180910390a3610eab565b6108ab8133611496565b61109e82826114fa565b600082815260076020526040902061064a9082611580565b6110c08282611595565b600082815260076020526040902061064a90826115fc565b6110e9600554610100900460ff1690565b61112c5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016106bb565b6005805461ff00191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b0382166111cd5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016106bb565b6111d96000838361148b565b80600260008282546111eb9190611e04565b90915550506001600160a01b03821660009081526020819052604081208054839290611218908490611e04565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a36106ce565b6001600160a01b0382166112c35760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016106bb565b6112cf8260008361148b565b6001600160a01b038216600090815260208190526040902054818110156113435760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016106bb565b6001600160a01b0383166000908152602081905260408120838303905560028054849290611372908490611e3b565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a361064a565b80516106ce906003906020840190611a08565b80516106ce906004906020840190611a08565b6113f4600554610100900460ff1690565b156114345760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016106bb565b6005805461ff0019166101001790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861115a3390565b6000610a2a8383611611565b600061054d825490565b6106ce8282611094565b61064a838383611649565b6114a08282610a31565b6106ce576114b8816001600160a01b031660146116ba565b6114c38360206116ba565b6040516020016114d4929190611d5c565b60408051601f198184030181529082905262461bcd60e51b82526106bb91600401611dd1565b6115048282610a31565b6106ce5760008281526006602090815260408083206001600160a01b03851684529091529020805460ff1916600117905561153c3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610a2a836001600160a01b03841661189c565b61159f8282610a31565b156106ce5760008281526006602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610a2a836001600160a01b0384166118eb565b600082600001828154811061163657634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905092915050565b61165a600554610100900460ff1690565b1561064a5760405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e736665722077686044820152691a5b19481c185d5cd95960b21b60648201526084016106bb565b606060006116c9836002611e1c565b6116d4906002611e04565b67ffffffffffffffff8111156116fa57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611724576020820181803683370190505b509050600360fc1b8160008151811061174d57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061178a57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060006117ae846002611e1c565b6117b9906001611e04565b90505b600181111561184d576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106117fb57634e487b7160e01b600052603260045260246000fd5b1a60f81b82828151811061181f57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c9361184681611e7e565b90506117bc565b508315610a2a5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016106bb565b60008181526001830160205260408120546118e3575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556105fb565b5060006105fb565b600081815260018301602052604081205480156119fe57600061190f600183611e3b565b855490915060009061192390600190611e3b565b90508181146119a457600086600001828154811061195157634e487b7160e01b600052603260045260246000fd5b906000526020600020015490508087600001848154811061198257634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255918252600188019052604090208390555b85548690806119c357634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506105fb565b60009150506105fb565b828054611a1490611e95565b90600052602060002090601f016020900481019282611a365760008555611a7c565b82601f10611a4f57805160ff1916838001178555611a7c565b82800160010185558215611a7c579182015b82811115611a7c578251825591602001919060010190611a61565b50611a88929150611a8c565b5090565b5b80821115611a885760008155600101611a8d565b80356001600160a01b038116811461055057600080fd5b600082601f830112611ac8578081fd5b813567ffffffffffffffff80821115611ae357611ae3611ee6565b604051601f8301601f19908116603f01168101908282118183101715611b0b57611b0b611ee6565b81604052838152866020858801011115611b23578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215611b50578081fd5b610a2a82611aa1565b60008060408385031215611b6b578081fd5b611b7483611aa1565b9150611b8260208401611aa1565b90509250929050565b600080600060608486031215611b9f578081fd5b611ba884611aa1565b9250611bb660208501611aa1565b9150604084013590509250925092565b60008060408385031215611bd8578182fd5b611be183611aa1565b946020939093013593505050565b600060208284031215611c00578081fd5b5035919050565b60008060408385031215611c19578182fd5b82359150611b8260208401611aa1565b60008060408385031215611c3b578182fd5b50508035926020909101359150565b600060208284031215611c5b578081fd5b81356001600160e01b031981168114610a2a578182fd5b60008060408385031215611c84578182fd5b823567ffffffffffffffff80821115611c9b578384fd5b611ca786838701611ab8565b93506020850135915080821115611cbc578283fd5b50611cc985828601611ab8565b9150509250929050565b60008060008060808587031215611ce8578081fd5b843567ffffffffffffffff80821115611cff578283fd5b611d0b88838901611ab8565b95506020870135915080821115611d20578283fd5b50611d2d87828801611ab8565b935050604085013560ff81168114611d43578182fd5b9150611d5160608601611aa1565b905092959194509250565b60007f416363657373436f6e74726f6c3a206163636f756e742000000000000000000082528351611d94816017850160208801611e52565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611dc5816028840160208801611e52565b01602801949350505050565b6000602082528251806020840152611df0816040850160208701611e52565b601f01601f19169190910160400192915050565b60008219821115611e1757611e17611ed0565b500190565b6000816000190483118215151615611e3657611e36611ed0565b500290565b600082821015611e4d57611e4d611ed0565b500390565b60005b83811015611e6d578181015183820152602001611e55565b83811115610eab5750506000910152565b600081611e8d57611e8d611ed0565b506000190190565b600281046001821680611ea957607f821691505b60208210811415611eca57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfe65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862aa2646970667358221220f3df50fa3fac4a363b363e513231919d10fb4a15d7dcc468903a3b6fbb0e2c4164736f6c63430008020033";

type UpgradeableERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: UpgradeableERC20ConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class UpgradeableERC20__factory extends ContractFactory {
  constructor(...args: UpgradeableERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<UpgradeableERC20> {
    return super.deploy(overrides || {}) as Promise<UpgradeableERC20>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UpgradeableERC20 {
    return super.attach(address) as UpgradeableERC20;
  }
  connect(signer: Signer): UpgradeableERC20__factory {
    return super.connect(signer) as UpgradeableERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradeableERC20Interface {
    return new utils.Interface(_abi) as UpgradeableERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): UpgradeableERC20 {
    return new Contract(address, _abi, signerOrProvider) as UpgradeableERC20;
  }
}