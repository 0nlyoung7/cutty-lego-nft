import "hardhat-deploy";
import 'hardhat-deploy-ethers';
import {node_url, accounts} from './utils/network';

import { HardhatUserConfig } from "hardhat/types";
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  namedAccounts: {
    deployer: 0,
    tokenOwner: 1,
  },
  networks: {
    rinkeby: {
      url: node_url('rinkeby'),
      accounts: accounts('rinkeby'),
    },
  },
  solidity: "0.8.4"
};

export default config;