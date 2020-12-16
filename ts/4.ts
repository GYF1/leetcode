/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 
 * 
 * result: 80.32%
 * 
 * https://medium.com/swlh/algorithms-with-javascript-median-of-two-sorted-arrays-2ec77ffc8b9e
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const totalCount = nums1.length + nums2.length
  
  // Merge array
  const newArray = []
  
  let i = 0
  let j = 0

  while(newArray.length < totalCount) {
    if (i < nums1.length && j < nums2.length) {
      if (nums1[i] <= nums2[j]) {
        newArray.push(nums1[i])
        i++
      } else {
        newArray.push(nums2[j])
        j++
      }
    } else if (i >= nums1.length) {
      newArray.push(nums2[j])
      j++
    } else {
      newArray.push(nums1[i])
      i++
    }
  }
  // console.log({
  //   newArray
  // })
  // Find median
  if (totalCount % 2 === 0) {
    return (newArray[totalCount/2 - 1] + newArray[totalCount/2])/2
  } else if (totalCount % 2 === 1) {
    return newArray[(totalCount - 1)/2]
  }
};


// const res = findMedianSortedArrays([1, 5, 10, 12], [1, 3, 20, 23, 35, 66]) 
// const res = findMedianSortedArrays([], [2]) 
const res = findMedianSortedArrays([0,0,0,0,0], [-1,0,0,0,0,0,1])
// const res = findMedianSortedArrays([3], [-2,-1])
console.log({
  res
})