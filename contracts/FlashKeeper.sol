pragma solidity ^0.7.3;

/**
    
    Mainnet instances:
    - Uniswap V2 Router:                    0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D
    - DAI:                                  0x6B175474E89094C44Da98b954EedeAC495271d0F
    - ETH:                                  0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE 
*/

// importing both Sushiswap V1 and Uniswap V2 Router02 dependencies
import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import {FlashBorrower} from "./FlashBorrower.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract FlashKeeper is FlashBorrower {

    using SafeMath for uint256;
    IUniswapV2Router02 uniswapV2Router;
    uint deadline;
    IERC20 dai;
    address daiTokenAddress;
    uint256 amountToTrade;
    uint256 tokensOut;
    
    constructor(IUniswapV2Router02 _uniswapV2Router) {
            // instantiate SushiswapV1 and UniswapV2 Router02
            uniswapV2Router = IUniswapV2Router02(address(_uniswapV2Router));
            // setting deadline to avoid scenario where miners hang onto it and execute at a more profitable time
            deadline = block.timestamp + 300; // 5 minutes
    }
    
    /**
        sweep entire balance on the arb contract back to contract owner
     */
    function WithdrawBalance() public payable onlyOwner {
        
        // withdraw all ETH
        msg.sender.call{ value: address(this).balance }("");
        
        // withdraw all x ERC20 tokens
        dai.transfer(msg.sender, dai.balanceOf(address(this)));
    }

    /**
        Using a WETH wrapper here since there are no direct ETH pairs in Uniswap v2
        and sushiswap v1 is based on uniswap v2
     */
    function getPathForETHToToken(address ERC20Token) private view returns (address[] memory) {
        address[] memory path = new address[](2);
        path[0] = uniswapV2Router.WETH();
        path[1] = ERC20Token;
    
        return path;
    }

    /**
        Using a WETH wrapper to convert ERC20 token back into ETH
     */
     function getPathForTokenToETH(address ERC20Token) private view returns (address[] memory) {
        address[] memory path = new address[](2);
        path[0] = ERC20Token;
        path[1] = uniswapV2Router.WETH();
        
        return path;
    }

    /**
        helper function to check ERC20 to ETH conversion rate
     */
    function getEstimatedETHForToken(uint _tokenAmount, address ERC20Token) public view returns (uint[] memory) {
        return uniswapV2Router.getAmountsOut(_tokenAmount, getPathForTokenToETH(ERC20Token));
    }
}