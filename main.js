// ┌──────────────────────────────┐
// │ Simple Calculator            │
// │ -----------------            │
// │ Written by: Timothy Negron   │	
// └──────────────────────────────┘

// ┌────────┐
// │ Import │	
// └────────┘

const {
    isValidResult,
    simpleCalculator,
    help,
    errorMessage,
} =  require("./functions.js")

// ┌──────────────┐
// │ Main Program │	
// └──────────────┘

const args = process.argv.slice(2);

if(args[0] === undefined){
    errorMessage();
}

else if(args[1] !== undefined){
    errorMessage();
}

else if(args[0] === "-help" || args[0] === "-h"){
    help();
}

else{
    if(isValidResult(args[0])){
        console.log("\n   Simple Calculator:")
        console.log("   ─────────────────")
        console.log("\n   " + args[0] + " = " + simpleCalculator(args[0]) + "\n");
    }else{
        errorMessage();
    }
}
