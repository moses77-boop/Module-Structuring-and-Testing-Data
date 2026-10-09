export function getOrdinalNumber(num) {
  const getlastDigit = num % 10;
  const getlastTwoDigit = num % 100;

  if (getlastTwoDigit === 11 || getlastTwoDigit === 12 || getlastTwoDigit === 13) {
    return `${num}th`;
  }
  if (getlastDigit === 1) {
    return `${num}st`;
  }
  if (getlastDigit === 2) {
    return `${num}nd`;
  }
  if (getlastDigit === 3) {
    return `${num}rd`;
  }
    return `${num}th`;
  
}
