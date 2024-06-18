import { createContext, FC, useContext, useState } from 'react';

import Timer from '../../types/Timer';

interface TimerContextType {
  timers: Timer[];
  setTimers: React.Dispatch<React.SetStateAction<Timer[]>>;
}

export const TimerContext = createContext<TimerContextType | null>(null);

export const TimerProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [timers, setTimers] = useState<Timer[]>([]);

  return (
    <TimerContext.Provider value={{ timers, setTimers }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = (): TimerContextType => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
};
