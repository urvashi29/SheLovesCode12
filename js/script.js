//if
// syntax
// if(condition) {
//     //block of code
// }

var firstName = "alina";
if (firstName === "alina") {
  console.log(firstName);
}

// if else
if (firstName === "harry") {
  console.log(firstName);
} else {
  console.log("not exist");
}

// Ternary Operator
// (condition) ? (true) : (false)

var r = firstName === "harry" ? firstName : "not exist";
console.log(r);

// else if
var lastName = "joe";

if (firstName === "alina" && lastName == "j") {
  console.log(firstName + " " + lastName);
} else if (firstName === "alina") {
  console.log(firstName);
} else if (lastName === "joe") {
  console.log(lastName);
} else {
  console.log("not correct");
}

var numOne = 20;
var numTwo = 30;
var numThree = 40;

// greatest of 2 numbers
if (numOne > numTwo) {
  console.log(numOne);
} else {
  console.log(numTwo);
}

// biggest of 3 numbers
var max = 0;
if (numOne > numTwo) {
  max = numOne;
} else {
  max = numTwo;
}

if (numThree > max) {
  max = numThree;
}

console.log(max + " is greatest/biggest of all");

//switch
var age = 18;

//strict checking for case number === age
switch (age) {
  case 1:
    console.log("not correct age");
    break;
  case 15:
    console.log("3 year left");
    break;
  case 18:
    console.log("eligible to vote");
    break;
  default:
    console.log("not correct");
}

//see html file
function getName() {
  var name = document.getElementById("fname").value;
  //   console.log(typeof name);

  if (name.trim() === "") {
    // alert("Please enter correct name");
  }

  var num = document.getElementById("num").value;
  //   console.log(typeof num);
  var n = Number(num);

  if (n != 0) {
    if (n % 2 === 0) {
      console.log(n + " is even");
    } else {
      console.log(n + " is odd");
    }
  } else {
    console.log("0 is neither even not odd");
  }
}

function displayDiv() {
  var x = document.getElementById("display");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Accordian

// Loops
//syntax
// for(statement 1; statement 2; statement 3) {
//     //block of code
// }

// 1 loop = iteration

// statement 1 -> initialization
// statement 2 -> condition
// statement 3 -> inc/dec

// steps of execution
// st1 -> st2 -> BOC -> st3 -> st2 -> BOC and so on...

var result = "";
for (var j = 10; j >= 0; j--) {
  result = result + " " + j;
  //console.log(result); //10 9 8 ... 3 2 1 0
}
console.log(result);

for (var i = 1; i <= 20; i++) {
  console.log(i); //1 2 ... 20
}

//displaying/iteration of an array
var arr = [90, 78, 200, 77, 67, 90];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i] * 2);

  if (arr[i] == 200) {
    console.log("found");
  }
}

for (var j = 20; j >= 0; j -= 2) {
  console.log(j); // 20 18 16 ... 0
}

// z--;// z = z - 1

for (var z = 10; z > 4; z--) {
  console.log(z); //10 9 8 7 6 5
}

// while loop
// syntax
// while(condition) {
//     //block of code
// }

var i = 1;
while (i <= 20) {
  console.log(i);
  i++;
}

var j = 0;
while (j < arr.length) {
  console.log(arr[j]);
  j++;
}

// do while
// syntax
// do {
//     block of code
// }while (condition)

var z = 30;
do {
  console.log(z);
  //inc/dec
} while (z > 31);

//break: terminate loop
// continue: terminate current iteration
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  break;
}

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (arr[i] === 200) {
    console.log("found");
    break;
  }
}

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]); //
  continue;
  console.log(i);
}
