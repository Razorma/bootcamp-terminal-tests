export default function countAllFromTown(regNo,prefix){
    var counter = 0;
    let regNumbers = regNo.split(',');
    for(var i=0;i<regNumbers.length;i++){
      if(regNumbers[i].includes(prefix)){
        counter++ 
      };
    };
    return counter
  };