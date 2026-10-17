export function isValidPassword(password) {
  if(password.length < 5) return false;
  return true;
}
