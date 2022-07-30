// ===== (1) =======
// files

// ===== (2) =======

function calculate(numOne: number, numTwo: number) {
  return numOne + numTwo;
}

console.log(calculate(10, 20)); // 30
console.log(calculate("10", "20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2

// ===== (3) =======

function printInfo(valueOne: string | number, valueTwo: string | number) {
  return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}

console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work

// ===== (4) =======

let arr: (number | boolean[] | (string | (string | number)[])[])[];

arr = [100, [true], ["Taha", [100]]]

// ===== (5) =======

"noImplicitAny": false 
"noUnusedLocals": true, 
"noUnusedParameters": true, 
"noImplicitReturns": true, 
"allowUnreachableCode": false, 

// ===== (6) =======

let nothing;
let theName: string = "Elzero";
function showMyDetails(a = "", b = "", c) {
  return `${a}${b}${c}`;
}

// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(nothing,nothing,theName)); // Elzero

// ===== (7) =======

function showMsg(user?: number | string, age?: boolean | number | string, country?: boolean | string) {
  return `${user}${age}${country}`;
}

console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));

// ===== (8) =======

function printInConsole (...Value: (string[] | boolean[] | number[]) ) : any  {
  Value.forEach((ele) => {
    console.log(`The Value Is ${ele} And Type Is ${typeof ele}`)
  })
  return "Done"
}

console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));