const hre = require("hardhat");

async function main() {
  const Tickets = await hre.ethers.getContractFactory("Tickets");
  const tickets = await Tickets.deploy();

  await tickets.deployed();

  console.log("Tickets deployed to:", tickets.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
