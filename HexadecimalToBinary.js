function HexToBin(num) {

  let arrOfHex = [{0:'0'}, {1:'1'}, {2:'2'}, {3:'3'}, {4:'4'}, {5:'5'}, {6:'6'}, {7:'7'}, {8:'8'}, {9:'9'}, {A:'10'}, {B:'11'}, {C:'12'}, {D:'13'}, {E:'14'}, {F:'15'}];
  let arrTestIfHex = []; //1tc: ['A', '9'] //they are hexadecimal numbers
  
  //tests if the number is hexadecimal
  for(let i = 0; i < num.length; i++){
    for(let j = 0; j < arrOfHex.length; j++){
      if (num[i] == Object.keys(arrOfHex[j])){
        arrTestIfHex.push(num[i]); 
        break;
      }
    }
  }
  
  if(arrTestIfHex.length !== num.length){
    console.log("This is NOT a hexadecimal number " + num);
    return "This is NOT a hexadecimal number " + num;
  }      

  let splittedNum = num.split(''); // ['A', '9']
  
  let arrayOfDecimals = []; //[['10'], ['9']]
  //creates pure decimal array
  for (let i = 0; i < splittedNum.length; i++) {
    for (let j = 0; j < arrOfHex.length; j++) {
      if (splittedNum[i] == Object.keys(arrOfHex[j])) {
        arrayOfDecimals.push(Object.values(arrOfHex[j])) //[['10'], ['9']]
        break;
      }
    }
  }

  let flattenedDecArr = [].concat.apply([], arrayOfDecimals); //['10', '9']

  let resArr = []; //[[1, 0, 1, 0],[1, 0, 0, 1]]
  let arrOfObjBin = [{"1": [0,0,0,1]}, {"2": [0,0,1,0]}, {"3": [0,0,1,1]}, {"4": [0,1,0,0]}, {"5": [0,1,0,1]}, {"6": [0,1,1,0]}, {"7": [0,1,1,1]}, {"8": [1,0,0,0]}, {"9": [1,0,0,1]}, {"10": [1,0,1,0]}, {"11": [1,0,1,1]}, {"12": [1,1,0,0]}, {"13": [1,1,0,1]}, {"14": [1,1,1,0]}, {"15": [1,1,1,1]}];
  //looks for corresponding binary array
  for (let i = 0; i < flattenedDecArr.length; i++) {
    for (let j = 0; j < arrOfObjBin.length; j++) {
      if (flattenedDecArr[i] == Object.keys(arrOfObjBin[j])) {
        resArr.push(Object.values(arrOfObjBin[j])); //[[1, 0, 1, 0],[1, 0, 0, 1]]
        //console.log('resArr ' + resArr);
        break;
      }
    }
  }

  let flattenedRes = [];
  //*** below the 2 nested for loops could be a recursive function
  for (let i = 0; i < resArr.length; i++) {
    for (let j = 0; j < resArr[i].length; j++) {
      flattenedRes.push(resArr[i][j]); //[[1, 0, 1, 0],[1, 0, 0, 1]]
      //console.log('flattenedRes ' + flattenedRes);
      break;
    }
  }

  let resAsArr = []; //[1, 0, 1, 0, 1, 0, 0, 1]
  for (let i = 0; i < flattenedRes.length; i++) {
    for (let j = 0; j < flattenedRes[i].length; j++) {
      resAsArr.push(flattenedRes[i][j]);
    }
  }

  let resAsStr = resAsArr.join(''); //'10101001'

  let result = Number(resAsStr).toString(); //'10101001'
  console.log(result);

}

HexToBin('A9'); //10101001 
HexToBin('3B7'); //1110110111 
HexToBin('1D29'); //1110100101001 
HexToBin('G01'); //X
HexToBin('a1'); //X