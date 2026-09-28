import { useEffect, useRef } from "react";
import "./EyeTracker.css";

const EMPTY_EYES = [];

export default function EyeTracker({ config }) {
  const trackerRef = useRef(null);
  const pupilRefs = useRef([]);
  const eyes = config?.eyes ?? EMPTY_EYES;

  useEffect(() => {
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const touchOnly = window.matchMedia?.("(hover: none)").matches;

    if (reducedMotion || touchOnly) return undefined;

    let frameId = 0;
    let cursorX = 0;
    let cursorY = 0;

    const updatePupils = () => {
      frameId = 0;
      const bounds = trackerRef.current?.getBoundingClientRect();
      if (!bounds) return;

      eyes.forEach((eye, index) => {
        const pupil = pupilRefs.current[index];
        if (!pupil) return;

        const centerX = bounds.left + (eye.x / 100) * bounds.width;
        const centerY = bounds.top + (eye.y / 100) * bounds.height;
        const deltaX = cursorX - centerX;
        const deltaY = cursorY - centerY;
        const distance = Math.hypot(deltaX, deltaY);
        const maxDistance = bounds.width * (eye.size / 100) * config.maxMove;
        const movement = Math.min(distance, maxDistance);
        const angle = Math.atan2(deltaY, deltaX);
        const moveX = Math.cos(angle) * movement;
        const moveY = Math.sin(angle) * movement;

        pupil.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
      });
    };

    const handleMouseMove = (event) => {
      cursorX = event.clientX;
      cursorY = event.clientY;
      if (!frameId) frameId = window.requestAnimationFrame(updatePupils);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [config, eyes]);

  return (
    <div className="eye-tracker" ref={trackerRef} aria-hidden="true">
      {eyes.map((eye, index) => (
        <span
          className={`eye-tracker-eye${config.debug ? " is-debug" : ""}`}
          key={`${eye.x}-${eye.y}-${index}`}
          style={{
            left: `${eye.x}%`,
            top: `${eye.y}%`,
            width: `${eye.size}%`,
            backgroundColor: config.eyeColor,
          }}
        >
          <span
            className="eye-tracker-pupil"
            ref={(element) => { pupilRefs.current[index] = element; }}
            style={{
              width: `${config.pupilRatio * 100}%`,
              height: `${config.pupilRatio * 100}%`,
              backgroundColor: config.pupilColor,
            }}
          />
        </span>
      ))}
    </div>
  );
}
