function maxSubarrayLength(nums, k) {
  let left = 0;
  let maxLen = 0;
  const freq = new Map();

  for (let right = 0; right < nums.length; right++) {
    freq.set(nums[right], (freq.get(nums[right]) || 0) + 1);

    while (freq.get(nums[right]) > k) {
      freq.set(nums[left], freq.get(nums[left]) - 1);
      left++
    }
    maxLen = Math.max(maxLen, right - left + 1)
  }
  return maxLen
}

console.log(maxSubarrayLength([1, 2, 2, 1, 1, 3], 2));

