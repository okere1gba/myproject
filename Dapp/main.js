const serverUrl = "https://o6gog5mfsk6p.usemoralis.com:2053/server";
const appId = "wkNEecToTGkZUlOabUYzA56h0pk1QLVZGoObjBiZ";
const contractAddress = "0x9e0706203cc764a335ed6cdd1af01c2f6010f1ac";
Moralis.start({ serverUrl, appId });

//https://410fxuii5x4o.usemoralis.com:2053/server
//"1LmfM4Q0Fm5VAlacsIOaQ7fym9x0ivhzisoN0Sl2

const initiate = async () => await Moralis.enableWeb3();
web3Provider = initiate().then((res) => console.log("Initiated::", res));

async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate();
  }
  console.log("logged in user:");

  window.location.href = "dashboard.html";
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");

  window.location.href = "sign-in.html";
}

signup = async (email, password) => {
  const user = new Moralis.User();
  user.set("username", email);
  user.set("password", "my pass");
  user.set("email", email);

  try {
    await user.signUp();

    window.location.href = "dashboard.html";
  } catch (error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
};

if (document.querySelector("#btn-signin") != null) {
  document.querySelector("#btn-signin").onclick = login;
}
if (document.querySelector("#btn-logout") != null) {
  document.querySelector("#btn-logout").onclick = logOut;
}

console.log("my action");
try {
  document.getElementById("btn-signin2").onclick = () => {
    signup(
      document.getElementById("email").value,
      document.getElementById("password").value
    );
  };
} catch (error) {
  console.log("error:::", error);
}

document.getElementById("btn-store").onclick = call;

const ABI = [
  [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "empid",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "string",
          name: "dateRegistered",
          type: "string",
        },
        {
          internalType: "string",
          name: "hospitalRegistered",
          type: "string",
        },
        {
          internalType: "string",
          name: "placeOfbirth",
          type: "string",
        },
        {
          internalType: "string",
          name: "fatherName",
          type: "string",
        },
        {
          internalType: "string",
          name: "motherName",
          type: "string",
        },
        {
          internalType: "string",
          name: "lga",
          type: "string",
        },
      ],
      name: "addindividual",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "empid",
          type: "uint256",
        },
      ],
      name: "getidividual",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
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
      name: "mymassage",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
  ],
];
const readOptions = {
  contractAddress: "0x9e0706203cc764a335ed6cdd1af01c2f6010f1ac",
  functionName: "mymassage",
  abi: ABI,
};

async function call() {
  console.log("calling...");
  const message = await Moralis.executeFunction(readOptions);
  console.log(mymassage);
  alart("messaged displayed");
}
/*var Web3 = require("web3");
var web3 = new Web3(Web3.currentProvider);
async function call() {
  console.log("contract loading.....");
  var contract = new web3.eth.Contract(ABI, contractAddress);
  contract.methods
    .mymassage()
    .call()
    .then(function (mymassage) {
      document.getElementById("getting").innerHTML(mymassage);
    });
  alert("this is the message");
}*/
