export default function countAllPaarl(regNo){
    var counter = 0;
    let regNumbers = regNo.split(', ')
    for(var i=0;i<regNumbers.length;i++){
      if(regNumbers[i].startsWith('CJ')){
        counter++;
      };
    };
  return counter
  };
 