//Convert decimal numbers into binary. The input is in 'string' format.

let arrOfBin = [];

function divideby2(num, array){
  let whole=Math.floor(num/2);
  let remainder=num%2;
  array.unshift(remainder);
  if(whole>0){
    divideby2(whole,array);
  }
}

function DecToBin(num){
  let arrOfBin = [];
  let inpAsNum = Number(num);
  if(!inpAsNum == true){
    console.log('This is not convertible to binary');
    return 'This is not convertible to binary';
  } else {
    divideby2(inpAsNum,arrOfBin);
  }
  console.log(arrOfBin);
}
DecToBin('41') //101001
DecToBin('565') //1000110101
DecToBin('55') //110111
DecToBin('5A5') //X
DecToBin('6') //110
