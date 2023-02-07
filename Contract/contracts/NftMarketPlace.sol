// SPDX-License-Identifier:MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract NftMarketPlace is ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;

    uint256 private listingPrice = 0.0015 ether;

    address payable immutable owner;

    // Store all information about the listed NFT's
    struct MarketItem {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    // Assign unique id to all listed NFT's
    mapping(uint256 => MarketItem) private idMarketItem;

    // Events
    event idMarketItemCreated(uint256 indexed tokenId, address seller, address buyer, uint256 price, bool sold);

    // Modifiers
    modifier onlyOwner() {
        require(msg.sender == owner, "Not Owner");
        _;
    }

    constructor() ERC721("NFT Metaverse Token", "META") {
        owner = payable(msg.sender);
    }

    // Owner of the NFT can update NFT listing price
    function updateListingPrice(uint256 _listingPrice) public payable onlyOwner {
        listingPrice = _listingPrice;
    }

    // Create new NFT token
    function createToken(string memory _tokenURI, uint256 _price) public payable returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, _tokenURI);

        createMarketItem(newTokenId, _price);
        return newTokenId;
    }

    // Add newly created Nft data to marketplace
    function createMarketItem(uint256 _tokenId, uint256 _price) private {
        require(_price > 0, "Cannot set Price to Zero");
        require(msg.value >= listingPrice, "listing fee is less than listingPrice");

        idMarketItem[_tokenId] = MarketItem(_tokenId, payable(msg.sender), payable(address(this)), _price, false);
        _transfer(msg.sender, address(this), _tokenId);

        emit idMarketItemCreated(_tokenId, msg.sender, address(this), _price, false);
    }

    // Function to resell NFT
    function resellToken(uint256 _tokenId, uint256 _price) public payable {
        require(idMarketItem[_tokenId].owner == msg.sender, "Only owner can list item");
        require(msg.value >= listingPrice, "listing fee is less than listingPrice");

        idMarketItem[_tokenId].sold = false;
        idMarketItem[_tokenId].price = _price;
        idMarketItem[_tokenId].seller = payable(msg.sender);
        idMarketItem[_tokenId].owner = payable(address(this));

        _itemsSold.decrement();
        _transfer(msg.sender, address(this), _tokenId);
    }

    // Function to buy NFT
    function createMarketSale(uint256 _tokenId) public payable {
        uint256 price = idMarketItem[_tokenId].price;
        require(msg.value >= price, "Submit correct price");

        idMarketItem[_tokenId].owner = payable(msg.sender);
        idMarketItem[_tokenId].sold = true;

        _itemsSold.increment();
        _transfer(address(this), msg.sender, _tokenId);

        payable(owner).transfer(listingPrice);
        payable(idMarketItem[_tokenId].seller).transfer(msg.value);
    }

    // Get all unsold NFT data
    function fetchMarketItem() public view returns (MarketItem[] memory) {
        uint256 itemCount = _tokenIds.current();
        uint256 unSoldItemCount = _tokenIds.current() - _itemsSold.current();
        uint256 currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unSoldItemCount);

        for (uint256 i = 0; i < itemCount; i++) {
            if (idMarketItem[i + 1].owner == address(this)) {
                uint256 currentId = i + 1;

                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    //Owner purchased NFT's
    function fecthMyNFT() public view returns (MarketItem[] memory) {
        uint256 totalCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalCount; i++) {
            if (idMarketItem[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);

        for (uint256 i = 0; i < totalCount; i++) {
            if (idMarketItem[i + 1].owner == msg.sender) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    //Get data of listed NFT
    function fetchItemListed() public view returns (MarketItem[] memory) {
        uint256 totalCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalCount; i++) {
            if (idMarketItem[i + 1].seller == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);

        for (uint256 i = 0; i < totalCount; i++) {
            if (idMarketItem[i + 1].seller == msg.sender) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    // Getter functions
    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }
}
