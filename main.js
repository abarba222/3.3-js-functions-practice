/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(first, second) {
    "use strict";
    if (first > second) {
      return first;
    } else {
      return second;
    }
  }

console.assert(max(2, 3) === 3, "max first");
console.assert(max(3, 2) === 3, "max second");
console.assert(max(4, 4) === 4, "max third");
console.log(max);
    //...

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(first, second, third){
    "use strict";
    if ((first >= second) && (first >= third)) {
      return first;
    } else if ((second >= first) && (second >= third)) {
      return second;
    }else {
      return third;
    }

  }

console.assert(maxOfThree(954, 789, 321) === 954, "max first");
console.assert(maxOfThree(789, 954, 321) === 954, "max second");
console.assert(maxOfThree(321, 789, 954) === 954, "max third");
console.assert(maxOfThree(954, 954, 954) === 954, "max fourth");
console.assert(maxOfThree(789, 954, 954) === 954, "max fifth");
// console.log();


    //...


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char) {
    "use strict";

    var vowels = ["a", "e", "i", "o", "u"];

    for (var i = 0; i < vowels.length; i++){
      if (vowels[i] === char) {
        return true;
      }
    }

    return false;

  }





  console.assert(isVowel("a") === true, "char first");
  console.assert(isVowel("e") === true, "char second");
  console.assert(isVowel("i") === true, "char third");
  console.assert(isVowel("o") === true, "char fourth");
  console.assert(isVowel("u") === true, "char fifth");

    //...

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";







    //...
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(){
    "use strict";
    //...
}

function multiply(){
    "use strict";
    //...
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    "use strict";
    //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
