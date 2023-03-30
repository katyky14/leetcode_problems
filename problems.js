/*
3 SUM

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

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


var threeSum = function(nums) {

};


/************************************************************************************** */


/*
Search in Rotated sorted array

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

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


var search = function(nums, target) {
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


    let left =  0;
    let right = nums.length - 1;
    console.log('the right', right)

    while (left <= right) {
        let mid = (right + left ) / 2; //average for mid point
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


Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

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


var findMin = function(nums) {

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

    while(left <= right) {
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
subarray
 that has the largest product, and return the product.

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


var maxProduct = function(nums) {
    // Brute force start - O(n2)

    // let largest = nums[0];

    // for (let i = 0; i < nums.length; i++) {
    //     let product = 1;
    //     for (let j = i; j < nums.length; j++) {
    //         product *= nums[j];

    //     if (largest < product) {
    //         largest = product
    //     }
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

// Dynamic PRogramming

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
