export function getOrdinalNumber(num) {
  const getlastDigit = num % 10;

  if (getlastDigit === 1) {
    return `${num}st`;
  }
  return `${num}th`;
}
console.log(getOrdinalNumber(224))