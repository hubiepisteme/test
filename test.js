var a = 42;
console.log(a);

let b = 2;
const c = 47;

function d() {};

console.log(b);

/*
=======================
"falsy values":

0
-0
NaN (not as number)
"" (empty string)
false
null
undefined

========================
*/


for(; true; ) {
  // this loop will run fortever because condition statement is alway true
}

for(;; ) {
  // this loop will run fortever because condition statement will never failed and stops loops
}

function printAmount(){
  console.log( amount.toFixed( 2 a) );
}

var amount = 99.99;
printAmount();
amount = amount*2;
printAmount();
