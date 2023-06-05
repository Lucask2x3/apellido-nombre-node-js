function Fizzbuzz(pal1, pal2, num1, num2, nummax){
    for (var i = 1; i <= nummax; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
          console.log(pal1 + pal2);
        } else if (i % num1 === 0) {
          console.log(pal1);
        } else if (i % num2 === 0) {
          console.log(pal2);
        } else {
          console.log(i);
        }
      }
}    
console.log(Fizzbuzz("plata","forma",2,7,17));
