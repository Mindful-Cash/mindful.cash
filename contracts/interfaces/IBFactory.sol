pragma solidity ^0.6.4;

interface IBFactory {
    function newBPool() external returns (address);
}
