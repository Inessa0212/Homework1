// 1. Given a number. Print “odd” if the number is odd and “even” if it’s even.

let num = 123;
if (num % 2 === 0) {
console.log('even') }
else {
    console.log('odd')
}


// 2. 2. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

let num1 = 3;
let num2 = 14;
 if (num1 % num2 === 0 || num2 % num1 === 0) {
    console.log(0)    
        }
    else {
        console.log(0)
    }
    
    
/*3. Given a positive integer. Bring the last digit of the number to the beginning. Print the new
    number. If the last digit of the inserted number is 0, number remains the same.*/


    
    
/* 4. Given five numbers as input. Calculate and print the average of the numbers(without
using arrays).*/

let num1 = Number(prompt('give number'));
let num2 = Number(prompt('give number'));
let num3 = Number(prompt('give number'));
let num4 = Number(prompt('give number'));
let num5 = Number(prompt('give number'));
let result = (num1 + num2 + num3 + num4 + num5) / 5;
console.log(result);


// 5. Given the following code rewrite it using only two if operators.( Hint: use logocal operators).

let n = +prompt();
i = 0;
j = 0;
if (n % 2 === 0 && !Math.floor(n / 10))    
{i += 1;
}
if (n % 3 === 0 && n % 10 === 1)
{
j += 1;
}