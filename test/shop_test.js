const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Shop", function () {

  let shoP;

  before(async function () {
    const Shop = await ethers.getContractFactory("Shop");
    const shop = await Shop.deploy();
    await shop.deployed();

    await shop.createNewItem("TEST", "TT", 100, 1);

    shoP = shop;
  });

  it("Should return a price of the new item", async function () {

    const item_address = await shoP.getItem("TT");
    const Item = await ethers.getContractFactory("Item");
    const contract = await Item.attach(item_address);
    const price = await contract.getPrice();

    expect(await price.toString()).to.equal("1");
  });

  it("Should return a name of the new item", async function () {

    const item_address = await shoP.getItem("TT");

    const Item = await ethers.getContractFactory("Item");
    const contract = await Item.attach(item_address);

    const name = await contract.name();

    expect(await name).to.equal("TEST");
  });


  it("Should buy item", async function () {

    const accounts = await ethers.getSigners();

    console.log("Address " + accounts[0].address);

    const tup = [["TT", 1], ["TT", 1]];

    const item_address = await shoP.buy(tup, { from: accounts[0].address, value: ethers.utils.parseEther("1000") });
  });
});
