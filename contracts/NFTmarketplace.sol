// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

// INTERNAL IMPORTS FOR NFT OPENZIPLINE
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract NFTMarketplace is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _itemSold;
    address payable owner;
    uint256 listingPrice = 0.0015 ether;

    mapping(uint256 => MarketItem) private idMarketItem;
    struct MarketItem {
        uint256 tokenID;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    event idMarketItemCreated(  
        uint256 indexed tokenID,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    modifier onlyOwner(){
        require(
            msg.sender == owner,
            "only owner of the market place can change the price"
        );
         _;
    }

    constructor() ERC721("NFT Metaverse Token", "MYNFT"){
        owner = payable(msg.sender);
    }

    function updateListingPrice(uint256 _listingPrice) 
    public 
    payable 
    onlyOwner{
        listingPrice = _listingPrice;
    }

    function getListingPrice() public view returns(uint256){
        return listingPrice;
    }

    // let;s create "CREATE NFT TOKEN FUNCTION"
    function createToken(string memory tokenURI, uint256 price)
    public
    payable
    returns(uint256){
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        createMarketItem(newTokenId, price);
        return newTokenId;
    }

    // create market items
    function createMarketItem(uint256 tokenId, uint256 price)
    private{
        require(
            price > 0,
            "Price must be at least 1"
        );
        require(
            msg.value == listingPrice,
            "Price must be equal to listing price"    
        );

        idMarketItem[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price,
            false
        );

        _transfer(msg.sender, address(this), tokenId);
        emit idMarketItemCreated(
            tokenId,
            msg.sender,
            address(this), 
            price, 
            false
        );
    }

    // Function for reselling Item
    function resellToken(uint256 tokenId, uint256 price)
    public
    payable{
        require(
            idMarketItem[tokenId].owner == msg.sender,
            "Only item owner can perform this operation"
        );
        require(
            msg.value == listingPrice,
            "Price must be equal to listing price"
        );

        idMarketItem[tokenId].sold   = false;
        idMarketItem[tokenId].price  = price;
        idMarketItem[tokenId].seller = payable(msg.sender);
        idMarketItem[tokenId].owner  = payable(address(this));

        _itemSold.decrement();
        _transfer(
            msg.sender, 
            address(this), 
            tokenId
        );
    }

    // Function to create sale
    function createMarketSale(uint256 tokenId)
    public
    payable{
        uint256 price = idMarketItem[tokenId].price;
        require(
            msg.value == price,
            "Please submit the asking price in order to complete the purchase"
        );
        idMarketItem[tokenId].owner = payable(msg.sender);
        idMarketItem[tokenId].sold = true;
        idMarketItem[tokenId].owner = payable(address(0));
        _itemSold.increment();
        _transfer(address(this), msg.sender, tokenId);
        payable(owner).transfer(listingPrice);
        payable(idMarketItem[tokenId].seller).transfer(msg.value);
    }

    // getting unsold NFT data
    function fetchMarketItems()
    public
    view
    returns(MarketItem[] memory){
        uint256 itemCount = _tokenIds.current();
        uint256 unsoldItemCount = _tokenIds.current() - _itemSold.current();
        uint256 currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unsoldItemCount);
        for(uint256 i = 0; i < itemCount; i++){
            if(idMarketItem[i + 1].owner == address(this)){
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    // Purches NFT
    function fetchMyNFT()
    public
    view
    returns(MarketItem[] memory){
        uint256 totalCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;
        for(uint256 i = 0; i < totalCount; i++){
            if(idMarketItem[i + 1].owner == msg.sender){
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for(uint256 i = 0; i < totalCount; i++){
            if(idMarketItem[i + 1].owner == msg.sender){
                uint256 currentId = i + 1;
                MarketItem storage currentitem = idMarketItem[currentId];
                items[currentIndex] = currentitem;
                currentIndex += 1;
            } 
        }
        return items;
    }

    // Single User items
    function fetchItemsListed()
    public
    view
    returns(MarketItem[] memory){
        uint256 totalCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;
        for(uint256 i = 0; i < totalCount; i++){
            if(idMarketItem[i + 1].seller == msg.sender){
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for(uint256 i = 0; i < totalCount; i++){
            if(idMarketItem[i + 1].seller == msg.sender){
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }
}