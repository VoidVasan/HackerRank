'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'isAlphabeticPalindrome' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts STRING code as parameter.
 */

function isAlphabeticPalindrome(code) {
    //write your code here
    let lower =code.toLowerCase()
    let result=""
    for(let i=0;i<lower.length;i++){
        let codey=lower.charCodeAt(i)
        if(codey >= 97 && codey <= 122){
            result+=lower[i]
        }
    }
    let reversed=result.split('').reverse().join('')
    if(result===reversed){
        return 1
    }
    else{
        return 0
    }

}

function main() {
    const code = readLine();

    const result = isAlphabeticPalindrome(code);

    process.stdout.write((result ? 1 : 0) + '\n');
}
