async function main() {
    // We get the contract to deploy
    const Greeter = await ethers.getContractFactory("CLEGOnft");
    const greeter = await Greeter.deploy("Hello, CLEGO!");
  
    console.log("CLEGOnft deployed to:", greeter.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });