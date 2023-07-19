export default function countRegNumber(regNumbers){
  if(regNumbers === '' || regNumbers === ' '){
    return 0;
  }
  return regNumbers.split(',').length;
};