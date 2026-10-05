function formatAs12HourClock(time) {
  const [hourPart, minutePart] = time.split(":");
  const hours = Number(hourPart);

  const period = hours < 12 ? "am" : "pm";

  let displayHour = hours % 12;
  if (displayHour === 0) {
    displayHour = 12;
  }
  return `${displayHour}:${minutePart}${period}`;
}
export { formatAs12HourClock };
