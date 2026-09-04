// Smallest Stable Index I (LeetCode 3903)

function firstStableIndex(nums, k) {
    const n = nums.length;

    const rightMin = new Array(n);
    rightMin[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMin[i] = Math.min(rightMin[i + 1], nums[i]);
    }

    let leftMax = -Infinity;
    for (let i = 0; i < n; i++) {
        leftMax = Math.max(leftMax, nums[i]);
        const instability = leftMax - rightMin[i];
        if (instability <= k) {
            return i
        }
    }

    return -1;
}

// 🔹 Test cases
console.log(firstStableIndex([5, 0, 1, 4], 3));
console.log(firstStableIndex([3, 2, 1], 1))
console.log(firstStableIndex([0], 0))
