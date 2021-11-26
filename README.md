## Pet Shop

## Inspiration
In the world of many ransomware attacks on standard e-commerce platforms. The decentralized approach can remedy this problem. Many instances of the same platform can be dispersed on many nodes which dramatically minimizes potential attack surface. In a standard cloud environment a special protocol should manage specific instances of the frontend and backend part of an e-commerce platform. In a decentralized world it is part of a blockchain protocol. Another aspect in this area is currency transactions. In the standard e-commerce platform special service should be added, in the blockchain we obtain it in a  protocol or a smart contract. 
The pet shop is an example of a decentralized e-commerce platform. It is the only example,  our goal is to build an e-commerce decentralized framework dedicated for private and public blockchain networks. 

## What it does
It is a decentralized e-commerce platform dedicated for private and public blockchain networks. It is a shop where potential customers can buy something interesting for pets.

## How we built it
We can partition our solution into three layers. First is the web part. It is written in React.
A second layer is blockchain. It is based on solidity smart contracts. 
The shop contract is the main component. It has a buy and createNewItem function. The buy function is responsible for the buying process. It takes a tuple with a product’s code and an amount of specific product. Second function is responsible for creation of new items and only contarct’s owner can manage this method. 
The item is ERC20 smart contract interface implementation. Thanks to this all management and change of items amount, transfer, creating are controlled by the smart contract.
Last element is delivery smart contract. It allows you to create delivery requests for new items. In the buy function in the shop smart contract is a statement which checks if the balance of an item in a specific smart contract is equal or less than 10 then creates a new delivery request.

The webpage of the Pet Shop was deployed on the IPFS protocol (https://still-rice-6959.on.fleek.co).  
The delivery service is optional. It is dedicated to the automation delivery process for suppliers of goods. 

## Challenges we ran into
The most challenging for us, was creating a mechanism that allows us to buy many items at one time in a smart contract function. 

## Accomplishments that we're proud of
We are proud of all parts of the project because we created the proof of concept of a decentralized e-commerce platform.
## What we learned
Hardhat and Ethers, what way we can build e-commerce platforms.

## What's next for Pet Shop

We want to improve web page and add new features e.g:
- adding user profile(i.e displaying orders, displaying and changing user profile),
- adding dashboard for admin (e.g management products, orders, checking history orders, charts with summaries),
- creating live chat with customers,
- implementation of pagination,
- adding rating and review products,
- serving e-mails by mailgun,
- adding filters to products,
- adding checkout wizard (with a few steps),
- uploading product images on external services e.g Cloudinary
- ERC20 tokens, stable coin payment  [in branch] 
- zkSync payment [in branch/during test] 
- the graph for transactions history review

### Installation 
```bash
 npm install
```

### Running the app
```bash
 npm run dev or yarn dev
```

Runs the app in the development mode. 
Open http://localhost:3000 to view it in your browser.

## Smart contract

### Compilation
```bash
 npx hardhat compile
```

### Test
```bash
 npx hardhat test
```

### Deploy
```bash
 npx hardhat run scripts/deploy.js --network kovan
```
