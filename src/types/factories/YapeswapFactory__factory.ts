/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  YapeFactory,
  YapeFactoryInterface,
} from "../YapeFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeToSetter",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "pair",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "PairCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allPairs",
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
    inputs: [],
    name: "allPairsLength",
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
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    name: "createPair",
    outputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeTo",
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
    inputs: [],
    name: "feeToSetter",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "getPair",
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
        internalType: "address",
        name: "_feeTo",
        type: "address",
      },
    ],
    name: "setFeeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeToSetter",
        type: "address",
      },
    ],
    name: "setFeeToSetter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161380d38038061380d83398101604081905261002f91610054565b600180546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b61377a806100936000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063a2e74af61161005b578063a2e74af61461011b578063c9c6539614610130578063e6a4390514610143578063f46901ed1461018457600080fd5b8063017e7e581461008d578063094b7415146100d75780631e3dd18b146100f7578063574f2ba31461010a575b600080fd5b6000546100ad9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6001546100ad9073ffffffffffffffffffffffffffffffffffffffff1681565b6100ad61010536600461080c565b610197565b6003546040519081526020016100ce565b61012e6101293660046107b7565b6101ce565b005b6100ad61013e3660046107d9565b61029b565b6100ad6101513660046107d9565b600260209081526000928352604080842090915290825290205473ffffffffffffffffffffffffffffffffffffffff1681565b61012e6101923660046107b7565b6106b9565b600381815481106101a757600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b60015473ffffffffffffffffffffffffffffffffffffffff163314610254576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f556e697377617056323a20464f5242494444454e00000000000000000000000060448201526064015b60405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610333576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f556e697377617056323a204944454e544943414c5f4144445245535345530000604482015260640161024b565b6000808373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1610610370578385610373565b84845b909250905073ffffffffffffffffffffffffffffffffffffffff82166103f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f556e697377617056323a205a45524f5f41444452455353000000000000000000604482015260640161024b565b73ffffffffffffffffffffffffffffffffffffffff828116600090815260026020908152604080832085851684529091529020541615610491576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f556e697377617056323a20504149525f45584953545300000000000000000000604482015260640161024b565b6000604051806020016104a390610781565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f9091011660408190527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606086811b8216602084015285901b166034820152909150600090604801604051602081830303815290604052805190602001209050808251602084016000f56040517f485cc95500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff868116600483015285811660248301529196509086169063485cc95590604401600060405180830381600087803b1580156105ac57600080fd5b505af11580156105c0573d6000803e3d6000fd5b5050505073ffffffffffffffffffffffffffffffffffffffff84811660008181526002602081815260408084208987168086529083528185208054978d167fffffffffffffffffffffffff000000000000000000000000000000000000000098891681179091559383528185208686528352818520805488168517905560038054600181018255958190527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b9095018054909716841790965592548351928352908201527f0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9910160405180910390a35050505092915050565b60015473ffffffffffffffffffffffffffffffffffffffff16331461073a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f556e697377617056323a20464f5242494444454e000000000000000000000000604482015260640161024b565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b612f1f8061082683390190565b803573ffffffffffffffffffffffffffffffffffffffff811681146107b257600080fd5b919050565b6000602082840312156107c957600080fd5b6107d28261078e565b9392505050565b600080604083850312156107ec57600080fd5b6107f58361078e565b91506108036020840161078e565b90509250929050565b60006020828403121561081e57600080fd5b503591905056fe60806040526001600c5534801561001557600080fd5b50604080518082018252600a8152692ab734b9bbb0b8102b1960b11b6020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527fbfcc8ef98ffbf7b6c3fec7bf5185b566b9863e35a9d83acd49ad6824b5969738818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c09091019092528151910120600355600580546001600160a01b03191633179055612e17806101086000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a71461049b578063d505accf146104bb578063dd62ed3e146104ce578063fff6cae9146104f957600080fd5b8063ba9a7a561461045f578063bc25cf7714610468578063c45a01551461047b57600080fd5b80637ecebe00116100d35780637ecebe00146103c857806389afcb44146103e857806395d89b4114610410578063a9059cbb1461044c57600080fd5b80636a6278421461038c57806370a082311461039f5780637464fc3d146103bf57600080fd5b806323b872dd116101665780633644e515116101405780633644e5151461035e578063485cc955146103675780635909c0d51461037a5780635a3d54931461038357600080fd5b806323b872dd1461030a57806330adf81f1461031d578063313ce5671461034457600080fd5b8063095ea7b311610197578063095ea7b31461028b5780630dfe1681146102ae57806318160ddd146102f357600080fd5b8063022c0d9f146101be57806306fdde03146101d35780630902f1ac14610225575b600080fd5b6101d16101cc366004612a42565b610501565b005b61020f6040518060400160405280600a81526020017f556e69737761702056320000000000000000000000000000000000000000000081525081565b60405161021c9190612b6c565b60405180910390f35b600854604080516dffffffffffffffffffffffffffff80841682526e01000000000000000000000000000084041660208201527c010000000000000000000000000000000000000000000000000000000090920463ffffffff169082015260600161021c565b61029e6102993660046129db565b610c7b565b604051901515815260200161021c565b6006546102ce9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161021c565b6102fc60005481565b60405190815260200161021c565b61029e610318366004612923565b610c92565b6102fc7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b61034c601281565b60405160ff909116815260200161021c565b6102fc60035481565b6101d16103753660046128ea565b610d6b565b6102fc60095481565b6102fc600a5481565b6102fc61039a3660046128b0565b610e3f565b6102fc6103ad3660046128b0565b60016020526000908152604090205481565b6102fc600b5481565b6102fc6103d63660046128b0565b60046020526000908152604090205481565b6103fb6103f63660046128b0565b611233565b6040805192835260208301919091520161021c565b61020f6040518060400160405280600681526020017f554e492d5632000000000000000000000000000000000000000000000000000081525081565b61029e61045a3660046129db565b611727565b6102fc6103e881565b6101d16104763660046128b0565b611734565b6005546102ce9073ffffffffffffffffffffffffffffffffffffffff1681565b6007546102ce9073ffffffffffffffffffffffffffffffffffffffff1681565b6101d16104c9366004612964565b611906565b6102fc6104dc3660046128ea565b600260209081526000928352604080842090915290825290205481565b6101d1611bf1565b600c54600114610572576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f556e697377617056323a204c4f434b454400000000000000000000000000000060448201526064015b60405180910390fd5b6000600c55841515806105855750600084115b610611576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f556e697377617056323a20494e53554646494349454e545f4f55545055545f4160448201527f4d4f554e540000000000000000000000000000000000000000000000000000006064820152608401610569565b60008061066d6008546dffffffffffffffffffffffffffff808216926e01000000000000000000000000000083049091169163ffffffff7c01000000000000000000000000000000000000000000000000000000009091041690565b5091509150816dffffffffffffffffffffffffffff16871080156106a05750806dffffffffffffffffffffffffffff1686105b61072c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f556e697377617056323a20494e53554646494349454e545f4c4951554944495460448201527f59000000000000000000000000000000000000000000000000000000000000006064820152608401610569565b600654600754600091829173ffffffffffffffffffffffffffffffffffffffff91821691908116908916821480159061079157508073ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff1614155b6107f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f556e697377617056323a20494e56414c49445f544f00000000000000000000006044820152606401610569565b8a1561080857610808828a8d611ddb565b891561081957610819818a8c611ddb565b86156108ac576040517f10d1e85c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a16906310d1e85c906108799033908f908f908e908e90600401612af4565b600060405180830381600087803b15801561089357600080fd5b505af11580156108a7573d6000803e3d6000fd5b505050505b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a082319060240160206040518083038186803b15801561091157600080fd5b505afa158015610925573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109499190612a29565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290945073ffffffffffffffffffffffffffffffffffffffff8216906370a082319060240160206040518083038186803b1580156109b157600080fd5b505afa1580156109c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e99190612a29565b92505050600089856dffffffffffffffffffffffffffff16610a0b9190612ca5565b8311610a18576000610a3c565b610a328a6dffffffffffffffffffffffffffff8716612ca5565b610a3c9084612ca5565b90506000610a5a8a6dffffffffffffffffffffffffffff8716612ca5565b8311610a67576000610a8b565b610a818a6dffffffffffffffffffffffffffff8716612ca5565b610a8b9084612ca5565b90506000821180610a9c5750600081115b610b27576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f556e697377617056323a20494e53554646494349454e545f494e5055545f414d60448201527f4f554e54000000000000000000000000000000000000000000000000000000006064820152608401610569565b6000610b49610b37846003611f7b565b610b43876103e8611f7b565b90612005565b90506000610b5b610b37846003611f7b565b9050610b87620f4240610b816dffffffffffffffffffffffffffff8b8116908b16611f7b565b90611f7b565b610b918383611f7b565b1015610bf9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f556e697377617056323a204b00000000000000000000000000000000000000006044820152606401610569565b5050610c078484888861207d565b60408051838152602081018390529081018c9052606081018b905273ffffffffffffffffffffffffffffffffffffffff8a169033907fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229060800160405180910390a350506001600c55505050505050505050565b6000610c88338484612359565b5060015b92915050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526002602090815260408083203384529091528120547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff14610d565773ffffffffffffffffffffffffffffffffffffffff84166000908152600260209081526040808320338452909152902054610d249083612005565b73ffffffffffffffffffffffffffffffffffffffff851660009081526002602090815260408083203384529091529020555b610d618484846123c8565b5060019392505050565b60055473ffffffffffffffffffffffffffffffffffffffff163314610dec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f556e697377617056323a20464f5242494444454e0000000000000000000000006044820152606401610569565b6006805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161790915560078054929093169116179055565b6000600c54600114610ead576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f556e697377617056323a204c4f434b45440000000000000000000000000000006044820152606401610569565b6000600c819055600854600654604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290516dffffffffffffffffffffffffffff808516956e01000000000000000000000000000090950416939273ffffffffffffffffffffffffffffffffffffffff16916370a08231916024808301926020929190829003018186803b158015610f4e57600080fd5b505afa158015610f62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f869190612a29565b6007546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015291925060009173ffffffffffffffffffffffffffffffffffffffff909116906370a082319060240160206040518083038186803b158015610ff557600080fd5b505afa158015611009573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061102d9190612a29565b9050600061104b836dffffffffffffffffffffffffffff8716612005565b90506000611069836dffffffffffffffffffffffffffff8716612005565b905060006110778787612495565b600054909150806110ae5761109a6103e8610b436110958787611f7b565b61260f565b98506110a960006103e861267f565b611103565b6111006dffffffffffffffffffffffffffff89166110cc8684611f7b565b6110d69190612c10565b6dffffffffffffffffffffffffffff89166110f18685611f7b565b6110fb9190612c10565b612728565b98505b60008911611193576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f556e697377617056323a20494e53554646494349454e545f4c4951554944495460448201527f595f4d494e5445440000000000000000000000000000000000000000000000006064820152608401610569565b61119d8a8a61267f565b6111a986868a8a61207d565b81156111e5576008546111e1906dffffffffffffffffffffffffffff808216916e010000000000000000000000000000900416611f7b565b600b555b604080518581526020810185905233917f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f910160405180910390a250506001600c5550949695505050505050565b600080600c546001146112a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f556e697377617056323a204c4f434b45440000000000000000000000000000006044820152606401610569565b6000600c819055600854600654600754604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290516dffffffffffffffffffffffffffff808616966e010000000000000000000000000000909604169473ffffffffffffffffffffffffffffffffffffffff94851694909316929184916370a0823191602480820192602092909190829003018186803b15801561134f57600080fd5b505afa158015611363573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113879190612a29565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290915060009073ffffffffffffffffffffffffffffffffffffffff8416906370a082319060240160206040518083038186803b1580156113f257600080fd5b505afa158015611406573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061142a9190612a29565b306000908152600160205260408120549192506114478888612495565b600054909150806114588487611f7b565b6114629190612c10565b9a508061146f8486611f7b565b6114799190612c10565b995060008b11801561148b575060008a115b611517576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f556e697377617056323a20494e53554646494349454e545f4c4951554944495460448201527f595f4255524e45440000000000000000000000000000000000000000000000006064820152608401610569565b6115213084612740565b61152c878d8d611ddb565b611537868d8c611ddb565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8816906370a082319060240160206040518083038186803b15801561159c57600080fd5b505afa1580156115b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115d49190612a29565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290955073ffffffffffffffffffffffffffffffffffffffff8716906370a082319060240160206040518083038186803b15801561163c57600080fd5b505afa158015611650573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116749190612a29565b935061168285858b8b61207d565b81156116be576008546116ba906dffffffffffffffffffffffffffff808216916e010000000000000000000000000000900416611f7b565b600b555b604080518c8152602081018c905273ffffffffffffffffffffffffffffffffffffffff8e169133917fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496910160405180910390a35050505050505050506001600c81905550915091565b6000610c883384846123c8565b600c546001146117a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f556e697377617056323a204c4f434b45440000000000000000000000000000006044820152606401610569565b6000600c556006546007546008546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff93841693909216916118779184918691611872916dffffffffffffffffffffffffffff9091169084906370a08231906024015b60206040518083038186803b15801561183a57600080fd5b505afa15801561184e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b439190612a29565b611ddb565b6008546040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526118fc9183918691611872916e0100000000000000000000000000009091046dffffffffffffffffffffffffffff169073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401611822565b50506001600c5550565b42841015611970576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f556e697377617056323a204558504952454400000000000000000000000000006044820152606401610569565b60035473ffffffffffffffffffffffffffffffffffffffff8816600090815260046020526040812080549192917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9918b918b918b9190876119d083612d11565b9091555060408051602081019690965273ffffffffffffffffffffffffffffffffffffffff94851690860152929091166060840152608083015260a082015260c0810187905260e00160405160208183030381529060405280519060200120604051602001611a719291907f190100000000000000000000000000000000000000000000000000000000000081526002810192909252602282015260420190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611afa573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff811615801590611b7557508873ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b611bdb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f556e697377617056323a20494e56414c49445f5349474e4154555245000000006044820152606401610569565b611be6898989612359565b505050505050505050565b600c54600114611c5d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f556e697377617056323a204c4f434b45440000000000000000000000000000006044820152606401610569565b6000600c556006546040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152611dd49173ffffffffffffffffffffffffffffffffffffffff16906370a082319060240160206040518083038186803b158015611ccd57600080fd5b505afa158015611ce1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d059190612a29565b6007546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a082319060240160206040518083038186803b158015611d6e57600080fd5b505afa158015611d82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611da69190612a29565b6008546dffffffffffffffffffffffffffff808216916e01000000000000000000000000000090041661207d565b6001600c55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e743235362900000000000000602091820152815173ffffffffffffffffffffffffffffffffffffffff85811660248301526044808301869052845180840390910181526064909201845291810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905291516000928392871691611ea29190612ad8565b6000604051808303816000865af19150503d8060008114611edf576040519150601f19603f3d011682016040523d82523d6000602084013e611ee4565b606091505b5091509150818015611f0e575080511580611f0e575080806020019051810190611f0e9190612a07565b611f74576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f556e697377617056323a205452414e534645525f4641494c45440000000000006044820152606401610569565b5050505050565b6000811580611f9f57508282611f918183612c68565b9250611f9d9083612c10565b145b610c8c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f64732d6d6174682d6d756c2d6f766572666c6f770000000000000000000000006044820152606401610569565b6000826120128382612ca5565b9150811115610c8c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f64732d6d6174682d7375622d756e646572666c6f7700000000000000000000006044820152606401610569565b6dffffffffffffffffffffffffffff84118015906120a957506dffffffffffffffffffffffffffff8311155b61210f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f556e697377617056323a204f564552464c4f57000000000000000000000000006044820152606401610569565b600061212064010000000042612d4a565b600854909150600090612159907c0100000000000000000000000000000000000000000000000000000000900463ffffffff1683612cbc565b905060008163ffffffff1611801561218057506dffffffffffffffffffffffffffff841615155b801561219b57506dffffffffffffffffffffffffffff831615155b15612269578063ffffffff166121d8856121b4866127f1565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169061281c565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166122009190612c68565b600960008282546122119190612bbd565b909155505063ffffffff811661222a846121b4876127f1565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166122529190612c68565b600a60008282546122639190612bbd565b90915550505b6008805463ffffffff84167c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff6dffffffffffffffffffffffffffff8981166e0100000000000000000000000000009081027fffffffff000000000000000000000000000000000000000000000000000000009095168c83161794909417918216831794859055604080519382169282169290921783529290930490911660208201527f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1910160405180910390a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600160205260409020546123f89082612005565b73ffffffffffffffffffffffffffffffffffffffff80851660009081526001602052604080822093909355908416815220546124349082612838565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526001602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906123bb9085815260200190565b600080600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b15801561250057600080fd5b505afa158015612514573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061253891906128cd565b600b5473ffffffffffffffffffffffffffffffffffffffff82161580159450919250906125fb5780156125f65760006125876110956dffffffffffffffffffffffffffff888116908816611f7b565b905060006125948361260f565b9050808211156125f35760006125b66125ad8484612005565b60005490611f7b565b905060006125cf836125c9866005611f7b565b90612838565b905060006125dd8284612c10565b905080156125ef576125ef878261267f565b5050505b50505b612607565b8015612607576000600b555b505092915050565b600060038211156126705750806000612629600283612c10565b612634906001612bbd565b90505b8181101561266a5790508060028161264f8186612c10565b6126599190612bbd565b6126639190612c10565b9050612637565b50919050565b811561267a575060015b919050565b60005461268c9082612838565b600090815573ffffffffffffffffffffffffffffffffffffffff83168152600160205260409020546126be9082612838565b73ffffffffffffffffffffffffffffffffffffffff83166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061271c9085815260200190565b60405180910390a35050565b60008183106127375781612739565b825b9392505050565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600160205260409020546127709082612005565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260016020526040812091909155546127a49082612005565b600090815560405182815273ffffffffffffffffffffffffffffffffffffffff8416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161271c565b6000610c8c6e0100000000000000000000000000006dffffffffffffffffffffffffffff8416612c24565b60006127396dffffffffffffffffffffffffffff831684612bd5565b6000826128458382612bbd565b9150811015610c8c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f64732d6d6174682d6164642d6f766572666c6f770000000000000000000000006044820152606401610569565b6000602082840312156128c257600080fd5b813561273981612dbc565b6000602082840312156128df57600080fd5b815161273981612dbc565b600080604083850312156128fd57600080fd5b823561290881612dbc565b9150602083013561291881612dbc565b809150509250929050565b60008060006060848603121561293857600080fd5b833561294381612dbc565b9250602084013561295381612dbc565b929592945050506040919091013590565b600080600080600080600060e0888a03121561297f57600080fd5b873561298a81612dbc565b9650602088013561299a81612dbc565b95506040880135945060608801359350608088013560ff811681146129be57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156129ee57600080fd5b82356129f981612dbc565b946020939093013593505050565b600060208284031215612a1957600080fd5b8151801515811461273957600080fd5b600060208284031215612a3b57600080fd5b5051919050565b600080600080600060808688031215612a5a57600080fd5b85359450602086013593506040860135612a7381612dbc565b9250606086013567ffffffffffffffff80821115612a9057600080fd5b818801915088601f830112612aa457600080fd5b813581811115612ab357600080fd5b896020828501011115612ac557600080fd5b9699959850939650602001949392505050565b60008251612aea818460208701612ce1565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff8616815284602082015283604082015260806060820152816080820152818360a0830137600081830160a090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101949350505050565b6020815260008251806020840152612b8b816040850160208701612ce1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008219821115612bd057612bd0612d5e565b500190565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff80841680612c0457612c04612d8d565b92169190910492915050565b600082612c1f57612c1f612d8d565b500490565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff80831681851681830481118215151615612c5f57612c5f612d5e565b02949350505050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612ca057612ca0612d5e565b500290565b600082821015612cb757612cb7612d5e565b500390565b600063ffffffff83811690831681811015612cd957612cd9612d5e565b039392505050565b60005b83811015612cfc578181015183820152602001612ce4565b83811115612d0b576000848401525b50505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612d4357612d43612d5e565b5060010190565b600082612d5957612d59612d8d565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff81168114612dde57600080fd5b5056fea26469706673582212200b9cbe24450748515d1a21abe21444e20fd5b1227aea0ef9d33837d952d1e33464736f6c63430008060033a26469706673582212208669b7476ebfc91d1658b1e935ac638c593a298683b2b3deb9acebb003bacccc64736f6c63430008060033";

export class YapeFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _feeToSetter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<YapeFactory> {
    return super.deploy(
      _feeToSetter,
      overrides || {}
    ) as Promise<YapeFactory>;
  }
  getDeployTransaction(
    _feeToSetter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_feeToSetter, overrides || {});
  }
  attach(address: string): YapeFactory {
    return super.attach(address) as YapeFactory;
  }
  connect(signer: Signer): YapeFactory__factory {
    return super.connect(signer) as YapeFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YapeFactoryInterface {
    return new utils.Interface(_abi) as YapeFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YapeFactory {
    return new Contract(address, _abi, signerOrProvider) as YapeFactory;
  }
}
