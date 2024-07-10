function twoSum(numbers, target) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let keepArray = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        keepArray.push(i, j);
        return keepArray;
      }
    }
  }
  return keepArray;
}

const numbers = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(numbers, target));
