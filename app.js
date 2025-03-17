const nums = [1, 2, 3, 4, 5, 6];

//Non-functional way
// ============================== //
// function sumOfNum(nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum = sum + nums[i];
//   }
//   return sum;
// }

// console.log(sumOfNum(nums));

// ============================== //

// nums.reduce((acc, curr) => {
//   console.log(acc);
//   return "Hammad";
// }, 10);

// const result = nums.reduce((acc, curr) => {
//   console.log(acc, curr);
//   return acc + curr;
// }, 10);

// console.log(result);

/////////////////////// Find out the maxium value in the array /////////////////////////////

// function findMax(nums) {
//   let max = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > max) {
//       max = nums[i];
//     }
//   }
//   return max;
// }

// console.log(findMax(nums));

// now finding max value by reduce function

// const result = nums.reduce((acc, curr) => {
//   if (curr > acc) {
//     acc = curr;
//   }
//   return acc;
// }, 0);

// console.log(result);

// function callApi(method) {
//   return function (url) {
//     console.log(`Fetching data from ${url} method is: ${method}`);
//   };
// }

// const a = callApi("http://localhost:3000");
// console.log(("GET"))

// function count() {
//   let num = 0;
//   num++;
//   console.log(num);
// }

// count(); // 1
// count(); // 1

// function count() {
//   let num = 0;

//   return function () {
//     num++;
//     console.log(num);
//   };
// }


// const result = count()
// result()
// result()


///// JOIN /////
// const words = ["Hello", "world", "JavaScript"];

// const sentence = words.join(" "); // Join with space
// console.log(sentence); 



///// SPLIT /////
const sentence = "Hello world JavaScript";

const words = sentence.split(" "); // Split by space
console.log(words); 