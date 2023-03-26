
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
