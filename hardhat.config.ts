import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
    defaultNetwork: "polygon_mumbai",
    networks: {
      hardhat: {
      },
      polygon_mumbai: {
        url: "https://rpc-mumbai.maticvigil.com",
        accounts:  process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      }
    },
    etherscan: {
      apiKey: process.env.POLYGONSCAN_API_KEY
    },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
};

export default config;
