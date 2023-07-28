export function hasPackage(name: string) {
  try {
    require.resolve(name);
    return true;
  } catch (error) {
    return false;
  }
}
