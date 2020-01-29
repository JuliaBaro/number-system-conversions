//Convert hexadecimal numbers into decimal. The input is in 'string' format.

let arrOfHex = [{0:'0'}, {1:'1'}, {2:'2'}, {3:'3'}, {4:'4'}, {5:'5'}, {6:'6'}, {7:'7'}, {8:'8'}, {9:'9'}, {A:'10'}, {B:'11'}, {C:'12'}, {D:'13'}, {'E':'14'}, {'F':'15'}];

function HexToDec(num){
  
   let arrTestIfHex = [];

  for(let i = 0; i < num.length; i++){
    for(let j = 0; j < arrOfHex.length; j++){
      if (num[i] == Object.keys(arrOfHex[j])){
        arrTestIfHex.push(num[i]); 
        //break a pus után
        break;
      }
    }
  }

  if(arrTestIfHex.length !== num.length){
    console.log("This is NOT a hexadecimal number " + num);
    return "This is NOT a hexadecimal number " + num;
  } else {
    //console.log("This is a hexadecimal number " + num);
    Converter(num, arrOfHex);
  }
}

function Converter(num, arrOfHex) {
  let arrConvertedToNums = [];
  let arrPwer = [];
  let res = 0;

  for(let i = 0; i < num.length; i++){
    for(let j = 0; j < arrOfHex.length; j++){
      if (num[i] == Object.keys(arrOfHex[j])){
        arrConvertedToNums.unshift(Object.values(arrOfHex[j])); 
        //break a pus után
        break;
      }
    }
  }
  //console.log(arrConvertedToNums);

  let flattenedNumArr = [].concat.apply([], arrConvertedToNums)
  //console.log(flattenedNumArr);

  for (let i =0; i < flattenedNumArr.length; i++){
    arrPwer.push(flattenedNumArr[i] * (Math.pow(16, i)));
  }
  //console.log(arrPwer);

  for (let i =0; i < arrPwer.length; i++){
    res = res + arrPwer[i];
  }
  console.log(res);
}

HexToDec('23E') //574
HexToDec('256A') //9578
HexToDec('A1CF') //41423
HexToDec('G71') //X
HexToDec('A9') //169
HexToDec('5666') //22118
HexToDec('059') //89
HexToDec('509') //1289