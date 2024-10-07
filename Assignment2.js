// Prompts the user to input the max limit of the loops 
var maxLimit = parseInt(prompt("Enter the Limit of the Double Loop: "), 10);

// double loop statement to print out the map of iterations
for (let i = 0; i <= maxLimit; i++) {
    for (let j = 0; j <= maxLimit; j++) {
        // initialized all the counters compared to the max limit into zero (0)
        var addedValue = i + j;

        // Log the corresponding loop points and added value per iteration to the console.
        console.log('[${i}] [${j}] Added value is ${addedValue}');
    }
}
