export default function totalPhoneBill(phone){
    var counter1 = 0;
    var counter2 = 0;
    let allPhone = phone.split(',')
    for(var i=0;i<allPhone.length;i++){
      if(allPhone[i].trim() === 'call'){
         counter1++;
       }else if(allPhone[i].trim() === 'sms'){
        counter2++;
       };
     };
     let money = counter1*2.75+counter2*0.65;
    return'R'+ money.toFixed(2);
};