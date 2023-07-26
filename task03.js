const frequent = (array) =>{
    const frequentArr= [];
    
    for(let i = 0; i < array.length; i++){
        if(array[i] == array[i+1]){
            frequentArr.push(array[i])
        }
    }
    let mostFrequentElement;
    let maxFrequency = 0;
    for(let j = 0; j<frequentArr.length; j++){
        if (frequentArr[j] > maxFrequency) {
            mostFrequentElement =frequentArr[j];
            maxFrequency = frequentArr[j];
          }
    }
    return mostFrequentElement;
}

const arr = frequent( [3, 5, 2, 5, 3, 3, 1, 4, 5])
console.log(arr);