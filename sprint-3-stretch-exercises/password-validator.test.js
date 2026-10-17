/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
import { isValidPassword } from "./password-validator.js";

test("All valid password returns true", () => {
    expect(isValidPassword("Ab7#x")).toEqual(true);
});

test("password has at least 5 characters", () => {
    // Arrange
    const password = "Ab7x";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(false);
});

test("password has at least one uppercase letter", () => {
    const password = "ab7#x";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
})