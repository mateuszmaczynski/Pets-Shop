const hre = require("hardhat");

async function main() {

  //Deploy AddressStorage
  const AddressStorage = await hre.ethers.getContractFactory("AddressStorage");
  const addressStorage = await AddressStorage.deploy();

  await addressStorage.deployed();

  console.log("AddressStorage deployed to:", addressStorage.address);

  //Deploy Shop
  const Shop = await hre.ethers.getContractFactory("Shop");
  const shop = await Shop.deploy(addressStorage.address);

  await shop.deployed();
  console.log("Shop deployed to:", shop.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
