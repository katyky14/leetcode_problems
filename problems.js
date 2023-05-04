







/*
Consonant Cancel
Write a function consonantCancel that takes in a sentence and returns a new sentence where every word begins with it's first vowel.

*/

function consonantCancel(sentence) {


    let arr = sentence.split(" ");
    let vowels = 'aeiou';
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        for (let j = 0; j < word.length; j++) {
            let ele = word[j]
            if (vowels.includes(ele)) {
               result += word.slice(j) + ' '
               break
            }
        }
    }
    return result
}

// console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
// console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"








/*
Same Char Collapse
Write a function sameCharCollapse that takes in a string and returns a collapsed version of the string.
To collapse the string, we repeatedly delete 2 adjacent characters that are the same until there are no such adjacent characters.
 If there are multiple pairs that can be collapsed, delete the leftmost pair.
 For example, we take the following steps to collapse "zzzxaaxy": zzzxaaxy -> zxaaxy -> zxxy -> zy


*/

function sameCharCollapse(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (stack[stack.length - 1] === str[i]) {
            stack.pop()
        } else {
            stack.push(str[i])
        }
    }

    return stack.join("")
}

//console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
//console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv




/*
     FLOOD FILL

An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel
of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color),
and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.



Example 1:


Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel),
all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
Example 2:

Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]
Explanation: The starting pixel is already colored 0, so no changes are made to the image.


Constraints:

m == image.length
n == image[i].length
1 <= m, n <= 50
0 <= image[i][j], color < 216
0 <= sr < m
0 <= sc < n



*/


var floodFill = function (image, sr, sc, color) {
    let oldColor = image[sr][sc]
    //console.log('the image', image)
    if (oldColor === color) return image;

    //console.log('the image after', image)
    let queue = [[sr, sc]];
    //console.log('the queue', queue)

    while (queue.length) {
        let row = queue[0][0];// sr
        let col = queue[0][1]; // sc
        // console.log('the row', row);

        // console.log('the col', col);

        queue.shift();// removes the first element

        if (oldColor === image[row][col]) {
            image[row][col] = color;

            if (row + 1 <= image.length - 1) queue.push([row + 1, col]); // push the right most side of the arr
            if (row - 1 >= 0) queue.push([row - 1, col]); // pushes the left most side of the arr
            if (col + 1 <= image[0].length - 1) queue.push([row, col + 1]) // far most bottom
            if (col - 1 >= 0) queue.push([row, col - 1]); // far most top
        }
    }

    return image;
};

// let image = [[1,1,1],[1,1,0],[1,0,1]]
// let sr = 1
// let sc = 1
// let color = 2
// console.log(floodFill(image, sr, sc, color))

// let image1 = [[0,0,0],[0,0,0]]
// let sr1 = 0
// let sc1 = 0
// let color1 = 0
// console.log(floodFill(image1, sr1, sc1, color1))






/*
You are given an integer array height of length n. There are n vertical lines drawn
such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.



Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case,
the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1


Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104

*/

var maxArea = function (height) {


    // Alex Mak Solution
    // let maxWater = 0;

    // let left = 0;
    // let right = height.length -1;

    // while (left < right) {
    //   const shorter = Math.min(height[right], height[left]);

    //   const area = (right - left) * shorter;

    //   if (area > maxWater) {
    //     maxWater = area
    //   }

    //   if (height[left] >= height[right]) {
    //     right--;
    //   } else {
    //     left++
    //   }
    // }


    // return maxWater

    // BRUTE FORCE
    let res = 0;

    for (let i = 0; i < height.length; i++) {
        for (j = i + 1; j < height.length; j++) {
            area = (j - i) * Math.min(height[i], height[j])
            res = Math.max(res, area)
        }

    }

    return res;






};


let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
//console.log(maxArea(height)) // 49





/******************************************************************* */

/*
3 SUM

Given an integer array nums, return all the triplets
 [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.



Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.


Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/


var threeSum = function (nums) {
    // BRute force
    // create a result variable and assign it to an empty array
    // create a sum variable and assign it to zero
    // 1loop through the array
    // second loop
    // third loop
    // if the sum of those three nums in loop equals zero
    // add to the array

    // return the result var

    // let result = [];
    // let nums11 = new Set()

    // for (let i = 0; i < nums.length; i++) {
    //     let sum = 0;
    //     let num1 = nums[i];
    //     console.log('the num 1', num1)
    //     for (let j = i + 1; j < nums.length; j++) {
    //         let num2 = nums[j];
    //         console.log('the num 2', num2)
    //         for (let k = j + 1; k < nums.length; k++) {
    //             let num3 = nums[k];
    //             console.log('the num 3', num3)
    //             if (k !== j +1 && num3 === nums[k - 1]) continue;
    //             sum = num1 + num2 + num3
    //             // console.log('the sum is ----', sum)
    //             if (num1 + num2 + num3 === 0) {
    //                 result.push([num1, num2, num3])
    //             }
    //         }
    //     }
    // }

    // return result;



    //optimatize code
    // let res = [];
    // nums.sort((a,b) => a-b);

    // for (let i = 0; i < nums.length; i++) {
    //     if (i > 0 && nums[i] === nums[i - 1]) continue;

    //     //two sums, pointer
    //     let left = i + 1;
    //     let right = nums.length - 1;

    //     while(left < right) {
    //         threeSum = nums[i] + nums[left] + nums[right];

    //         if (threeSum > 0){
    //            right-= 1;
    //         } else if (threeSum < 0) {
    //             left += 1;
    //         } else {
    //             res.push([nums[i], nums[left], nums[right]])
    //             left+=1;
    //             while (nums[left] === nums[left -1] && left < right) {
    //                 left++
    //             }
    //         }
    //     }
    // }

    // return res;

    // optimize solution without RECURSION

    let res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            if (nums[i] + nums[l] + nums[r] > 0) {
                r--
                // continue
            } else if (nums[i] + nums[l] + nums[r] < 0) {
                l++
                // continue
            } else {
                res.push([nums[i], nums[l], nums[r]])
                l++;
                while (nums[l] === nums[l - 1] && l < r) {
                    l++
                    // continue
                }
            }
        }

        // while(l < r) {
        //     if (nums[l] + nums[r] + nums[i] === 0) {
        //         res.push([nums[i], nums[l], nums[r]])
        //     } else if (nums[i] + nums[l] + nums[r] > 0) {
        //         r--;
        //         continue
        //     } else if (nums[i]+ nums[l] + nums[r] < 0) {
        //         l++;
        //         continue
        //     }
        //     l++
        //     while (nums[l] === nums[l-1] && l < r) {
        //         l++;
        //         continue
        //     }
        // }
    }

    return res;

};

// let nums = [-1,0,1,2,-1,-4]
// console.log(threeSum(nums))

/************************************************************************************** ****/


/*
Search in Rotated sorted array

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length)
 such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
 For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target,
return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.



Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1


Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104


*/


var search = function (nums, target) {
    // brute force
    // for(let i = 0; i < nums.length; i++) {
    //     if (nums[i] === target) {
    //         return i
    //     }
    // }

    // return -1;


    // optimize solution Olog n

    // create a left index assign it to be the first index
    // create a right index assign it to be the last index

    //loop through the array
    // if it is sorted
    // create mid pivot variable and assign it to the mid point between the num in the left and the right
    // if the target is equal to num in the mid
    // return the index - mid


    // search the left sorted portion
    // if the nums in the left is less or equal to the num in the mid
    // if the target is greater than the num in the mid or if the target is less than the num in the left
    // we reassign left to be the mid plus one (incrementing the index to the right by becoming the new left)
    // else
    // we reassing the right to mid minus one
    // else
    // if the target is less than the num in the mid or target is less than the num of the right
    // reassing right to mid plus one
    // else
    // reassing left mid minus one




    let left = 0;
    let right = nums.length - 1;
    console.log('the right', right)

    while (left <= right) {
        let mid = (right + left) / 2; //average for mid point
        console.log('the mid', mid)
        if (target === nums[mid]) {
            return mid;
        }

        // left sorted portion
        if (nums[left] <= nums[mid]) {
            if (target > nums[mid] || target < nums[left]) {
                left = mid + 1
            } else {
                right = mid - 1;
            }
        } else {
            if (target < nums[mid] || target > nums[right]) {
                right = mid - 1;
            } else {
                left = mid + 1
            }
        }

    }

    return -1;
};



// let nums = [4,5,6,7,0,1,2];
// let target = 0
// console.log(search(nums, target)) // 4
// let nums2 = [10, 11, 12, 5, 4, 3, 2]
// let target2 = 11
// console.log(search(nums2, target2)) // 1


/************************************************************************* */

/*
Find Minimum in Rotated Sorted Array


Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example,
the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.



Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times.


Constraints:

n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.


*/


var findMin = function (nums) {

    // BRUTE FORCE  - O(N)
    // let min = nums[0];

    // for (let i = 0; i < nums.length; i++) {
    //     let curr = nums[i];

    //     if (curr < min) min = curr
    // }

    // return min


    // BINARY SEARCH - O(LOG N)
    let res = nums[0];
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        if (nums[left] < nums[right]) {
            res = Math.min(res, nums[left])
            break
        }

        let mid = (left + right) / 2
        res = Math.min(res, nums[mid]);

        if (nums[mid] >= nums[left]) {
            left = mid + 1
        } else {
            right = mid - 1
        }

    }

    return res

};


// let num2 = [3, 4, 5, 1, 2]
// console.log(findMin(num2))

// let num3 = [4, 5, 6, 7, 0, 1, 2]
// console.log(findMin(num3))



/***************************************************************************** */



/*
   Maximum Product Subarray


Given an integer array nums, find a
subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.



Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.


Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

*/


var maxProduct = function (nums) {
    // Brute force start - O(n2)

    // let largest = nums[0];

    // for (let i = 0; i < nums.length; i++) {
    //     let product = 1;
    //     for (let j = i; j < nums.length; j++) {
    //         product *= nums[j];

    //          if (largest < product) {
    //              largest = product
    //          }
    //     }

    // }


    // return largest;

    //end of BRUTE FORCE

    //      let globalMaxProduct = nums[0];

    //   for (let i = 0; i < nums.length; i++) {
    // 	// On every iteration of i, we reset the localMaxProduct to 1.
    // 	// The reason we do this is because we have to multiply every combination of nums[j].
    //     let localMaxProduct = 1;
    //     for (let j = i; j < nums.length; j++) {
    //       localMaxProduct *= nums[j];

    //       if (localMaxProduct > globalMaxProduct) {
    //         globalMaxProduct = localMaxProduct;
    //       }
    //     }
    //   }

    //   return globalMaxProduct;

    // Dynamic PRogramming - tabulation

    let globalMaxProduct = nums[0];
    let localMaxProduct = 1;
    let localMinProduct = 1;

    for (let i = 0; i < nums.length; i++) {
        // We keep a temp variable because we want to keep track of the localMaxProduct before any calculations.
        let prevLocalMaxProduct = localMaxProduct;

        localMaxProduct = Math.max(nums[i], nums[i] * prevLocalMaxProduct, nums[i] * localMinProduct);
        localMinProduct = Math.min(nums[i], nums[i] * prevLocalMaxProduct, nums[i] * localMinProduct);

        globalMaxProduct = Math.max(localMaxProduct, globalMaxProduct);
    }

    return globalMaxProduct;


};

// let nums1 = [2, 3, -2, 4];
// console.log(maxProduct(nums1))





/*************** */

var isValid = function (s) {

    // const closeToOpen = {
    //   ')' : '(',
    //   '}': '{',
    //   ']': '['
    // }

    // const stack = [];

    // for (let char of s) {
    //   if (char in closeToOpen) {
    //     const top = stack[stack.length -1]
    //     //console.log('the top', top)
    //     if (stack.length > 0 && top === closeToOpen[char]) {
    //       //console.log('the equality', top === closeToOpen[char])
    //       stack.pop();
    //     } else {
    //       return false;
    //     }
    //   } else {
    //     stack.push(char);
    //   }
    // }

    // return stack.length === 0;

    //O(n)  times depending on the lenght of the string

    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] === '(' && s[i + 1] === ')') {
    //         return true
    //     } else if (s[i] === '{' && s[i + 1] === '}') {
    //         return true
    //     } else if (s[i] === '[' && s[i + 1]) {
    //         return true
    //     }
    // }

    // return false

    // optimize - with stack


    let closeToOpen = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    let stack = [];

    for (let char of s) { // for of loop
        if (char in closeToOpen) {
            const top = stack[stack.length - 1] // give the character

            if (stack.length > 0 && top === closeToOpen[char]) {
                stack.pop()
            } else {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return true;



};


// let s = "()[]{}"
// console.log(isValid(s))//Output: true

// let s2 = "(]"
// console.log(isValid(s2))//false



var isValidSudoku = function (board) {

    // const set = new Set()


    // //i rows, j columns
    // //check valid columns and rows O(9*9)
    // for(let i = 0; i < board.length; i++){
    //     for(let j = 0; j < board[0].length; j++){
    //         const value = board[i][j]
    //         if(value !== "."){
    //             const rowString = `${value} at row ${i}`
    //             console.log('the row',rowString)
    //             const colString = `${value} at col ${j}`
    //             const boxString = `${value} at box ${Math.floor(i/3)}, ${Math.floor(j/3)}`
    //             // const rowString = `${i}`
    //             // console.log('the row',rowString)
    //             // const colString = `${j}`
    //             // const boxString = `${Math.floor(i/3)}, ${Math.floor(j/3)}`

    //             if(set.has(rowString) || set.has(colString) || set.has(boxString)){
    //                 return false
    //             }else{
    //                 set.add(rowString)
    //                 set.add(colString)
    //                 set.add(boxString)
    //             }
    //         }
    //     }
    // }

    // return true



    // solution one with new set for each condition to check

    // console.log('the length', board.length)
    // console.log('the inner length', board[0].length)
    for (let row = 0; row < board.length; row++) {
        // this has to be inside, outside will give me false as answer
        let rowSet = new Set()
        let colSet = new Set()
        let threeSet = new Set()
        //let rowSet = new Set(), colSet = new Set(), threeSet = new Set();
        for (let col = 0; col < board.length; col++) {
            //let box = board[Math.floor(row / 3)][Math.floor(col / 3)]
            let box = board[3 * Math.floor(row / 3) + Math.floor(col / 3)][3 * (row % 3) + (col % 3)];
            //   console.log('the box', box)
            // https://leetcode.com/problems/valid-sudoku/solutions/476369/javascript-solution-beats-100-with-explanation-real-explanations/
            // console.log('the row', board[row][col])
            // console.log('the col', board[col][row])

            //if (board[row][col] === '.' || board[col][row] === '.' || box === '.') continue;

            if (
                // below I did not take care of the . , so it was giving me false - the log
                /*
                the row 5
the col 5
the set before Set(0) {}
the col set before Set(0) {}
the box set before Set(0) {}
the set Set(1) { '5' }
the col set Set(1) { '5' }
the box set Set(1) { '5' }
the row 3
the col 6
the set before Set(1) { '5' }
the col set before Set(1) { '5' }
the box set before Set(1) { '5' }
the set Set(2) { '5', '3' }
the col set Set(2) { '5', '6' }
the box set Set(2) { '5', '3' }
the row .
the col .
the set before Set(2) { '5', '3' }
the col set before Set(2) { '5', '6' }
the box set before Set(2) { '5', '3' }
the set Set(3) { '5', '3', '.' }
the col set Set(3) { '5', '6', '.' }
the box set Set(3) { '5', '3', '.' }
the row .
the col 8
                */
                // (rowSet.has(board[row][col]))
                // || (colSet.has(board[col][row]))
                // || (threeSet.has(box))
                (rowSet.has(board[row][col] && board[row][col] !== '.'))
                || (colSet.has(board[col][row]) && board[col][row] !== '.')
                || (threeSet.has(box) && box !== ".")
            ) {
                return false
            } else {
                // console.log('the set before', rowSet)
                // console.log('the col set before', colSet)
                // console.log('the box set before', threeSet)
                rowSet.add(board[row][col])
                colSet.add(board[col][row])
                threeSet.add(box)
                // console.log('the set', rowSet)
                // console.log('the col set', colSet)
                // console.log('the box set', threeSet)
            }
        }
    }

    return true



    /**
     other solution


      for (let i = 0; i < 9; i++) {
    let row = new Set(),
        col = new Set(),
        box = new Set();

    for (let j = 0; j < 9; j++) {
      let _row = board[i][j];
      let _col = board[j][i];
      let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]

      if (_row != '.') {
        if (row.has(_row)) return false;
        row.add(_row);
      }
      if (_col != '.') {
        if (col.has(_col)) return false;
        col.add(_col);
      }

      if (_box != '.') {
        if (box.has(_box)) return false;
        box.add(_box);
      }
    }
  }
  return true


     */


};

// https://leetcode.com/problems/valid-sudoku/solutions/1647166/javascript/

let board =
    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
//console.log(isValidSudoku(board))//Output: true

// let board2 =
//     [["8", "3", ".", ".", "7", ".", ".", ".", "."]
//         , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
//         , [".", "9", "8", ".", ".", ".", ".", "6", "."]
//         , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
//         , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
//         , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
//         , [".", "6", ".", ".", ".", ".", "2", "8", "."]
//         , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
//         , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
// console.log(isValidSudoku(board2))//Output: false


var merge = function (intervals) {

    // let stack = [];
    // for (let i = 0; i < intervals.length; i++) {

    //     for (let j = 1; j < intervals.length; j++) {
    //         console.log('the i', intervals[i])
    //         console.log('the i j', intervals[i][j])
    //         console.log('the j', intervals[j])
    //         if (intervals[i + 1] >= intervals[i][j]) {
    //             stack.push([intervals[i], ...intervals[j]])
    //         } else {
    //             stack.push(intervals[i], intervals[j])
    //         }
    //     }
    // }

    // return stack

    intervals.sort((a, b) => a[0] - b[0]);
    //intervals.sort()

    let stack = [intervals[0]]; // avoid edge case??

    for (let i = 0; i < intervals.length; i++) {
        let lastEnd = stack[stack.length - 1];
        // console.log('the last end', lastEnd)
        // console.log('the 0 interval', intervals[0])
        // console.log('the 1 inter', intervals[1])
        if (intervals[1] <= lastEnd[1]) {
            stack[1] = Math.max(lastEnd[1], intervals[1])
        } else {
            stack.push([intervals[0], intervals[1]])
        }
    }

    return stack
};



let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
//console.log(merge(intervals))//Output: [[1,6],[8,10],[15,18]]



var buildArray = function (nums) {
    /*
    i = array of nums
    return ans array
    where the number of the current is the index of the number we are pushing into it

    edge cases:
        - what if the array is empty?
            - return []
        - what if we have repetitive numbers?
        - what if we have a null element or string element?
        - what if we have a number larger than the size of the array?
        like we have a number 10 but our size is of 5

    Brute forcce
        - [5, 0, 1, 2, 3, 4] - elements
        -  0, 1, 2, 3, 4, 5 - index

        iteration
        - current index = 5 (the element)
        - ans = [4]

        - curr index = 0
        - ans = [4, 5]

        - curr index = 1
        - ans = [4, 5, 0]

        - curr index = 2
        - ans = [4, 5, 0, 1]

        - curr index = 3
        - ans = [4, 5, 0, 1, 2]


     */

    // create a ans variable and assign it to an empty array

    // loop through the nums arr
    // create a currIdx variable and assign it to the nums[nums[i]]
    // if the current index === currIdx
    // add to our ans array the num that is in the currIdx

    // return the ans array

    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        // if (nums[i] === i) {
        //     ans.push(nums[i])
        // }
        // console.log('the index -----', i)
        // console.log('the nums i', nums[i])
        // console.log('the nums in the nums index', nums[nums[i]])
        ans.push(nums[i])



    }

    return ans

};


let nums = [0, 2, 1, 5, 3, 4]
// console.log(buildArray(nums))//Output: [0,1,2,4,5,3]







/*
PYTHON WITH BRIAN WANG
https://app.coderpad.io/JH34W3PX


# Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
# Consider the number of unique elements of nums be k, to get accepted, you need to do the following things:
## Change the array nums such that the first k elements of nums contain the unique elements in the order
they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
## Return k.

# Input: nums = [0,0,1,1,1,2,2,3,3,4]
# Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
# Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
# It does not matter what you leave beyond the returned k (hence they are underscores).

# what happens when the array is empty?
#- then you return 0 and nums is not modified OR you won't get an empty array. just assume array will be well formed

# what happens if array is nil?
#- return -1

# what happens if the array is unsorted? should I sort it myself?
#- you won't get an unsorted array

# num = [0,0,1,1,1,2,2,3,3,4]
# current = 0
# next = 0
# current == next, remove next from the array

# num = [0,_,1,1,1,2,2,3,3,4]
# current = 0
# next = 1
# current != next, increment by 1

# num = [0,_,1,1,1,2,2,3,3,4]
# current = 1
# next = 1
# current == next, remove next from array

# num = [0,_,1,_,1,2,2,3,3,4]
# current = 1
# next = 1
# current == next, remove next from array

# num = [0,_,1,_,_,2,2,3,3,4]
# current = 1
# next = 2
# they don't equal, increment
# num = [0,_,1,_,_,2,2,3,3,4]
# num = [0,_,1,_,_,2,_,3,3,4]
# num = [0,_,1,_,_,2,_,3,3,4]
# num = [0,_,1,_,_,2,_,3,_,4]
# k = num.count and then i just return k
def isSorted(nums):
    for i in range(0, len(nums) - 1):
        if nums[i] > nums[i+1]:
            return False
    return True

def removeDuplicates(nums): #O(n)
    if nums == None:
        return -1
    if not isSorted(nums):
        nums.sort() # O(nlogn) time

    i = 0
    while (i < len(nums) - 1):
        current = nums[i]
        next = nums[i+1]
        if current == next:
            del nums[i+1]
        else:
            i = i + 1

    return len(nums)


# Test case 1
print("===========================")
nums = []
k = removeDuplicates(nums)
print("expected: [], got ", nums)
print("expected: 0, got ", k)

# Test case 2
print("===========================")
nums = None
k = removeDuplicates(nums)
print("expected: None, got ", nums)
print("expected: -1, got ", k)

# Test case 3
print("===========================")
nums = [0,0,1,1,1,2,2,3,3,4]
k = removeDuplicates(nums)
print("expected: [0,1,2,3,4], got ", nums)
print("expected: 5, got ", k)

# Test case 4
print("===========================")
nums = [4,0,0,1,1,1,2,2,3,3]
k = removeDuplicates(nums)
print("expected: [0,1,2,3,4], got ", nums)
print("expected: 5, got ", k)

# Test case 5
print("===========================")
nums = [0,0,0,0,0,0,0,0,0,0]
k = removeDuplicates(nums)
print("expected: [0], got ", nums)
print("expected: 1, got ", k)








*/
