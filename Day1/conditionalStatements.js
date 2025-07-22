function launchBrowser(browsername){

    if(browsername==="Chrome"){

        console.log("browser is " +browsername);
        
    }
    else 
    {
        console.log("browser is  "+browsername);
        
    }


}

function runTests(testType){

    switch(testType){

        case "smoke":
            console.log("Running Smoke test");
            break;
        case"Regression":
            console.log("Running Regression test");
            break;
        case "sanity":
            console.log("Running sanity test");
            break;
        default :
         console.log("running default test smoke");
            break;


    }

}
launchBrowser("Chrome")
runTests("Regression")