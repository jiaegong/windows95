import React, { useEffect } from 'react';
import Billboard from './Billboard';
import useTimerStore from '@/store/useTimerStore';

function Timer({ isRunning }: { isRunning: boolean }) {
  const { seconds, countSeconds } = useTimerStore();

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;

    if (isRunning) {
      timerId = setInterval(() => {
        countSeconds();
      }, 1000);
    } else {
      if (timerId !== null) clearInterval(timerId);
    }

    return () => {
      if (timerId !== null) clearInterval(timerId);
    };
  }, [isRunning]);

  return <Billboard number={seconds} />;
}

export default Timer;
