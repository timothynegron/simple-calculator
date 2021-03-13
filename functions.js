// ┌──────────────────────────────┐
// │ Simple Calculator            │
// │ -----------------            │
// │ Written by: Timothy Negron   │	
// │ File: functions.js           │
// └──────────────────────────────┘

// ┌────────┐
// │ Export │	
// └────────┘

module.exports = {
    isValidResult,
    simpleCalculator,
    help,
    errorMessage,
}

// ┌─────────────────────────────┐
// │ Function: Simple Calculator │	
// └─────────────────────────────┘

function simpleCalculator (string) {
    string = string.split(' ');

    // Multiply and divide from left to right
    for(let i = 0; i < string.length - 1; i++){

        // Multiply if string[i] is "*"
        if(string[i] === "*"){
            string = multiply(string, i);
            i--; // Go back to check new operator
        }
        
        // Divide if string[i] is "/""
        else if(string[i] === "/"){
            string = divide(string, i);
            i--;
        }
    }
    
    // Add and subtract from left to right
    for(let i = 0; i < string.length - 1; i++){

        // Add if string[i] is "+"
        if(string[i] === "+"){
            string = add(string, i);
            i--;
        }
        
        // Subtract if string[i] is "-"
        else if(string[i] === "-"){
            string = subtract(string, i)
            i--;
        }
    }

    return string;
}

// ┌─────────────────────────────┐
// │ Function: removeEquation    │	
// └─────────────────────────────┘

function removeEquation(string, i){

    // Save left side of equation
    let left = string.splice(0, i);

    // Save right side of equation
    let right = string.splice(2, string.length);

    // Concat left and right side
    string = left.concat(right);

    return string;
}

// ┌─────────────────────────────┐
// │ Function: add               │	
// └─────────────────────────────┘

function add(string, i){

    // Add left and right numbers and store it to the left
    string[i - 1] = Number(string[i-1]) + Number(string[i + 1]);

    // Remove equation that has been evaluated and return the string
    return removeEquation(string, i);
}

// ┌─────────────────────────────┐
// │ Function: subtract          │	
// └─────────────────────────────┘

function subtract(string, i){

    // Subtract left and right numbers and store it to the left
    string[i - 1] = Number(string[i-1]) - Number(string[i + 1]);
            
    // Remove equation that has been evaluated and return the string
    return removeEquation(string, i);
}

// ┌─────────────────────────────┐
// │ Function: multiply          │	
// └─────────────────────────────┘

function multiply(string, i){
    
     // Multiply left and right numbers and store it to the left
    string[i - 1] = Number(string[i - 1]) * Number(string[i + 1]);

    // Remove equation that has been evaluated and return the string
    return removeEquation(string, i);
}

// ┌─────────────────────────────┐
// │ Function: divide            │	
// └─────────────────────────────┘

function divide(string, i){

     // Divide left and right numbers and store it to the left
    string[i-1] = Number(string[i - 1]) / Number(string[i+1]);

    // Remove equation that has been evaluated and return the string
    return removeEquation(string, i);
}

// ┌─────────────────────────────┐
// │ Function: help              │	
// └─────────────────────────────┘

function help () {

    console.log(
        "\n   Help Message:" +
        "\n   ────────────" +
        "\n\n  -> Only accepts one expression at a time." +
        "\n     Each number and operator must be followed by a space." +
        "\n\n     Examples of inputs:" +
        "\n\n      -> \"10 / 2 * 10 + 25 - 3\" "+
        "\n      -> \"2 + 2\" " +
        "\n      -> \"5 - 5 * 2 + 5 + 5 / 2 + 1.5\" "+
        "\n      -> \"2 / 2 + 3 * 4 - 6\"\n" 
    );
}

// ┌─────────────────────────────┐
// │ Function: errorMessage      │	
// └─────────────────────────────┘

function errorMessage () {

    console.log("\n     Incorrect amount of expressions.")
    console.log("     Or incorrect input.")
    console.log("       -> Do not enter any letters")
    console.log("       -> Multiplier and divisor must be followed by a space.")
    console.log("\n     Enter one simple math expression in quotations.")
    console.log("     Enter -h or -help for help.\n")
}

// ┌─────────────────────────────┐
// │ Function: isValidResult     │	
// └─────────────────────────────┘

function isValidResult (string) {

        // Calculate expression
        let result = simpleCalculator(string);

        // Check if the result is a number.
        if(result.length === 1 && !isNaN(result)){
            return true;
        }

        return false;
}