// From Leetcode Problem #26. Remove Duplicates from Sorted Array
// Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Difficulty: Easy

class Solution {
    public int removeDuplicates(int[] nums) {
        int left = 1;

        for (int right = 1; right < nums.length; right++) {
            // if nums[right] == nums[left-1] { do nothing } else { nums[right] =
            // nums[left], left++}
            if (nums[right] != nums[right - 1]) {
                nums[left] = nums[right];
                left++;
            }

        }

        return left;
    }
}