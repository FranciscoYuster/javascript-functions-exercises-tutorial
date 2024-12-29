// Your code goes here
const rapid = (stri) => {
    let result = ""
    for (let char of stri.toLowerCase()){
        if(!"aeiou".includes(char)){
            result += char.toUpperCase();
        }
    }
    return result;
};
// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
