/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const someNFTs=[]
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,eyeShape,faceShape,shirtType,bottomType,accessory) {
const NFT={
    "name": name,
    "eyeShape": eyeShape,
    "faceShape": faceShape,
    "shirtType": shirtType,
    "bottomType":bottomType,
    "accessory": accessory
}
someNFTs.push(NFT);
console.log("Minted "+name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(i=0;i<someNFTs.length;i++){
        console.log("\n-----------------------------\n\n NFT ID: \t\t\t" + (i + 1));
        console.log("\n Name: \t\t\t\t" + someNFTs[i].name);
        console.log("\n Eye shape: \t\t" + someNFTs[i].eyeShape);
        console.log("\n Face shape: \t\t" + someNFTs[i].faceShape);
        console.log("\n Shirt type:\t\t" + someNFTs[i].shirtType);
        console.log("\n Bottom type:\t\t" + someNFTs[i].bottomType);
        console.log("\n Accessory: \t\t" + someNFTs[i].accessory);
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n Total number of NFTs minted:",someNFTs.length);
}

// call your functions below this line
mintNFT("Rock","Almond","Round","Sweater","Joggers","Gold Bracelet");
mintNFT("Bonnie","Siren","Oval","T-shirt","Cargos","Silver Pendant");
mintNFT("Shawn","Almond","Heart","Cardigan","Trousers","Platinum Ring");
mintNFT("Archie","Fox","Oval","T-shirt","Track pants","Gold Chain");
mintNFT("Ken","Round","Heart","Shirt","Chinos","Platinum Bracelet");

listNFTs();
getTotalSupply();
