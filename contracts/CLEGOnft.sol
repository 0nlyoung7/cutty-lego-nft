//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CLEGOnft is ERC721URIStorage {
    address owner;

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor() ERC721("Cutty LEGO NFT", "CLEGO") {
        owner = msg.sender;
    }

    function mint(
        address toAddr,
        uint256 tokenId,
        string memory tokenURI
    ) public onlyOwner returns (uint256) {
        //_tokenIds.increment();
        //uint256 newItemId = _tokenIds.current();
        uint256 newItemId = tokenId;
        _mint(toAddr, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}
