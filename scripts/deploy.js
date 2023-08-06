var { ethers } = require("hardhat");

async function main() {
  const miPrimerContrato = await ethers.deployContract("MiPrimerContrato");
  await miPrimerContrato.waitForDeployment();

  console.log("\n");
  console.log("======Publicando tu primer contrato (1 min)... ======");
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(60000); // 1 min

  const addressContract = await miPrimerContrato.getAddress();
  console.log("====== ¡Felicidades! Haz publicado tu primer contrato ======");
  console.log("Address del Contrato:", addressContract);

  console.log("\n");
  console.log("====== Empezo la verificaion del contrato ======");
  await hre.run("verify:verify", {
    address: addressContract,
    constructorArguments: [],
  });
  console.log("\n");
  console.log("====== ¡Felicidades! Haz verificado tu primer contrato ======");
  console.log("\n");

  console.log("Guarda este Address del Contrato (requisito):", addressContract);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
