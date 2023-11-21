/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const data = new Map();

    for (let i = 0; i < nums.length; i++) {
        const rest = target - nums[i];
        if (data.has(rest)) {
            return [data.get(rest), i];
        }

        data.set(nums[i], i);
    }

    return [];
};