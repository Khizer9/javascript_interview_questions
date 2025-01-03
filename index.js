// Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// var num1 = prompt("Enter First Number")
// num1 = parseFloat(num1)
// var num2 = prompt("Enter Second Number")
// num2 = parseFloat(num2)

// var result = num1 + num2;
// alert("Your Result is: " + result);


// Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

// var singleMovieTicket = 600;
// var fiveMovieTicket = singleMovieTicket * 5
// alert("Total Cost to buy 5 ticket is: " + fiveMovieTicket)

// Write a script to display multiplication table of any
// number in your browser.

// var multiplicationNumber = prompt("Enter a Number for gerating table")
// multiplicationNumber = parseFloat(multiplicationNumber)

// console.log(multiplicationNumber + "X" + 1 + "=" + multiplicationNumber * 1)


// const add = () =>{
//     console.log(a)
//     console.log(b)

//     var a = 1
//     let b = 2
// }

// // console.log(a,b) // Error => cannot access b before initialization

// add()

// const ali = 1

// ++ali + ali++
// console.log(ali) // Error => cannot assign in a constant variable


// In this how to get 5 in this array.
// let arr = [1, 3, 54, 4, 7, 2, 5]
// let result = 5
// let pair = []

// for(let i = 0; i <= arr.length; i++){
//     for(let j = i + 1; j <= arr.length; j++){
//         if(arr[i] + arr[j] == result){
//             pair.push(arr[i], arr[j])
//         }
//     }
// }
// console.log(pair) // 1,4,3,2


// let firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// let lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// let fullNames = [];

//    for (var i = 0; i < firstNames.length; i++) {
//        for (var j = 0; j < lastNames.length; j++) {
//           fullNames.push(firstNames[i] + lastNames[j]);

//  }
//  }
//  console.log(fullNames)


// duplicates values
// let arr = [1, 3, 5, 4, 7, 2, 4, 7, 9, 2, 5, 3, 5]
// let duplicateValues = []

// for (i = 0; i < arr.length; i++){
//     let sorted = arr.sort()

//     if(sorted[i] == sorted[i + 1]){
//         duplicateValues.push(sorted[i], sorted[i + 1])
//     }
// }
// console.log(duplicateValues)

// Second method for finding duplicates
// for(i = 0; i<=arr.length; i++){
//     for(j = i + 1; j <= arr.length; j++){
//         if(arr[i] == arr[j]){
//             duplicateValues.push(arr[i], arr[j])
//         }
//     }
// }

// console.log(duplicateValues)

// FizzBuzz questions
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

// reversed array without keyword
// let arr = ['khizer', 'ali']
// let reversedArr = []

// for(i = arr.length - 1; i>= 0; i--){
//     reversedArr.push(arr[i])
// }
// console.log(reversedArr)

// Reversed an string without keyword
// const str = "Hello World"

// for(i=str.length - 1; i>=0; i--){
//     console.log(`${str[i]}`) // dlrow olleh
// }


// Factorial number
// const factorialNum = +prompt('Enter Factorial number') // 5
// let result = 1
// for(i=1; i<=factorialNum; i++){
//   result *= i
// }
// console.log(result) // 120


// Palindrome Checker
// function Palindrome(){
//     let palindromeWord = prompt('Enter a word to check')
//     let leng = palindromeWord.length

//     for(i = 0; i<=leng/2; i++){
//         if(palindromeWord[i] !== palindromeWord[leng - 1 -i]){
//             alert('Its not a palindrome')
//             break
//         }else{
//             alert('Its a palindrome')
//             break
//         }
//     }
// }

// Palindrome()


// Find missing integar in Array
// let arr = [1,3,4,5,7,9,10,11,13,14,16]
// let missingNum = [];

// for (let i = 0; i<= arr.length - 1; i++){
//     if(arr[i + 1] !== arr[i] + 1){

//         for(let j = arr[i] + 1; j < arr[i + 1]; j++){
//             missingNum.push(j);
//         }
//     }
// }
// console.log(missingNum)


// TitleCase sentence

// let stringVal = 'my name is khizer ali'
// let splitWord = stringVal.split(' ')

// for(i=0; i< splitWord.length; i++){
//     splitWord[i] = splitWord[i][0].toUpperCase() + splitWord[i].slice(1)
// }

// let titleCase = splitWord.join(' ')
// console.log(titleCase)


// Count a vowels (a,e,i,o,u)
// let stringVal = 'my name is khizer ali' 
// let countVowels = 0;

// for(i=0; i<=stringVal.length; i++){
//     if(stringVal[i] == 'a' || stringVal[i] == 'e' || stringVal[i] == 'i' || stringVal[i] == 'o' || stringVal[i] == 'u'){
//         countVowels += 1
//     }
// }
// console.log(countVowels)


//Find the Longest Word

    // let stringVal = 'my name is khizer ali'
    // let splitWord = stringVal.split(' ')
    // let longestWord = ''

    // for(i=0; i<splitWord.length; i++){
    //     if(splitWord[i].length > longestWord.length){
    //         longestWord = splitWord[i]
    //     }
    // }
    // console.log(longestWord)


// Find max number without using max keyword

// let arr = [1,4,2,6,9,2,12]
// let largestNum = 0

// for(i=0; i<=arr.length; i++){
//     if(arr[i] > largestNum){
//         largestNum = arr[i];
//     }
// }
// console.log(largestNum)


// Find average of an array
// let arr = [1,4,2,6,9,2,12]
// let sum = 0

// for(i=0; i<arr.length; i++){
//     sum += arr[i]
// }
// let averageNum = sum / arr.length
// console.log(averageNum)



// Finding each letter count
// let string = 'khizerrraaliiiii';

// for (let i = 0; i < string.length; i++) {
//   let count = 0;
//   for (let j = 0; j < string.length; j++) {
//     if (string[i] === string[j]) {
//       count++;
//     }
//   }
  
//     console.log(string[i], count);
//   }


// Reverse a string without keyword
// let myName = 'my name is khizer ali'

// for(i = myName.length - 1; i>=0; i--){
//     console.log(myName[i])
// }

// Second Method

// let i = myName.length - 1

// while(i>=0){
//     console.log(myName[i])
//     i--
// }

// Intersection of Array

// let num1 = [2,4,5, 2, 2], num2 = [2,6, 2,4]
// // output = [2,2]
// let arr = []
// for(let i = 0; i<num1.length; i++){
//   for(let j = 0; j<num2.length; j++){
//     if(num1[i] === num2[j]){
//       if(arr.includes(num1[i])){
//         break;
//       }
//       arr.push(num1[i], num2[j])
//     }
//   }
// }

// console.log(arr)

// Reverse a number 

// let a = 12345
// With reverse keyword
// const result = a.toString().split('').reverse().join('')
// console.log(result)

// without Reverse Keyword
// a = a.toString()
// for(let i = a.length - 1; i>=0; i--){
//     console.log(a[i])
// }


// Reverse a sentence of a string 
// hello world ==> olleh dlrow

// const str = 'kya haal hain apke';

// const reveredSent = str.split(" ").map((word) => word.split("").reverse().join(""))
// console.log(reveredSent.join(" "), "sentt")



// how to check Array because typeof [] ==> object

// function checkArr (elem){
//     return Array.isArray(elem)
// }

// console.log(checkArr([]))
// console.log(checkArr({}))


// how to reverse a number 
// 123456 ==> 654321

// function reverseNum(num){
//     return num.toString().split("").reverse().join("")
// }

// console.log(reverseNum(123456))



// find the word occurance in object
// apple ==> {a:1, p:2, l:1, e:1}

// function occurance(str){
//     const occ = {}
//     str.split("").forEach((elem)=> {
//         if(occ.hasOwnProperty(elem) === false){
//             occ[elem] = 1
//         }else {
//             occ[elem]++
//         }
//     })
//     return occ
// }
// console.log(occurance("apple"))



// Add all the numbers of an Array
// [1,2,3,4,5,6,7,8] => 36

// var num = [1,2,3,4,5,6,7,8]
// let sum = 0;
// for(let i =0; i< num.length; i++){
//     sum = sum + num[i]
// }

// console.log(sum, "sum")


// How to find second highest in arr of numbers
// const number = [8,1,4,5,2,0,-6,1]

// let maxNum = -Infinity
// let secondHighest = -Infinity
// for (let i = 0; i < number.length; i++) {
//     if (number[i] > maxNum) {
//         secondHighest = maxNum;
//         maxNum = number[i]; 
//     } 
//     else if (number[i] > secondHighest && number[i] !== maxNum) {
//         secondHighest = number[i]; 
//     }
// }
// console.log(maxNum, "max")
// console.log(secondHighest, "min")