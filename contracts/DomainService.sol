// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract DomainService is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    mapping(string => uint256) public nameToTokenId;

    constructor() ERC721("0G Name Service", "OGNS") {}

    function isAvailable(string memory name) public view returns (bool) {
        require(bytes(name).length > 0, "Name cannot be empty");
        return nameToTokenId[name] == 0;
    }

    function register(string memory name) public {
        require(isAvailable(name), "Domain is already taken");
        
        uint256 newTokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();

        _safeMint(msg.sender, newTokenId);
        nameToTokenId[name] = newTokenId;
    }
}
