const romanToNum =(roman)=>{
    const numerical = {
         I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let total = 0;
    const romanArr = roman.toUpperCase();
    for(let i=0;i<romanArr.length;i++){
        const currentNum = numerical[romanArr[i]];
        const nextNum = numerical[romanArr[i + 1]];
        
        if(currentNum<nextNum){
            total-=currentNum
        }else{
            total+=currentNum
        }
    }
    return total;
}

const res=romanToNum("clx")
console.log(res)
