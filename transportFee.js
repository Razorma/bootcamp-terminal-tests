export default function transportFee(fee){
    if(fee === 'morning'){
    return ('R20')
    }else if(fee === 'afternoon'){
       return ('R10')
    }else{
      return ('free')
    }
};