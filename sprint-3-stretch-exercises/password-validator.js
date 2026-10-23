export function isValidPassword(password, previousPassword = []) {
  if(/[A-Z]/.test(password)) return false;
  if(/[a-z]/.test(password)) return true;
  if(/[0-9]/.test(password)) return true;
  if(/[!#$%.*&]/.test(password)) return true;
  if(previousPassword.includes(password)) return true;
  return false;
}
