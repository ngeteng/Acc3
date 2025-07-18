const { ethers } = require("hardhat");

async function main() {
  console.log("Mendeploy kontrak DomainService...");
  
  const DomainService = await ethers.getContractFactory("DomainService");
  const domainService = await DomainService.deploy();
  await domainService.waitForDeployment();
  
  const contractAddress = await domainService.getAddress();
  console.log(`✅ Kontrak berhasil di-deploy di alamat: ${contractAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
