const prompt=require('prompt-sync')();
function divisible(array,divisor) {
    const divisibleArray=[];

    for(var i=0;i< array.length; i++){
        if (array[i] % divisor===0){
            divisibleArray.push(array[i]);
        }
    }

    return divisibleArray;
}
const nums=[1,2,3,4,5,6];
console.log(divisible(nums, 2));
console.log(divisible(nums, 3));