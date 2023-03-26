

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
