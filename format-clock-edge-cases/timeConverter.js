function formatAs12HourClock(time){
  const [hourPart, minutePart] = time.split(":");
  const hours = Number(hourPart);

  let period;
  if(hours < 12){
    period = "am";
  } else {
    period = "pm";
  }

  let displayHour = hours % 12;
  if(displayHour === 0){
    displayHour = 12;
  } 
  return `${displayHour}:${minutePart}${period}`;
}
export {formatAs12HourClock};
