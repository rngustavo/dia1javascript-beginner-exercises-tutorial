// Your code here:

let letra = '';

for (let i = 99; i > 0; i--) {
    //console.log(i);


    if (i >= 2) {
        //  console.log(` ${i} plural`);
        //letra += ` ${i} bottles of milk on the wall,  ${i}  bottles of milk. Take one down and pass it around,   ${i-1}   bottles of milk on the wall.`;
        letra = ` ${i} bottles of milk on the wall, ${i} bottles of milk. Take one down and pass it around, ${i - 1} bottles of milk on the wall.`;
   //  console.log(`${i} bottles of milk on the wall, ${i} bottles of milk. Take one down and pass it around, ${i - 1} bottles of milk on the wall.`); 
        
        console.log(letra);
    } else if (i === 1) {
        // console.log(i+'singular');
        // letra += ` ${i}   bottle of milk on the wall,  ${i}  bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.`;
        letra = `${i} bottle of milk on the wall, ${i} bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.`;
                                                                                                                                   letra += ` No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, ${i + 98} bottles of milk on the wall.`;
  //  console.log(`${i} bottle of milk on the wall, ${i} bottle of milk. Take one down and pass it around, no more bottles of milk on the wall. No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, ${i + 98} bottles of milk on the wall.`);
        
        console.log(letra);
    } /*else {
        // console.log(i+'fin');
        letra = `No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.`;
        console.log(letra);

    }*/

}

/*
for (let i = 99; i > 0; i--) {
//   console.log(i);
//    99   
   if(i>=2){
    //    console.log(`${i} plural`);
       
       console.log(`${i} bottles of milk on the wall, ${i} bottles of milk. Take one down and pass it around, ${i - 1} bottles of milk on the wall.`);  
   } else {
    //    console.log(`${i} plural`)
       console.log(`${i} bottle of milk on the wall, ${i} bottle of milk. Take one down and pass it around, no more bottles of milk on the wall. No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, ${i + 98} bottles of milk on the wall.`);
   }
}

*/

//console.log(letra);




