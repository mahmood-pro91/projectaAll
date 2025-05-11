 /* switch */


 /*  let job = "mahmpod";
 let salary = 0;

if(job === "Manager"){
    salary = 8000;
}else if (job === "IT" || job === "Support"){
    salary = 6000;
}else if (job === "Developer" || job === "Designer"){
    salary = 7000;
}else {
    salary = 4000;
}
console.log(`My Job is ${job} and my salary is ${salary}`);

switch(job){
    case "Manager":
        salary = 8000;
        break;
    case "IT":
    case "Support":
        salary = 6000;
        break;
    case "Developer" : 
    case "Designer"  :
        salary = 7000;
        break;
    default:
        salary = 4000;   
}
console.log(`My Job is ${job} and my salary is ${salary}`);
*/
////////////////////////////////////////////////////
/* if challenge */

/*let holidays = 31;
let money = 0 ; 

switch(holidays){
    case 0 :
        money = 5000;
        console.log(`My Money is ${money}`);
        break;
    case 1:
    case 2:
        money = 4000;
        console.log(`My Money is ${money}`);
        break;
    case 3:
        money = 3000;
        console.log(`My Money is ${money}`);
        break;
    case 4:
        money = 3500;
        console.log(`My Money is ${money}`);
        break;        
};
if(holidays == 0){
    money = 5000;
}else if (holidays == 1 || holidays == 0){
    money = 4000;

}else if (holidays == 3 ){
    money = 3000;
}else{
    money = 3500;
} 

console.log(`My Money is ${money}`);
*/


/*
let myAdmins = ["ahmed", "osama", "sayed","mohamed","hamada", "samera" , "stop"]
let myEmployees = ["amgad", "samah", "ameer ", "omar", "othman", "amany", "samia"]
let stop = myAdmins.indexOf("stop")
document.write(`<div>the number of admins is ${stop}</div><hr>`)

for(let i = 0;i < stop ;i++)
    {
    document.write(`<p> The Admin for Team ${i+1} is ${myAdmins[i].toUpperCase()}</p><hr>`)
    for(let j = 0 ;j < myEmployees.length;j++){
        if(myEmployees[j][0] ==="fs" ){
            
        }
    }

}

let year = 1900;
function isLeapYear(num){
    if (num % 4 === 0 ){
        if(num % 100 === 0 ){
            if(num % 400 === 0 ){
                return true;
            }else {
                return false;
            }
        }else {
            return true;
        }
    }
    
}
let result =isLeapYear(year)
console.log(result);
function greet () {
    console.log("Hello there!");
  }
  
  greet();
  

function showDetails (...data){
    let text ="unKnown";
    let num ="unKnown" ;
    let bol = "unKnown";
    for (let i = 0 ;i < data.length ;i++){
        if (typeof data[i] ==="string" ){
             text = data[i]; 
        }if (typeof data[i] === "number"){
             num = data[i];

        }if (typeof data[i] === "boolean"){
             bol = data[i];
        }
    }console.log (`Hello ${text} , your age  Is ${num} , You ${bol === false ? "are not":"are"} Avaliable For Hire`)
}

showDetails("mahmood",33,false)
showDetails("Ali",23,true)
showDetails("Osama",43,false)
showDetails("Magda",18,true)
*/

/*let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let result =myString.split(",")
.filter( (ele) => isNaN(parseInt(ele)))
.map(ele => ele[0] )
.reduce((acc , crr) =>  acc+crr )
.split("_").join(" ")


console.log(result)
*/
/*
let lunches = [];
lunches.shift()
console.log(lunches)
function addLunchToEnd(arr,st){
    arr.push(st)
    console.log(`${st} added to the end of the lunch menu.`)
    return arr ;
}

function addLunchToStart(arr,st){
    arr.unshift(st);
    console.log(`${st} added to the start of the lunch menu.`);
    return arr;
}

function removeLastLunch(arr){
    if(arr.length===0){
        console.log('No lunches to remove.')
    }else {
        let st = arr.pop();
        console.log(`${st}removed from the end of the lunch menu.`)
    }
    return arr;
};

function removeFirstLunch(arr){
    if(arr.length===0){
        console.log(`No lunches to remove.`)
        
    }else{
        let st = arr.shift();
        console.log(`${st} removed from the start of the lunch menu.`)
    }
    return arr ;
}
function getRandomLunch(arr){
    if(arr.length===0){
        console.log(`No lunches available.`)
            
    }else {
        let num = Math.round(Math.random()*arr.length)
        console.log(`Randomly selected lunch: ${arr[num]}`)

    }
}
function showLunchMenu (arr){
    if(arr.length===0){
        console.log(`The menu is empty.`)
    }else{
        console.log(`Menu items: ${arr.toString()}`)
    }
}

console.log(lunches)
removeLastLunch(lunches)
removeLastLunch(["Stew", "Soup", "Toast"])
removeFirstLunch(["Salad", "Eggs", "Cheese"]) 
showLunchMenu(["Greens", "Corns", "Beans"])
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"])
*/
/*

const questions = [
    {
        category: "Geography",
        question: "What is the capital of France?",
        choices: ["Berlin", "Paris", "Madrid"],
        answer: "Paris"
    },
    {
        category: "Science",
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "CO2", "NaCl"],
        answer: "H2O"
    },
    {
        category: "History",
        question: "Who was the first President of the United States?",
        choices: ["Thomas Jefferson", "George Washington", "John Adams"],
        answer: "George Washington"
    },
    {
        category: "Mathematics",
        question: "What is the square root of 64?",
        choices: ["6", "8", "10"],
        answer: "8"
    },
    {
        category: "Literature",
        question: "Who wrote the play 'Romeo and Juliet'?",
        choices: ["Charles Dickens", "William Shakespeare", "Mark Twain"],
        answer: "William Shakespeare"
    }
];

function getRandomQuestion(arr){
    let num = Math.round(Math.random()*arr.length)
    let randoumQuestion = arr[num];
    return randoumQuestion;
}


function getRandomComputerChoice(arr){
    let num = Math.round(Math.random()*arr.length)
    return arr[num]
}

function getResults(question, computerChoice) {
    if (computerChoice === question.answer) {
      return "The computer's choice is correct!";
    } else {
      return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
    }
  }


console.log(getResults(get))
*/

/*
const fruit = {
    name: 'apple',
    color: 'red',
    price: 0.99
    };

    for (const prop in fruit) {
        console.log(fruit[prop]);
}
        
function getVowelCount(sentence) {
    const vowels = "aeiou";
    let count = 0;
  
    for (const char of sentence.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  const vowelCount = getVowelCount("Apples are tasty fruits");
  console.log(`Vowel Count: ${vowelCount}`);
  
  function getConsonantCount(sentence) {
    const consonants = "bcdfghjklmnpqrstvwxyz";
    let count = 0;
  
    for (const char of sentence.toLowerCase()) {
      if (consonants.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  const consonantCount = getConsonantCount("Coding is fun");
  console.log(`Consonant Count: ${consonantCount}`);
  
  function getPunctuationCount(sentence) {
    const punctuations = ".,!?;:-()[]{}\"'–";
    let count = 0;
  
    for (const char of sentence) {
      if (punctuations.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
  console.log(`Punctuation Count: ${punctuationCount}`);
  
  function getWordCount(sentence) {
    if (sentence.trim() === '') {
      return 0;
    }
    
    const words = sentence.trim().split(/\s+/);
    return words.length;
  }
  
  let wordCount= getWordCount("I love freeCodeCamp");
  console.log(`Word Count: ${wordCount}`)
  */
/*
let num =10;
function factorialCalculator(number){
    let result=1
    for (;number >= 1;number--){
        
        result*=number
    }
    return result;
}

let factorial = factorialCalculator(num)

// Step 1: Declare a variable num and assign it a number between 1 and 20 inclusive
const num = 5; // Example: You can change this to any number between 1 and 20

// Step 2: Create the factorialCalculator function
function factorialCalculator(number) {
    // Step 3: Declare a result variable and initialize it to 1
    let result = 1;

    // Step 4: Use a loop to calculate the factorial
    for (let i = 1; i <= number; i++) {
        result *= i; // Multiply result by the current number
    }

    // Step 5: Return the result
    return result;
}

// Step 6: Call the factorialCalculator function with num as the argument
const factorial = factorialCalculator(num);

// Step 7: Store the final output in the required format
const resultMsg = `Factorial of ${num} is ${factorial}`;

// Step 8: Output the value of resultMsg to the console
console.log(resultMsg);
console.log(factorial); 
*/



/*
function getAverage(arr){
    let result = 0;
    for (let i =0 ;i<arr.length;i++){
        result+=arr[i];
    }
    return (result/arr.length)
}

function getGrade(score){


    if(score === 100){
        return "A+";
    }else if (score >=90  &&score<=99 ){
        return "A"
    }else if (score >=80 && score <=89 ){
        return "B"
    }else if (score >=70 && score <=79 ){
        return "C"
    }else if (score >= 60  && score <=69 ){
        return "D"
    }else if ( score>= 0  && score <=59 ){
        return "F"
    }else{
        return `Score is above or under the accepted range `
    }
    
};


function hasPassingGrade(score){
    if(getGrade(score) === "F"){
        return false;
    }else{
        return true ;
    }

}

function studentMsg (arr,score){
    let average = getAverage(arr);
    let aGrade = getGrade(score);
    if(hasPassingGrade(score)){
        
        return  `Class average: ${average}. Your grade: ${aGrade}. You passed the course.`
    }else{

        return  `Class average: ${average}. Your grade: ${aGrade}. You failed the course.`
        
    }

}


console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37))

*/


/*

let currentDate = new Date();
let currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);
function formatDateMMDDYYYY(date){
    return `Formatted Date (MM/DD/YYYY): ${date.toLocaleDateString()}`
}

function formatDateLong(date){
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
    return `Formatted Date (Month Day, Year): ${date.toLocaleDateString("en-US",options)}`
}

console.log(formatDateMMDDYYYY(currentDate))
console.log(formatDateLong(currentDate))
*/

/*
// Step 1: Declare an empty array named inventory
let inventory = [];

// Step 2: Create a function named findProductIndex
function findProductIndex(productName) {
    const lowercaseName = productName.toLowerCase();
    return inventory.findIndex(product => product.name === lowercaseName);
}

// Step 3: Create a function named addProduct
function addProduct(product) {
    const { name, quantity } = product;
    const lowercaseName = name.toLowerCase();

    // Check if the product already exists in the inventory
    const index = findProductIndex(lowercaseName);

    if (index !== -1) {
        // Product exists, update its quantity
        inventory[index].quantity += quantity;
        console.log(`${lowercaseName} quantity updated`);
    } else {
        // Product does not exist, add it to the inventory
        inventory.push({ name: lowercaseName, quantity });
        console.log(`${lowercaseName} added to inventory`);
    }
}

// Step 4: Create a function named removeProduct
function removeProduct(productName, quantityToRemove) {
    const lowercaseName = productName.toLowerCase();
    const index = findProductIndex(lowercaseName);

    if (index === -1) {
        // Product not found in inventory
        console.log(`${lowercaseName} not found`);
        return;
    }

    const product = inventory[index];

    if (product.quantity >= quantityToRemove) {
        // Subtract the quantity
        product.quantity -= quantityToRemove;

        if (product.quantity === 0) {
            // Remove the product if quantity becomes zero
            inventory.splice(index, 1);
        }

        console.log(`Remaining ${lowercaseName} pieces: ${product.quantity}`);
    } else {
        // Not enough quantity available
        console.log(
            `Not enough ${lowercaseName} available, remaining pieces: ${product.quantity}`
        );
    }
}

// Example Usage:
addProduct({ name: "apple", quantity: 10 }); // apple added to inventory
addProduct({ name: "banana", quantity: 5 }); // banana added to inventory
addProduct({ name: "Apple", quantity: 5 });  // apple quantity updated

removeProduct("apple", 3); // Remaining apple pieces: 12
removeProduct("banana", 10); // Not enough banana available, remaining pieces: 5
removeProduct("orange", 2); // orange not found

console.log(inventory); 
// Output: [ { name: 'apple', quantity: 12 }, { name: 'banana', quantity: 5 } ]
*/

/*
function generatePassword(passLength){
    let passChars ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
    let pass = ""
    for(let i =0; i < passLength;i++){
        let random = Math.round(Math.random()*passChars.length)
        let char  = passChars[random]
        pass+=char
    }
    return pass
}
const password =  Number(generatePassword(15))
console.log(`Generated password:${password}`)

*/
/*
let nums = [433,23,45,67,32,67,98,34.6]

nums.sort((a,b) => a-b)
console.log(nums)

*/

/*
 //library manager
const library = [
    {
      title: 'Your Next Five Moves: Master the Art of Business Strategy',
      author: 'Patrick Bet-David and Greg Dinkin',
      about: 'A book on how to plan ahead',
      pages: 320,
    },
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      about: 'A practical book about discarding bad habits and building good ones',
      pages: 320,
    },
    {
      title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
      author: 'Patrick Bet-David',
      about:
        "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
      pages: 304,
    },
    {
      title: 'The Embedded Entrepreneur',
      author: 'Arvid Kahl',
      about: 'A book focusing on how to build an audience-driven business',
      pages: 308,
    },
    {
      title: 'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
      author: 'Jon Gordon',
      about: 'A book about effective ways to lead a coffee bean lifestyle',
      pages: 256,
    },
    {
      title: 'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
      author: 'Jeff DeGraff and Staney DeGraff',
      about: 'A book on how to develop creativity and  innovation skills',
      pages: 168,
    },
    {
      title: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki and Sharon Lechter',
      about: 'A book about financial literacy, financial independence, and building wealth. ',
      pages: 336,
    },
    {
      title: 'Zero to Sold',
      author: 'Arvid Kahl',
      about: 'A book on how to bootstrap a business',
      pages: 500,
    },
  ];
  
  function displayBooks(catalog) {
    let output = 'Books in the Library:\n';
  
    catalog.forEach((book) => {
      output += `- ${book.title} by ${book.author} (${book.pages} pages)\n`;
    });
  
    return output;
  }
  
  function getBookSummaries(catalog) {
    return catalog.map((book) => book.about);
  }
  
  function getBooksByAuthor(catalog, author) {
    return catalog.filter((book) => book.author === author);
  }
  
  
  
  function getTotalPages(arr){
  
      let pages = arr
      .map(book => book.pages)
      .reduce((acc,crr) => acc+crr)
      return pages
  }
  
let libraryBooks = displayBooks(library);

let bookSummaries = getBookSummaries(library)

let booksByArvidKahl = getBooksByAuthor(library,{"Arvid Kahl"}) ;
let totalPagesOfBooksInLibrary = getTotalPages(library) ;   

console.log(libraryBooks)
console.log(bookSummaries)
console.log(booksByArvidKahl)
console.log(totalPagesOfBooksInLibrary)
*/

// Array of book objects
const books = [
    {
    title: "The Great Gatsby",
    authorName: "F. Scott Fitzgerald",
    releaseYear: 1925,
    },
    {
    title: "To Kill a Mockingbird",
    authorName: "Harper Lee",
    releaseYear: 1960,
    },
    {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1949,
    },
];

function sortByYear(book1,book2){
    let year1 = book1.releaseYear
    let year2 = book2.releaseYear
    return (year1<year2)? -1 
    :(year1>year2)? 1 
    :(year1===year2)?0:"unKnown" 
}

let filteredBooks = books.filter(book => book.releaseYear>1950)
filteredBooks.sort((a,b)=>sortByYear(a,b))

  // Log the books array to verify
  let test =[, undefined, 'a', 'b', { 20: 5 }].sort();
console.log(test);