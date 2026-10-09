import {formatAs12HourClock} from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", () => {
    assert.equal(formatAs12HourClock("23:00"), "11:00pm");
});

test("converts a single-digit morning hour and drops leading zero", () => {
    assert.equal(formatAs12HourClock("08:00"), "8:00am");
})
test("converts exactly to midnight", () => {
    assert.equal(formatAs12HourClock("00:00"), "12:00am");
})
test("converts time just after midnight", () => {
    assert.equal(formatAs12HourClock("00:30"), "12:30am");
})
test("converts the last minute before noon", () => {
    assert.equal(formatAs12HourClock("11:59"), "11:59am");
})
test("converts exact noon to pm", () => {
    assert.equal(formatAs12HourClock("12:00"), "12:00pm");
})
test("convert time just after noon", () => {
    assert.equal(formatAs12HourClock("12:30"), "12:30pm");
})
test("converts the first afternoon hour", () => {
    assert.equal(formatAs12HourClock("13:00"), "1:00pm");
})
test("converts late evening hour", () => {
    assert.equal(formatAs12HourClock("23:00"), "11:00pm");
})
test("converts last minute of the day", () => {
    assert.equal(formatAs12HourClock("23:59"), "11:59pm");
})
test("preserves minutes with leading zero", () => {
    assert.equal(formatAs12HourClock("09:05"), "9:05am");
})
test("preserves non-zero minutes", () => {
    assert.equal(formatAs12HourClock("14:45"), "2:45pm");
})