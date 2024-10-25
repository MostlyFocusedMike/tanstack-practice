import { useEffect, useCallback } from "react"
import { useSearchParams } from "react-router-dom";

export default function useSearchQueryDebounce( effect: () => void, inputStr: string) {
  const [searchParams] = useSearchParams();
  const currentNameQueryParams = searchParams.get('name') || '';
  const callback = useCallback(effect, [inputStr, effect]);

  useEffect(() => {
    if (inputStr === currentNameQueryParams) return;

    const timeout = setTimeout(callback, 750);
    return () => clearTimeout(timeout);
  }, [callback, inputStr, currentNameQueryParams]);
}
