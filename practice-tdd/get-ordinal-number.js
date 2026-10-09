export function getOrdinalNumber(num) {
  const getlastDigit = num % 10;
  const getlastTwoDigit = num % 100;

  if (getlastTwoDigit === 11) {
    return `${num}th`;
  }
  if (getlastDigit === 1) {
    return `${num}st`;
  }
    return `${num}th`;
  
}
console.log(getOrdinalNumber(121))