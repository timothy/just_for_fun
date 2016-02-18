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

/**
 *
 * @param{string} str a string that you would like to have repeated
 * @param{number} num The number of time you would like to repeat your string
 * @returns {string} Input string duplicated input number of times
 */
function repeat(str, num) {
    if (num < 0) {
        return '';
    }
    var newStr = '';
    for (var i = 0; i < num; i++) {
        newStr += str;
    }
    console.log(newStr);
    return newStr;
}

repeat("abc", 3);

/**
 *
 * @param {String} str a string with an end value you would like to check
 * @param{String} target a string you would like to have compared with the end value of the first argument
 * @returns {boolean} true if end of 1 string == string 2
 */
function end(str, target) {

    console.log(str.substr(str.length - target.length, str.length));
    return str;
}

end("Bastian", "adgn");


/**
 *
 * @param{String} str a sting to be truncated to a given number of chars
 * @param{number} num the number of chars you would like to truncate your string to
 * @returns{String} truncated string
 */
function truncate(str, num) {
    var newStr = '';
    if (num <= 3) {
        newStr = str.slice(0, num) + '...';
    } else if (num >= str.length) {
        newStr = str.slice(0, num);
    } else {
        newStr = str.slice(0, num - 3) + '...';
    }
    console.log(newStr);
    return newStr;
}

truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);

/**
 * This is a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 * @param{[]} arr the array you would like to split into smaller arrays
 * @param{number} size the size of the inner arrays
 * @returns {*[]}
 */
function chunk(arr, size) {
    // Break it up.
    var arr2 = [[arr[0]]];
    var count = 1;
    if (arr.length >= size) {
        for (var i = 1; i < arr.length; i++) {
            if (count == size) {
                count = 1;
                arr2.push([arr[i]]);
            } else {
                count++;
                arr2[arr2.length - 1].push(arr[i]);
            }
        }
    }
    console.log(arr2);
    return arr2;
}

chunk(["a", "b", "c", "d"], 2);

/**
 *  Return the remaining elements of an array after chopping off n elements from the head.
 * @param{Array} arr the array that you would like to shorten
 * @param{number} howMany a number amount of how many array position to be ommeted from the head of the array
 * @returns {Array} the shortened array
 */
function slasher(arr, howMany) {
    // it doesn't always pay to be first
    return arr.slice(howMany, arr.length);
}

slasher([1, 2, 3], 2);

/**
 * Return true if the string in the first element of the array contains all
 * of the letters of the string in the second element of the array.
 * @param{Array} arr an array of two strings
 * @returns{Boolean} true if both strings contain all of the same letters. invalid argument return false
 */
function mutation(arr) {
    if (arr.length == 2) {
        arr[0] = arr[0].toLowerCase();
        arr[1] = arr[1].toLowerCase();
        for (var i = 0; i < arr[1].length; i++) {
            if (arr[0].indexOf(arr[1].charAt(i)) < 0) {
                return false;//indexOf -1
            }
        }
        return true;//no letter found with indexOf -1 i.e.
    } else {//invalid argument return false
        return false;
    }
}

mutation(["hello", "Hello"]);

console.log(mutation(["hello", "elo"]));

/**
 *  Remove all falsy values from an array.
 * @param{Array} arr an array that you would like to clean of all falsy values
 * @returns {Array.<T>|*}
 */
function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    return arr.filter(function (value) {
        return value ? true : false;
    });
}

console.log(bouncer([7, "ate", "", false, 9]));

/**
 * Remove all elements from the initial array argument that are of the same value as any additional arguments
 * @param{Array} arr An array to be cross referenced with
 * @returns {Array.<T>|*}
 */
function destroyer(arr) {
    // Remove all the values == to arguments[index >= 1]
    return arr.filter(function (value){
        for (var i = 1; i < destroyer.arguments.length; i++) {
            if(destroyer.arguments[i] == value){
                return false;
            }
        }
        return true;
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);