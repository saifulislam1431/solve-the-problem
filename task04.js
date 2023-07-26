const sumOfValueWithTarget = (array,target)=>{
    let left = 0;
    let right = array.length -1;
    while(left < right){
        let sum = array[left] + array[right];
        if(sum === target){
            return[left,right]
        }else if(sum < target){
            left++
        }else{
            right--;
        }
    }
    return "No pair match"
}

const result = sumOfValueWithTarget([1, 3, 6, 8, 11, 15], 16)
console.log(result);