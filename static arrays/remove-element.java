// From Leetcode Problem #27. Remove Element
// Link: https://leetcode.com/problems/remove-element/description/
// Difficulty: Easy

class Solution {
    public int removeElement(int[] nums, int val) {
        int left = 0;

        for (int right = 0; right < nums.length; right++) {
            if (nums[right] != val) {
                nums[left] = nums[right];
                left++;
            }
            for (int element : nums) {
                System.out.print(element + " ");
            }
            System.out.print("\n");

        }

        return left;
    }
}