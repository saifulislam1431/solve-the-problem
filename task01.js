const reverseString =(string)=>{
    const strArr = string.split("")
    let reverseArr = []
    for(let i = strArr.length-1; i>=0 ; i--){
        reverseArr.push(...strArr[i])
    }
    let revStr = reverseArr.join("")
    return revStr
    
}

const theStr = reverseString("hello world")
console.log(theStr);
