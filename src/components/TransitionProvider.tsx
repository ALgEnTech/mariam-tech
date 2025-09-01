"use client";

import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import TransitionOverlay from "./TransitionOverlay";

export type Origin = { x: number; y: number };

type Ctx = {
  startTransition: (route: string, origin?: Origin) => void;
};

export const TransitionContext = createContext<Ctx | null>(null);

type OverlayState =
  | null
  | {
      route: string;
      variant: "pro" | "lite";
    };

/**
 * Provider wires the fast lightning strike.
 * - Always quick; respects reduced motion
 * - Detects slower devices and uses "lite" fade
 */
export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<OverlayState>(null);
  const [reduced, setReduced] = useState(false);
  const [deviceMode, setDeviceMode] = useState<"pro" | "lite">("pro");

  // Reduced-motion users get lite
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    on();
    mq.addEventListener?.("change", on);
    return () => mq.removeEventListener?.("change", on);
  }, []);

  // Tiny FPS probe to pick pro vs lite
  useEffect(() => {
    if (typeof window === "undefined") return;
    let frames = 0;
    let start = performance.now();
    let id = requestAnimationFrame(loop);
    function loop(now: number) {
      frames++;
      if (now - start < 200) id = requestAnimationFrame(loop);
      else {
        const fps = frames / ((now - start) / 1000);
        if (fps < 50 || (navigator.hardwareConcurrency || 4) <= 4) {
          setDeviceMode("lite");
        }
        cancelAnimationFrame(id);
      }
    }
    return () => cancelAnimationFrame(id);
  }, []);

  const startTransition = useCallback(
    (route: string) => {
      const variant: "pro" | "lite" = reduced || deviceMode === "lite" ? "lite" : "pro";
      setState({ route, variant });
    },
    [reduced, deviceMode]
  );

  const ctx = useMemo<Ctx>(() => ({ startTransition }), [startTransition]);

  return (
    <TransitionContext.Provider value={ctx}>
      <MotionConfig reducedMotion="user">
        {children}
        <AnimatePresence>
          {state && (
            <TransitionOverlay
              route={state.route}
              variant={state.variant}
              onFinish={() => setState(null)}
            />
          )}
        </AnimatePresence>
      </MotionConfig>
    </TransitionContext.Provider>
  );
}
