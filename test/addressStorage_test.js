const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AddressStorage", function () {

    let addressStoragE;

    before(async function () {
        const AddressStorage = await ethers.getContractFactory("AddressStorage");
        const addressStorage = await AddressStorage.deploy();
        await addressStorage.deployed();

        addressStoragE = addressStorage;
    });

    it("Should return an address of the contract owner", async function () {

        const accounts = await ethers.getSigners();

        const ownerAddress = await addressStoragE.getOwner();

        expect(ownerAddress.toString()).to.equal(accounts[0].address.toString());
    }).timeout(10000);

    it("Should set an fake EUR stable coin address and return it", async function () {

        const accounts = await ethers.getSigners();
        await addressStoragE.setTokenAddress("EUR", accounts[2].address);

        const EURFakeAddress = await addressStoragE.getTokenAddress("EUR");

        console.log(EURFakeAddress);
        expect(EURFakeAddress.toString()).to.equal(accounts[2].address.toString());
    }).timeout(10000);
});
