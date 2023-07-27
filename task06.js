const generatPass =()=>{
    const capLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const smallLetters = capLetters.toLowerCase();
    const numbers = "0123456789";
    const specialChar = '!@#$%&*' 
    const PassLength = 10;
    const passwordMixed = capLetters+specialChar+smallLetters+numbers;
    let password = ""
    password += specialChar[Math.floor(Math.random() * specialChar.length)];
    for(let i = 0; i<PassLength-1 ;i++){
        let num = Math.floor(Math.random() * passwordMixed.length);
        password += passwordMixed.substring(num, num +1)
    }
    return password
    
}
const result = generatPass();
console.log(result);
