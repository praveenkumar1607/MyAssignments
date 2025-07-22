const browserName="Chrome"

function getBrowserName(){

    if(true){

        let browserName="firefox";
        console.log("inside block broser name "+browserName)
    }
    console.log("outside the block browser name "+browserName)
}
getBrowserName()
console.log("global value for browser name "+browserName)
