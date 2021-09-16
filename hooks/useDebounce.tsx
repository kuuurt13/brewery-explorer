import { useCallback, useEffect, useRef } from "react";

export default function useDebounce(
  func: (...args: any[]) => void,
  timeout: number = 500
) {
  const funcTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const handleUnmount = useCallback(clearPendingTimeout, []);

  useEffect(() => () => handleUnmount(), [handleUnmount]);

  function clearPendingTimeout() {
    if (funcTimeoutRef.current) {
      clearTimeout(funcTimeoutRef.current);
    }
  }

  function debounceHandler(...args: any[]) {
    clearPendingTimeout();
    funcTimeoutRef.current = setTimeout(() => func(...args), timeout);
  }

  return debounceHandler;
}
