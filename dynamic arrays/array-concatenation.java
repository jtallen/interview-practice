// From Leetcode Problem #1929. Concatenation of Array
// Link: https://leetcode.com/problems/concatenation-of-array/
// Difficulty: Easy

class Solution {
    public int[] getConcatenation(int[] nums) {
        int[] ans = new int[nums.length * 2];

        int right = nums.length;

        for (int left = 0; left < nums.length; left++) {
            ans[left] = nums[left];
            ans[right] = nums[left];

            right++;
        }

        return ans;
    }
}