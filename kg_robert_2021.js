

//Function to accept arguments from the command line
function ParseArguments() {  
   var input = [];  
   var arguments = process.argv;  
   arguments.slice(2).forEach(function(num) {  
       input.push(num);  
   });  
   return input;  
} 

// Array of inputs
const numbers = ParseArguments();  

// Array of string represntation
const stringNumbers = [];

// Return a string representation fo a numbers
const getString = function(num){
    // Create a string representation of the number
    let stringNum = '';

    // Set the string
    switch(num){
        case 0:
            stringNum = 'Zero';
            break;
        case 1:
            stringNum = 'One';
            break;
        case 2:
            stringNum = 'Two';
            break;
        case 3:
            stringNum = 'Three';
            break;
            break;
        case 4:
            stringNum = 'Four';
            break;
        case 5:
            stringNum = 'Five';
            break;
        case 6:
            stringNum = 'Six';
            break;
        case 7:
            stringNum = 'Seven';
            break;
        case 8:
            stringNum = 'Eight';
            break;
        case 9:
            stringNum = 'Nine';
            break;
        default:
            stringNum = '';
    }

    // Return the string
    return stringNum;
};

// Use the forEach to loop through each element in numbers array
numbers.forEach( (num,index) => {
    console.log(`\n${num}`);

    // Declare an empty array
    const numString = [];

    // Loop until num is > 0
    while (num > 0) {
        // Get tens columns
        const tenColumn = num % 10;
        // Get the stirng of the tens column
        const tenColumnString = getString(tenColumn);
        console.log(tenColumn, tenColumnString);
        // Add string representation fo ten columns to end of array numString
        numString.push(tenColumnString);

        // Take away the tens columns
        num = Math.trunc(num / 10);
    }

    // Reverse the array and join it
    // Then set it to the stringNumbers array at the specified index
    stringNumbers[index] = numString.reverse().join('');
});



console.log(stringNumbers);