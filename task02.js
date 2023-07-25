const sumOfPositive = (array) =>{
    let sum = 0;
for(let i = 0; i<=array.length; i++){
    if(array[i] > 0){
        sum +=array[i]
    }
}
return sum;
}

const arrOfNum = sumOfPositive([2, -5, 10, -3, 7]) 
console.log(arrOfNum);