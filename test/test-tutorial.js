// // Import contract
// const Market = artifacts.require("Market");
// const NFT = artifacts.require("NFT");

// contract("Market", () => {
//     // variabled for contract instances
//     let market;
//     let token;

//     // This will execute before any of the 'describes'
//     before(async () => {
//         // The get the deployed instance of the Market contract
//         // Assign the variables to the deployed versions of the imported contracts
//         market = await Market.deployed();
//         token = await NFT.deployed();

//         await token.mint();
//     });

//     const tokenId = 1;
//     const price = 1000;

//     // 'describe' the function
//     describe('List token', () => {
//         it("Should prevent listing contract not approved", () => {
//             market.listToken(
//                 token.address, //Address of the contract itself
//                 tokenId,
//                 price
//             );
//         });
//     });
// });