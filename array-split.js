const nums = [1, 2, 3, 4, 5, 25, 23, 22, 8, 9, 7];
// const part = nums.slice(2, 7);


const removed = nums.splice(2, 3, 77, 88, 90, 99);
// console.log(removed);
// console.log(nums);

const together = nums.join(" ");
console.log(together);