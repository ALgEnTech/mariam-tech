"use client";

import { createContext, useState } from "react";
import TransitionOverlay from "./TransitionOverlay";

export type Origin = { x: number; y: number };

type Ctx = {
  startTransition: (route: string, origin?: Origin) => void;
};

export const TransitionContext = createContext<Ctx | null>(null);

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<{ route: string; origin?: Origin } | null>(null);

  const startTransition = (route: string, origin?: Origin) => {
    setState({ route, origin });
  };

  return (
    <TransitionContext.Provider value={{ startTransition }}>
      {children}
      {state && (
        <TransitionOverlay
          route={state.route}
          origin={state.origin}
          onFinish={() => setState(null)}
        />
      )}
    </TransitionContext.Provider>
  );
}
