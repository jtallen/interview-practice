// From Neetcode Problem Implement an Insertion Sort
// Link: https://neetcode.io/problems/insertionSort
// Difficulty: Easy

class Solution {
  /**
   * @param {Pair[]} pairs
   * @returns {Pair[][]}
   */
  insertionSort(pairs) {
    let pairsList = pairs.length > 0 ? [pairs] : [];
    for (let i = 1; i < pairs.length; i++) {
      let j = i - 1;

      let pairsCopy = [...pairsList[pairsList.length - 1]];

      while (j >= 0 && pairsCopy[j + 1].key < pairsCopy[j].key) {
        let temp = pairsCopy[j + 1];
        pairsCopy[j + 1] = pairsCopy[j];
        pairsCopy[j] = temp;
        j--;
      }

      pairsList.push(pairsCopy);
    }

    return pairsList;
  }
}
