import { useState, useEffect } from 'react';

interface CountdownTime {
  hours: number;
  minutes: number;
  seconds: number;
}

export function useCountdownTimer(): CountdownTime {
  const [timeLeft, setTimeLeft] = useState<number>(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          return 24 * 60 * 60; // Reset to 24 hours
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return { hours, minutes, seconds };
}
