"use strict";

function checkPalindrome(palindrome) {
	for (var i = 0; i < palindrome.length/2; i++) {
   if (palindrome[i] !== palindrome[palindrome.length - 1 - i]) {
       return false;
   }
 }
 return true;
}

var str = "kayak";
alert('Is ' + str + ' a Palindrome ? : ' + checkPalindrome(str));