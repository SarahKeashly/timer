
const args = process.argv;
let slicedArgs = args.slice(2); // allows you to run in node without extra junk lines
// slicedArgs returns an array ['10', '3', '5', '15', '9']


//looping through the array to get index of array  
for (let i = 0; i < slicedArgs.length; i++) {

  if (slicedArgs[i] < 0) { // if less than zero return empty string
    return '';
  } else {

    setTimeout(() => {
      process.stdout.write('BEEEEEP');
    }, slicedArgs[i] * 100) // multiply index by 100 so that it beeps at those intervals
  }
}


//node timer1.js 10 3 5 15 9 