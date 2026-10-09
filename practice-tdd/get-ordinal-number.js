export function getOrdinalNumber(num) {
  const getlastDigit = num % 10;
  const getlastTwoDigit = num % 100;

  if (getlastDigit === 1) {
    return `${num}st`;
  }
  if (getlastTwoDigit === 11) {
    return `${num}th`;
  }
}
console.log(getOrdinalNumber(224))