export function repeatStr(str, count) {
  // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.

  let result = "";
  result = result + str;
  result = result + str;
  result = result + str;

  for (let i = 0; i < count; i++){
    if(count < 0){
      throw new Error("count must not be negative");
    }
  }
  return "hellohellohello";
}
