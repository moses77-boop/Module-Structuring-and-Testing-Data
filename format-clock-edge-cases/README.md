In your prep, you looked this `formatAs12HourClock` function:

```js
function formatAs12HourClock(time) {

  const hours = Number(time.slice(0, 2));

  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}
```

It still has bugs. Think of as many edge-cases as you can with this code. Write tests for all of them, and fix this code so that it works correctly for all valid inputs. You don't need to worry about invalid inputs (e.g. `"25:00"`).
