function BinToHex(num) {
  let arrOfBin = []; 

  //checks if nums are all binary
  arrOfBin = num.split(""); //1 tc: ['1', '0', '1', '1', '0', '1', '1', '1']
  let length = arrOfBin.length;
  for(let i = 0; i < length; i++){ 
    if (arrOfBin[i] !== "0" && arrOfBin[i] !== "1"){ 
        console.log('This is not a binary number: ' + num);
        return 'This is not a binary number: ' + num; 
    }   
  }
  divideByFour(arrOfBin);

  //makes num length divisible by 4 - it add 0-s to arrOfBin
  function divideByFour(arrOfBin) { //1 tc: ['1', '0', '1', '1', '0', '1', '1', '1'] divisible by four
    if (arrOfBin.length%4 !== 0){
      arrOfBin.unshift("0");
      divideByFour(arrOfBin);
    }
  }
  generateMultiplierArr(arrOfBin);

  //creates an array with these numbers ["8", "4", "2", "1"] in arrOfBin length
  function generateMultiplierArr(arrOfBin){
    let arrOfMiltiplier = ["8", "4", "2", "1"];
    let multiplierArr = []; //[["8", "4", "2", "1"], ["8", "4", "2", "1"]] because arrOfBin.length/4=2
    let multipliedArr = []; //[8, 0, 2, 1, 0, 4, 2, 1] flattenedMultiplierArr*arrOfBin
    let arrOfFour = []; //[[8, 0, 2, 1],[0, 4, 2, 1]]

    let i = arrOfBin.length/4;
    while(i > 0){
      multiplierArr.push(arrOfMiltiplier);
      i--
    }
    let flattenedMultiplierArr = [].concat.apply([], multiplierArr); //flattening multiplierArr ["8", "4", "2", "1", "8", "4", "2", "1"]

    //multiplies flattenedMultiplierArr * arrOfBin
    for (let i = 0; i < flattenedMultiplierArr.length; i++) {
      for (let j = 0; j < arrOfBin.length; j++) {
        if (i === j) {
          multipliedArr.push(flattenedMultiplierArr[i] * arrOfBin[j]);
          break;
        }
      }
    }

    //makes nested array from oroginal array - splitted into sub arrays .length 4
    //arrOfFour = [[8, 0, 2, 1], [0, 4, 2, 1]];
    while(multipliedArr.length > 0) {
      arrOfFour.push(multipliedArr.splice(0,4));
    }

    //adds nums in each []
    let sumArr = []; //[11, 7]
    let sum = 0;
    let iHelper = 0;

    for (let i = 0; i < arrOfFour.length; i++) {
      for (let j = 0; j < arrOfFour[i].length; j++) {
        if (i == iHelper) {
          sum += arrOfFour[i][j];
        } else {
          sum = 0;
        }
      }
      sumArr.push(sum);
      iHelper++
      sum = 0;
    }

    //converts decimal numbers in sumArr into hexadecimal
    let arrOfHex = [{0: '0'}, {1:'1'}, {2:'2'}, {3:'3'}, {4:'4'}, {5:'5'}, {6:'6'}, {7:'7'}, {8:'8'}, {9:'9'}, {10:'A'}, {11:'B'}, {12:'C'}, {13:'D'}, {14:'E'}, {15:'F'}];
    let arrRes = [] //[['B'], ['7']]

    for (let i = 0; i<sumArr.length; i++){
      for (let j = 0; j<arrOfHex.length; j++){
        if (sumArr[i] == Object.keys(arrOfHex[j]))
        {
          arrRes.push(Object.values(arrOfHex[j]));
          break;
        } 
      }
    }
    let mergedRes = [].concat.apply([], arrRes); //['B', '7']
    let res = mergedRes.join(''); //'B7'
    console.log(res);
    return res;
  }

}

BinToHex('10110111') //B7
BinToHex('1011101010') //2EA 
BinToHex('20100') //X
BinToHex('10A0') //X
BinToHex('010101') //15

