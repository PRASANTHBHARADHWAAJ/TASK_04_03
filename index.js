// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>S.Prasanth Bharadhwaaj</h1>`;

let a= 'SPB'
console.log(a.bold())
//returns bold along with tag,similarly for every html tags

console.log(a.length)
//returns length

console.log(a.concat('as'))
//concatenates

console.log(a.endsWith('s'))
//checks with endswith

console.log(a.includes('S'))

console.log(a.indexOf('B'))
//returns 1st occurence of the char in  a string

console.log(a.lastIndexOf('B'))
//returns last occurence of the char in  a string

console.log(a.repeat(2))
//repeats no of times specified

console.log(a.replace('S','P'))
//replaces the letter with another

console.log(a.search("SPB"))
//returns the index of the 1st char specified

console.log(a.slice(1,2))
//wont remove but displays which is being sliced if 2 para specified the last is eliminated and takes till last b4 string
console.log(a.split('',2))
//returns ["S","P"] bcoz i have given 2 and if one we would have only S and the splitter is mentioned as ''

console.log(a.startsWith("S"))
//checks for startsWith

console.log(a.substr(0,3))
//returns the substring of a  string

console.log(a.toLowerCase())
//converts to l.toLowerCase

// setTimeout(function (){console.log(a)},4000)
// //prints after certain delay

let b="     dfsfd      "
let c=b.trim()
//trims the space given
console.log(c.length)


//NUMBER METHODS

let a1=34
console.log(a1.toFixed(2))
//returns the val with zeroes after decimals.

console.log(a1.toExponential(2))
//3.40e+1

console.log(a1.toString())

console.log(a1.toString())


//GLOBAL METHODS


// alert()
// prompt()
// confirm()


console.log(Number(a))
//converts into Number

console.log(String(a))
//converts into String

console.log(isNaN(a))
//checks for is Not an number

console.log(typeof a)
//typeof the variable

console.log(parseInt(a))
//parses into an integer

let c=parseFloat(a)
console.log(c)

console.log(c)
console.log(typeof c)
//Number

c=Boolean(a)
console.log(typeof c)
//Boolean

console.warn("fdgdf")
//warns 

console.clear()
//clears the console

console.error("sdsd")
//displays an error message

console.log(document.location)
//returns Location {href: "https://primitive.stackblitz.io/", ancestorOrigins: {…}, origin: "https://primitive.stackblitz.io", protocol: "https:"…}

console.info("This is a msg")
//displays an info specified





































