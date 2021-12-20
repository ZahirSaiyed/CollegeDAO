import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xF6Cbe2277ca3fD28b0a8650580cF4E27E79fb09D",
);

(async () => {
  try {
    //this gif is from @simstim
    await bundleDrop.createBatch([
      {
        name: "Cube To Knowledge",
        description: "This NFT will give you access to the CollegeDAO!",
        image: readFileSync("scripts/assets/memberNFT.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()