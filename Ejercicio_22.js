function moveZeros(array){
    var noceros=array.filter(num=> num!==0);
    var ceros=array.filter(num=>num===0);
    return [...noceros,...ceros]
}
console.log(moveZeros(["false",1,0,1,2,0,1,3,"a"]));