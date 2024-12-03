
# Blockchain Travel Agency Web Application

## Introduction

This is a blockchain-based web application for a travel agency, designed to allow customers to pay for travel services using cryptocurrency via Etherscan. The application integrates smart contracts written in Solidity, providing secure, decentralized, and efficient operations such as referral programs, travel bookings, and token generation. The backend interacts with blockchain networks and ensures seamless integration with Web3 technologies like MetaMask.

## Repository Link

The code for this project is hosted at [BlockchainProject Repository](https://github.com/ashwinsabu/BlockchainProject).

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Smart Contracts](#smart-contracts)
6. [API Endpoints](#api-endpoints)
7. [Contributing](#contributing)
8. [License](#license)

## Features

- **Referral Program**: Reward users for referring new customers to the platform.
- **Travel Booking**: Enable customers to book trips and pay securely using cryptocurrency.
- **Token Generation**: Use ERC-20 tokens to validate transactions and bookings.
- **Contact Module**: Allows customers to submit inquiries, stored securely on the blockchain.
- **Cryptocurrency Payments**: Utilize MetaMask for Ethereum-based transactions.
- **Decentralized and Secure**: Powered by blockchain technology for transparency and immutability.

## Technologies Used

- **Frontend**: JavaScript, Bootstrap Studio for UI
- **Backend**: Node.js, Express.js
- **Blockchain**: Solidity, Remix IDE for smart contracts
- **Crypto Payments**: Etherscan, MetaMask
- **APIs**: Blockchair (crypto value conversion), Mailgun (email confirmations), Leaflet.js (location embedding)
- **Hosting**: AWS Elastic Beanstalk
- **Monitoring**: Datadog for application analytics

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ashwinsabu/BlockchainProject.git
   cd BlockchainProject
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file with the following keys:
     - `PORT`
     - `METAMASK_PUBLIC_KEY`
     - `BLOCKCHAIR_API_KEY`
     - `MAILGUN_API_KEY`
     - `ETHERSCAN_CONTRACT_ADDRESS`
   - Add your MetaMask public key, API keys, and contract addresses.

4. Run the development server:
   ```bash
   npm start
   ```

5. Access the application at `http://localhost:<PORT>`.

## Usage

### Customers:
- Book trips using cryptocurrency.
- Enter referral codes during payment to avail rewards.
- View payment confirmation via MetaMask and receive ERC-20 tokens for successful bookings.

### Admin:
- Manage bookings and referrals.
- Monitor inquiries submitted via the contact form.

### MetaMask Setup:
- Add the deployed contract address to MetaMask for interacting with tokens and transactions.

## Smart Contracts

The application relies on Solidity-based smart contracts deployed on Ethereum networks:
1. **Referral Program Contract**: Tracks and rewards referrals.
2. **Booking Contract**: Manages trip bookings and payments.
3. **ERC-20 Token Contract**: Issues tokens for successful transactions.

Contracts are deployed on the Sepolia testnet. Use Remix IDE for testing and deploying new smart contracts.

## API Endpoints

### Booking
- **POST** `/api/book`: Create a new booking with customer details and payment information.

### Referrals
- **POST** `/api/referral`: Add a referral entry.
- **GET** `/api/referral/:wallet`: Retrieve referral data for a given wallet address.

### Tokens
- **GET** `/api/tokens`: Check the ERC-20 tokens issued for a user.

### Contact
- **POST** `/api/contact`: Submit a query to the travel agency.

### Admin
- **GET** `/api/admin/bookings`: Retrieve all bookings.
- **GET** `/api/admin/referrals`: Retrieve all referral entries.

## Contributing

We welcome contributions! Here's how you can contribute:
1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes, commit, and push them to your fork.
4. Open a pull request to the main repository.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
