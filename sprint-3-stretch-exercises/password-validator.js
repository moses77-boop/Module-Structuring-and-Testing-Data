export function isValidPassword(password) {
  if(!/[A-Z]/.test(password)) return false;
  return true;
}
