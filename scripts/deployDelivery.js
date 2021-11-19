const hre = require("hardhat");

async function main() {

  const Delivery = await hre.ethers.getContractFactory("Delivery");
  const delivery = await Delivery.deploy();

  await delivery.deployed();

  console.log("Delivery deployed to:", delivery.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });