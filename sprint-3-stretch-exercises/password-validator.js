export function isValidPassword(password) {
  if(/[A-Z]/.test(password)) return true;
  if(/[a-z]/.test(password)) return true;
  return false;
}
