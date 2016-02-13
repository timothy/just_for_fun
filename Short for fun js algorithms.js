/**
 * Created by Tim on 2/12/2016.
 */

/**
 *
 * @param{String} str is a string that you want to reverse
 */
function reverseString(str) {
    var foo = '';
    for (var i = 1; i <= str.length; i++) {
        foo += str.charAt(str.length - i);
    }
    console.log(foo);
}

reverseString("hello");

/**
 *
 * @param{number} num a number you would like to find the factorial of
 * @returns {number} the input factorial
 */
function factorialize(num) {
    if (num == 1) {
        return 1;
    }
    var res = 1;
    for (var i = 2; i <= num; i++) {
        res = res * i;
    }
    console.log(res);
    //return num;
}

factorialize(5);

/**
 *
 * @param{String} str find out if str is a palindrome
 */
function palindrome(str) {
    str = str.replace(/[^A-Za-z0-9]/g, '');
    str = str.toLowerCase();
    var foo = '';
    for (var i = 1; i <= str.length; i++) {
        foo += str.charAt(str.length - i);
    }
    console.log(str === foo);
    //return str === foo;
}

palindrome("0_0 (: /-\ :) 0-0");


/**
 * this will find the longest word in a string of words
 * @param{String} str a sting of words
 */
function findLongestWord(str) {
    var array = str.split(' ');
    var high_num = array[0].length;
    for (var i = 1; i < array.length; i++) {
        high_num = (high_num < array[i].length) ? array[i].length : high_num;
    }
    console.log(high_num);
    //return str.length;
}

findLongestWord("What if we try a super-long");

/**
 * capitalize each word in a string of words
 * @param{String} str a sting of words
 */
function titleCase(str) {
    var array = str.split(' ');
    str = array[0].charAt(0).toUpperCase() + array[0].toLowerCase().slice(1, array[0].length);
    for (var i = 1; i < array.length; i++) {
        str += " " + array[i].charAt(0).toUpperCase() + array[i].toLowerCase().slice(1, array[i].length);
    }
    console.log(str);
    //return str;
}

titleCase("I'm a little tea pot SHoRt AnD StoUt");

/**
 *
 * @param{Array} arr an array that holds arrays of numbers.
 * @returns {Array} the largest number from each sub array of the input array.
 */
function largestOfFour(arr) {
    var newArray = [];
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var k = 0; k < arr[i].length; k++) {
            temp = (temp < arr[i][k] ) ? arr[i][k] : temp;
        }
        newArray.push(temp);
        temp = 0;
    }
    console.log(newArray);
    return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);