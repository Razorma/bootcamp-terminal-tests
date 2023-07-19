export default function findItemsOver20(itemList){
    var over20 = []
    for(var i=0;i<itemList.length;i++){
      if(itemList[i].qty>20){
        over20.push(itemList[i]);
      };
    };
   return over20
  };
  