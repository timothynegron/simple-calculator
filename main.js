let equation = '5 - 5 * 2 + 5 + 5 / 2 + 1.5';

let equatesTo = calculator(equation); // 4

let equatesTo1 = calculator('10 / 2 * 10 + 25 - 3'); // 72

let equatesTo3 = calculator("2 / 2 + 3 * 4 - 6"); // 7

function calculator (string) {
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

function removeEquation(string, i){

    // Save left side of equation
    let left = string.splice(0, i);

    // Save right side of equation
    let right = string.splice(2, string.length);

    // Concat left and right side
    string = left.concat(right);

    return string;
}

function add(string, i){

    // Add left and right numbers and store it to the left
    string[i - 1] = Number(string[i-1]) + Number(string[i + 1]);

    // Remove equation that has been evaluated and return the string
    return removeEquation(string, i);
}

function subtract(string, i){

    // Subtract left and right numbers and store it to the left
    string[i - 1] = Number(string[i-1]) - Number(string[i + 1]);
            
    // Remove equation that has been evaluated and return the string
    return removeEquation(string, i);
}

function multiply(string, i){
    
     // Multiply left and right numbers and store it to the left
    string[i - 1] = Number(string[i - 1]) * Number(string[i + 1]);

    // Remove equation that has been evaluated and return the string
    return removeEquation(string, i);
}

function divide(string, i){

     // Divide left and right numbers and store it to the left
    string[i-1] = Number(string[i - 1]) / Number(string[i+1]);

    // Remove equation that has been evaluated and return the string
    return removeEquation(string, i);
}