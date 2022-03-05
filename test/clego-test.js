const hre = require("hardhat");
const { deployContract, provider } = hre.waffle;
const { expect, assert } = require("chai");
const CLEGOnft = require("../artifacts/contracts/CLEGOnft.sol/CLEGOnft.json")

const ERC721IFID = "0x80ac58cd";
const ERC165IFID = "0x01ffc9a7";

describe("CLEGO NFT Test", async () => {
    const [deployer, james, mary, approved] = provider.getWallets();

    before(async () => {
        this.instance = await deployContract(deployer, CLEGOnft);
    });

    // Test case
    it ("Should implement ERC-721 and ERC-165", async () => {
        const v1 = await this.instance.supportsInterface(ERC721IFID);
        const v2 = await this.instance.supportsInterface(ERC165IFID);

        assert.isOk(v1&&v2);
    });
});
