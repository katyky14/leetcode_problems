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
        //let rowSet = new Set(), colSet = new Set(), threeSet = new Set();
        let rowSet = new Set()
        let colSet = new Set()
        let threeSet = new Set()
        for (let col = 0; col < board.length; col++) {
            //let box = board[Math.floor(row / 3)][Math.floor(col / 3)]
            let box = board[3 * Math.floor(row / 3) + Math.floor(col / 3)][3 * (row % 3) + (col % 3)];
            //   console.log('the box', box)
            console.log('the row', board[row][col])
            console.log('the col', board[col][row])

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
                console.log('the set before', rowSet)
                console.log('the col set before', colSet)
                console.log('the box set before', threeSet)
                rowSet.add(board[row][col])
                colSet.add(board[col][row])
                threeSet.add(box)
                console.log('the set', rowSet)
                console.log('the col set', colSet)
                console.log('the box set', threeSet)
            }
        }
    }

    return true




};

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
console.log(isValidSudoku(board))//Output: true

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
