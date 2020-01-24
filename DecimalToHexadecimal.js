//Convert decimal numbers into hexadecimal. The input is in 'string' format.

function DecToHex(num){

    let arrOfHex = [{0: '0'}, {1:'1'}, {2:'2'}, {3:'3'}, {4:'4'}, {5:'5'}, {6:'6'}, {7:'7'}, {8:'8'}, {9:'9'}, {10:'A'}, {11:'B'}, {12:'C'}, {13:'D'}, {14:'E'}, {15:'F'}];
    let arrRemTimes16 = [];
    let arrRes = []
  
    let inputAsNum = Number(num);
    if (!inputAsNum == true){ //OR (isNaN(inputAsNum))
      console.log('This is not a decimal number: ' + num);
      return 'This is not a decimal number: ' + num 
    } else {
      getRem(inputAsNum, arrRemTimes16)
    }
    for (let i = 0; i<arrRemTimes16.length; i++){
      for (let j = 0; j<arrOfHex.length; j++){
          if (arrRemTimes16[i] == Object.keys(arrOfHex[j]))
        {
          arrRes.push(Object.values(arrOfHex[j]));
        }
      }
    }
    let mergedRes = [].concat.apply([], arrRes);
    let res = mergedRes.join('');
    console.log(res);
  
    function getRem(num, arrRemTimes16){ 
      var whole = Math.floor(num/16);
      var rem = num/16 - whole;
      let remTimes16 = rem*16;
      arrRemTimes16.unshift(remTimes16) 
      if (whole > 0) {
        getRem(whole, arrRemTimes16)
      }
    }
  
  }
  DecToHex('479') //1DF
  DecToHex('22') //16
  DecToHex('A364') //X
  DecToHex('259') //103
