import { useState, useEffect } from "react";

interface UseCounterProps {
  target: number;
  duration?: number;
  isVisible?: boolean;
}

export function useCounter({ target, duration = 2000, isVisible = false }: UseCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, isVisible]);

  return count;
}
