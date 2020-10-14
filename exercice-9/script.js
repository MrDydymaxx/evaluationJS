"use strict";

/**
 * @checkPalindrome
 * @param {String} palindrome - check if the is a palindrome 
 * @return {boolean} - false if it's not a palindrome, true if it's a palindrome
 */

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