// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    /**
     * @param name_   Token name (e.g. "My Token")
     * @param symbol_ Token symbol (e.g. "MTK")
     * @param supply  Initial mint in *wei* (use 18 decimals helper below)
     */
    constructor(
        string memory name_,
        string memory symbol_,
        uint256 supply
    ) ERC20(name_, symbol_) {
        _mint(msg.sender, supply);
    }
}
