const PurchaseAgreement = artifacts.require("./PurchaseAgreement.sol");

contract("TestingLottery", function(accounts){

    it("is true", async function() {
        await PurchaseAgreement.deployed();
        return assert.isTrue(true);
    });
})