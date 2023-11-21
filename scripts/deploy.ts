import { ethers } from "hardhat";

async function main() {
  const ContractFactory = await ethers.getContractFactory("SouldBoundWoreth");

  // TODO: Set addresses for the contract arguments below
  const instance = await ContractFactory.deploy('0x11251b6ea8f367C340b05380E58358f66EBB053a');
  await instance.waitForDeployment();

  console.log(`Contract deployed to ${await instance.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
