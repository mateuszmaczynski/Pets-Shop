const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Delivery", function () {

    let deliverY;

    it("Should return a price of the new item", async function () {
        const Delivery = await ethers.getContractFactory("Delivery");

        const delivery = await Delivery.attach(DELIVERY_ADDRESS);

        console.log("Delivery deployed to:", delivery.address);

      const id = await delivery.createRequestTo(ITEM_DELIVERY_URL, ITEM_CODE);

        console.log("Request success " + id.toString());

        console.log(await delivery.data());

    }).timeout(1000000);
});
