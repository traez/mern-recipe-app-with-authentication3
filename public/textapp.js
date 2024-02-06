function findMinMaxExceptFirst(numbers) {
    let firstItem = numbers[0];
    let min = numbers[0];
    let max = numbers[1];
    let minPosition = 0;
    let maxPosition = 1;
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i];
        minPosition = i;
      }
    }
  
    for (let j = 2; j < numbers.length; j++) {
      if (numbers[j] > max) {
        max = numbers[j];
        maxPosition = j;
      }
    }
  
    if (minPosition > maxPosition) {
      return 0;
    } else {
      let ans = max - min;
      return ans;
    }
  }
  
  const numbersArray = [7,6,4,3,1];
  const result = findMinMaxExceptFirst(numbersArray);
  console.log(result);
  