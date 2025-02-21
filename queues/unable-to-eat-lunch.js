/**
 * From Leetcode Problem #1700. Number of Students Unable to Eat Lunch
 * Link: https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/
 * Difficulty: Easy
 * Coded using arrays,
 */

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
let countStudents = function (students, sandwiches) {
  let lineCounter = 0;
  while (students.length > 0 && sandwiches.length > 0) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      lineCounter = 0;
    } else {
      students.push(students.shift()); // send to end of line
      lineCounter++;
    }
    if (lineCounter === students.length) break;
  }
  return students.length;
};

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
let countStudentsAlternate = function (students, sandwiches) {
  let studentCount = students.length;
  let studentMap = {};

  for (let i of students) {
    if (!(i in studentMap)) studentMap[i] = 0;
    studentMap[i]++;
  }

  for (let j of sandwiches) {
    if (j in studentMap && studentMap[j] > 0) {
      studentMap[j]--;
      studentCount--;
    } else {
      return studentCount;
    }
  }

  return studentCount;
};
