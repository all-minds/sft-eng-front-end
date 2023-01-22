export function ensureNotNull<T>(value: T): NonNullable<T> {
  if (!value || value === undefined || value === null) {
    throw new Error();
  }

  return value as NonNullable<T>;
}
