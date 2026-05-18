import { useMemo } from "react";

/**
 * Returns a stable reference to an array as long as
 * its contents haven't changed (shallow element comparison).
 * Prevents useEffect from re-running when a new array literal
 * is passed with the same values.
 *
 * Uses a serialized string as the memo dependency to avoid
 * ref access during render (React 19 compatible).
 */
export function useStableArray<T>(arr: T[] | undefined): T[] | undefined {
  // Serialize to a string for stable comparison in useMemo deps
  const key = arr === undefined ? "\x00undef" : arr.join("\0");

  // useMemo returns the same array reference when key hasn't changed
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => arr, [key]);
}
