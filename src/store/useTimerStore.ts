import { create } from 'zustand';

interface TimerState {
  seconds: number;
  countSeconds: () => void;
  resetSeconds: () => void;
}

const useTimerStore = create<TimerState>((set) => ({
  seconds: 0,
  countSeconds: () => set((state) => ({ seconds: state.seconds + 1 })),
  resetSeconds: () => set(() => ({ seconds: 0 })),
}));

export default useTimerStore;
