function performOperation() {
    //get user input from input fields
let num1=parseInt(document.getElementById('input1').value);
let num2=parseInt(document.getElementById('input2').value);

// check if input are valid numbers
if (!isNaN(num1) && !isNaN(num2)) {
    //perform the operation
    let result=multiply(num1,num2);

    //display the result
    displayResult(result);
} else {
    displayResult('Please enter valid number');
}
}
function multiply(a,b) {
    debugger;
    return a*b;
}
function displayResult(result) {
    //Display the result in paragraph elements
    const resultElement = document.getElementById('result') ;
    resultElement.textContent=`the result is : ${result}`;
}