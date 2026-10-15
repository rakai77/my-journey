import { useRef, useEffect, useCallback } from 'react';
import { createSpring, stepSpring, SpringState } from '../utils/springPhysics';

interface UseDragTiltOptions {
  maxTiltX?: number; // max degrees on X axis (pitch)
  maxTiltY?: number; // max degrees on Y axis (yaw)
  onTap?: () => void;
  disabled?: boolean;
}

export const useDragTilt = ({
  maxTiltX = 26,
  maxTiltY = 34,
  onTap,
  disabled = false,
}: UseDragTiltOptions = {}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Interaction tracking refs (do not trigger re-renders)
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const pointerStartRef = useRef({ x: 0, y: 0 });
  const dragStartRotRef = useRef({ x: 0, y: 0 });
  const totalDragDistanceRef = useRef(0);

  // Targets for springs
  const targetRef = useRef({
    rotX: 0,
    rotY: 0,
    lift: 0,
    glareX: 50,
    glareY: 50,
  });

  // Spring states
  const rotXSpringRef = useRef<SpringState>(createSpring(0));
  const rotYSpringRef = useRef<SpringState>(createSpring(0));
  const liftSpringRef = useRef<SpringState>(createSpring(0));
  const glareXSpringRef = useRef<SpringState>(createSpring(50));
  const glareYSpringRef = useRef<SpringState>(createSpring(50));

  // Pointer event handlers
  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (disabled || e.button !== 0) return;
      const el = containerRef.current;
      if (!el) return;

      try {
        el.setPointerCapture(e.pointerId);
      } catch {
        // Fallback if pointer capture unsupported
      }

      isDraggingRef.current = true;
      pointerStartRef.current = { x: e.clientX, y: e.clientY };
      dragStartRotRef.current = {
        x: rotXSpringRef.current.value,
        y: rotYSpringRef.current.value,
      };
      totalDragDistanceRef.current = 0;

      // Lift card forward when held
      targetRef.current.lift = -16;
      el.style.cursor = 'grabbing';
    },
    [disabled]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (disabled) return;
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width;
      const relY = (e.clientY - rect.top) / rect.height;

      // Update glare target opposite to tilt
      targetRef.current.glareX = Math.max(0, Math.min(100, (1 - relX) * 100));
      targetRef.current.glareY = Math.max(0, Math.min(100, (1 - relY) * 100));

      if (isDraggingRef.current) {
        const dx = e.clientX - pointerStartRef.current.x;
        const dy = e.clientY - pointerStartRef.current.y;
        totalDragDistanceRef.current += Math.hypot(e.movementX || 0, e.movementY || 0);

        // Convert drag pixels to rotation (approx 0.16 deg per pixel)
        const nextRotY = dragStartRotRef.current.y + dx * 0.18;
        const nextRotX = dragStartRotRef.current.x - dy * 0.18;

        targetRef.current.rotY = Math.max(-maxTiltY, Math.min(maxTiltY, nextRotY));
        targetRef.current.rotX = Math.max(-maxTiltX, Math.min(maxTiltX, nextRotX));
      } else if (isHoveredRef.current) {
        // Subtle tilt on hover when not dragging
        const normX = (relX - 0.5) * 2; // -1 to 1
        const normY = (relY - 0.5) * 2;
        targetRef.current.rotY = normX * 8;
        targetRef.current.rotX = -normY * 7;
        targetRef.current.lift = -8;
      }
    },
    [disabled, maxTiltX, maxTiltY]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (disabled) return;
      const el = containerRef.current;
      if (el) {
        try {
          el.releasePointerCapture(e.pointerId);
        } catch {
          // Ignore
        }
        el.style.cursor = isHoveredRef.current ? 'grab' : 'default';
      }

      const wasDrag = totalDragDistanceRef.current > 7;
      isDraggingRef.current = false;

      // Reset targets back to resting state
      targetRef.current.rotX = 0;
      targetRef.current.rotY = 0;
      targetRef.current.lift = isHoveredRef.current ? -6 : 0;
      targetRef.current.glareX = 50;
      targetRef.current.glareY = 50;

      // If released without significant drag, trigger tap
      if (!wasDrag && onTap) {
        onTap();
      }
    },
    [disabled, onTap]
  );

  const handlePointerEnter = useCallback(() => {
    isHoveredRef.current = true;
    if (containerRef.current && !isDraggingRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  }, []);

  const handlePointerLeave = useCallback(() => {
    isHoveredRef.current = false;
    if (!isDraggingRef.current) {
      targetRef.current.rotX = 0;
      targetRef.current.rotY = 0;
      targetRef.current.lift = 0;
      targetRef.current.glareX = 50;
      targetRef.current.glareY = 50;
      if (containerRef.current) {
        containerRef.current.style.cursor = 'default';
      }
    }
  }, []);

  // Continuous rAF animation loop
  useEffect(() => {
    if (disabled) return;
    let animId: number;
    let lastTime = performance.now();

    const loop = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.064);
      lastTime = now;

      const el = containerRef.current;
      if (el) {
        // Natural idle floating when resting
        const isIdle = !isDraggingRef.current && !isHoveredRef.current;
        const idleRotX = isIdle ? Math.sin(now * 0.0012) * 1.8 : 0;
        const idleRotY = isIdle ? Math.cos(now * 0.001) * 2.2 : 0;
        const idleLift = isIdle ? Math.sin(now * 0.0015) * 6 : 0;

        const effectiveTargetRotX = targetRef.current.rotX + idleRotX;
        const effectiveTargetRotY = targetRef.current.rotY + idleRotY;
        const effectiveTargetLift = targetRef.current.lift + idleLift;

        // Step physics springs
        stepSpring(rotXSpringRef.current, effectiveTargetRotX, dt, 160, 16);
        stepSpring(rotYSpringRef.current, effectiveTargetRotY, dt, 160, 16);
        stepSpring(liftSpringRef.current, effectiveTargetLift, dt, 140, 15);
        stepSpring(glareXSpringRef.current, targetRef.current.glareX, dt, 120, 18);
        stepSpring(glareYSpringRef.current, targetRef.current.glareY, dt, 120, 18);

        // Apply CSS custom properties directly to DOM
        const rx = rotXSpringRef.current.value.toFixed(2);
        const ry = rotYSpringRef.current.value.toFixed(2);
        const lift = liftSpringRef.current.value.toFixed(2);
        const gx = glareXSpringRef.current.value.toFixed(1);
        const gy = glareYSpringRef.current.value.toFixed(1);

        el.style.setProperty('--rx', `${rx}deg`);
        el.style.setProperty('--ry', `${ry}deg`);
        el.style.setProperty('--lift', `${lift}px`);
        el.style.setProperty('--gx', `${gx}%`);
        el.style.setProperty('--gy', `${gy}%`);
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [disabled]);

  return {
    containerRef,
    bind: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerUp,
      onPointerEnter: handlePointerEnter,
      onPointerLeave: handlePointerLeave,
    },
  };
};
