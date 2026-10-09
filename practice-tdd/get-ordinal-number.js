export function getOrdinalNumber(num) {
  const lastDigit = num % 10;
  const lastTwoDigit = num % 100;

  if (lastTwoDigit === 11 || lastTwoDigit === 12 || lastTwoDigit === 13) {
    return `${num}th`;
  }
  if (lastDigit === 1) {
    return `${num}st`;
  }
  if (lastDigit === 2) {
    return `${num}nd`;
  }
  if (lastDigit === 3) {
    return `${num}rd`;
  }
    return `${num}th`;
  
}
