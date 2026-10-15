/**
 * Semi-implicit Euler step of a damped harmonic oscillator:
 *   a = -k * (x - target) - c * v
 * k = stiffness, c = damping factor.
 * Frame-rate independent via delta time dt (in seconds).
 */
export interface SpringState {
  value: number;
  velocity: number;
}

export const createSpring = (initial = 0): SpringState => ({
  value: initial,
  velocity: 0,
});

export const stepSpring = (
  s: SpringState,
  target: number,
  dt: number,
  k = 180,
  c = 18
): void => {
  // Clamp delta time to avoid instability on frame drops
  const safeDt = Math.min(dt, 0.064);
  const accel = -k * (s.value - target) - c * s.velocity;
  s.velocity += accel * safeDt;
  s.value += s.velocity * safeDt;
};
