/*
NAME: Michael Anthony B. Dollentes
SECTION: UV-3L
Exercise 4
*/


"use strict"

//METHOD 1: Getting the max of 3 nos
const max3 = (n1, n2, n3) => {
  if ((n1 >= n2) && (n1 >= n3)){
    return n1;
  } else if ((n1 <= n2) &&  (n2 >= n3)){
    return n2;
  } else if ((n3 >= n1) && (n3 >= n2)){
    return n3;
  }
}


//METHOD 2: Getting the min of 5 nos
const min5 = (n1, n2, n3, n4, n5) => {
  if ((n1 <= n2) && (n1 <= n3) && (n1 <= n4) && (n1 <= n5)){
    return n1;
  } else if ((n2 <= n1) && (n2 <= n3) && (n2 <= n4) && (n2 <= n5)){
    return n2;
  } else if ((n3 <= n1) && (n3 <= n2) && (n3 <= n4) && (n3 <= n5)){
    return n3;
  } else if ((n4 <= n1) && (n4 <= n2) && (n4 <= n3) && (n4 <= n5)){
    return n4;
  } else if ((n5 <= n1) && (n5 <= n2) && (n5 <= n3) && (n5 <= n4)){
    return n5;
  }
}

//METHOD 3: Getting the median of 3 nos whenever possible
const med = (a, b, c) => {
  if ((a == b) || (a == c) || (b == c)){
    return null;
  } else {
    if (((a > b) && (a < c)) || ((a > c) && (a < b))){
      return a;
    } else if ((b > c) && (b < a) || ((b > a) && (b < c))){
      return b;
    } else if ((c > a) && (c < b) || ((c > b) && (c < a))){
      return c;
    }
  }
}

//METHOD 4: Print out the two digit numbers (1-99) into their word form
let numbersToWords = (a, b) => {
  let single = ["one", "two", "three",
                  "four", "five", "six",
                  "seven", "eight", "nine"];

  let tens = ["ten", "twenty", "thirty",
                "forty", "fifty", "sixty",
                "seventy", "eighty", "ninety"];

  let others = ["eleven", "twelve", "thirteen",
                  "fourteen", "fifteen", "sixteen",
                  "seventeen", "eighteen", "nineteen"];

  if (a == 0){
    console.log(single[b-1]);
  } else if (a == 1){
    if (b == 0){
      console.log("ten");
    } else {
      console.log(others[b-1]);
    }
  } else {
    if (b == 0){
      console.log(tens[a-1]);
    } else {
      console.log(tens[a-1] + " " + single[b-1])
    }
  }

}

//TEST CASES FOR METHOD 1
console.log("\nMethod 1 Results: ")
console.log(max3(5, 4, 4.5))
console.log(max3(8, 2, 8))

//TEST CASES FOR METHOD 2
console.log("\nMethod 2 Results: ")
console.log(min5(135, 6, 3.5, 0.2, 5))
console.log(min5(135, 1, 3, 3, 24))


//TEST CASES FOR METHOD 3
console.log("\nMethod 3 Results: ")
console.log(med(4, 78, 0))
console.log(med(55, 78, 55))

//TEST CASES FOR METHOD 4
console.log("\nMethod 4 Results: \n")
numbersToWords(0, 2)
numbersToWords(1, 0)
numbersToWords(1, 5)
numbersToWords(6, 0)
numbersToWords(6, 5)
numbersToWords(1, 5)
