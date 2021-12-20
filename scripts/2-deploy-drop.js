import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xdc43895527A9c1F2A464ea3385b47E2907F71C96");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      // The collection's name, ex. CryptoPunks
      name: "CollegeDAO Membership",
      // A description for the collection.
      description: "A DAO for college students.",
      // The image for the collection that will show up on OpenSea.
      //This image is taken from https://giphy.com/gifs/Cgr2Ajni6FtMRIljqe
      //Credit to: @dualvoidanima
      image: readFileSync("scripts/assets/collegeNFT.gif"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()