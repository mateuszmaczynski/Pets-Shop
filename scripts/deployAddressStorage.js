const hre = require("hardhat");

async function main() {


  const accounts = await ethers.getSigners();

  const AddressStorage = await hre.ethers.getContractFactory("AddressStorage");
  const addressStorage = await AddressStorage.deploy();

  await addressStorage.deployed();

  console.log("AddressStorage deployed to:", addressStorage.address);
  console.log("AddressStorage owner :", await addressStorage.getOwner());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
