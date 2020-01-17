//Convert binary numbers into decimal. The input is in 'string' format.

function BinToDec(num)
{

  let arrOfPower = [];
  let arrOfBin = [];
  let newArr = [];
  let result = 0;

  //checks if all nums are 0s and 1s
  arrOfBin = num.split(""); 
  let length = arrOfBin.length;
  for(let i = 0; i < length; i++){ 
    if (arrOfBin[i] !== "0" && arrOfBin[i] !== "1"){ 
        console.log('This is not a binary number: ' + num);
        return 'This is not a binary number: ' + num; 
    }
  }

  let toPower = length - 1
  //generates new arr with 2 to power of numer of 
  for(let j = toPower; j >= 0; j--){
    let powerTwo=Math.pow(2, j);
    arrOfPower.push(powerTwo); 
  }

  //multiplies arrOfPower[i] with arrOfBin[i]
  for(let i = 0; i<arrOfPower.length; i++) {
    newArr.push(arrOfPower[i] * arrOfBin[i])
  }

  //adds all nums in the newArr
  for(let i = 0; i<newArr.length; i++){
    result = result + newArr[i];
  }
  console.log(result);
  return result
}

BinToDec('101001') //41
BinToDec('1000110101') //565
BinToDec('110111') //55
BinToDec('1A5') //X
BinToDec('6') //X
BinToDec('2') //X
BinToDec('1') //1
BinToDec('10') //2
BinToDec('11') //3
BinToDec('11111') //31