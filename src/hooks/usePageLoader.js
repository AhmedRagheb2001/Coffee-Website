import { useEffect, useState } from "react";

export function usePageLoader(delay = 650) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setIsLoading(false), delay);
    return () => window.clearTimeout(timeoutId);
  }, [delay]);

  return isLoading;
}
