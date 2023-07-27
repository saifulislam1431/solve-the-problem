const findSecondSmallest = (arr)=>{
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {

      for (let j = 0; j < n - i - 1; j++) {

        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr[1];
}
const res = findSecondSmallest([10, 5, 8, 3, 9, 1, 6, 7]);
console.log(res);