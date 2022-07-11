// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Tickets is ERC721 {
    uint256 public totalMinted;

    mapping(address => bool) private ownsATicket;

    constructor() payable ERC721("FestivalTicket", "FTCKT") {
        totalMinted = 0;
    }

    function fetchQRCode(uint256 _num, address _caller)
        public
        view
        returns (bytes32)
    {
        //private
        require(_caller == msg.sender, "Wrong address");
        // require(ownsATicket[_caller], "This address does not own a ticket");
        return keccak256(abi.encodePacked(_num, _caller));
    }

    function mint(uint256 quantity_) public returns (bytes32) {
        require(ownsATicket[msg.sender] == false, "This address already owns a ticket");
        ownsATicket[msg.sender] = true;
        totalMinted++;
        _safeMint(msg.sender, quantity_);
        return keccak256(abi.encodePacked(quantity_, msg.sender));
    }

    function ownsATicketCheck() public view returns (bool) {
        return ownsATicket[msg.sender];
    }
}
