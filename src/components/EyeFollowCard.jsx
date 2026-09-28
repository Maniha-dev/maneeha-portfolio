import { useEffect, useRef, useState } from "react";
import { banner, eyeConfig, eyeImages } from "../assets/assets";
import "./EyeFollowCard.css";

export default function EyeFollowCard() {
  const [direction, setDirection] = useState("center");
  const [imageFailed, setImageFailed] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    Object.values(eyeImages).forEach((source) => {
      const image = new Image();
      image.src = source;
      if (image.decode) image.decode().catch(() => {});
    });
  }, []);

  useEffect(() => {
    if (imageFailed) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const touchDevice = window.matchMedia("(hover: none)").matches;
    if (prefersReducedMotion || touchDevice) return undefined;

    let frameId = 0;
    let mouseX = 0;
    let mouseY = 0;

    const updateDirection = () => {
      frameId = 0;
      const bounds = cardRef.current?.getBoundingClientRect();
      if (!bounds) return;

      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const dx = Math.max(-1, Math.min(1, (mouseX - centerX) / (window.innerWidth / 2)));
      const dy = Math.max(-1, Math.min(1, (mouseY - centerY) / (window.innerHeight / 2)));
      const distance = Math.sqrt(dx * dx + dy * dy);

      let nextDirection = "center";
      if (distance >= eyeConfig.deadZone) {
        if (Math.abs(dx) > Math.abs(dy)) {
          nextDirection = dx < 0 ? "left" : "right";
        } else if (dy < 0) {
          nextDirection = "up";
        }
      }

      setDirection((currentDirection) =>
        currentDirection === nextDirection ? currentDirection : nextDirection,
      );
    };

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (!frameId) frameId = window.requestAnimationFrame(updateDirection);
    };

    const resetDirection = () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      frameId = 0;
      setDirection((currentDirection) =>
        currentDirection === "center" ? currentDirection : "center",
      );
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", resetDirection);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", resetDirection);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [imageFailed]);

  if (imageFailed) {
    return (
      <>
        <div className="avatar-badge">{banner.avatarBadge}</div>
        <div className="avatar-face">
          <span>{banner.avatarInitial}</span>
        </div>
        <div className="avatar-tag">{banner.avatarTag}</div>
      </>
    );
  }

  return (
    <div className="eye-follow-stack" ref={cardRef} aria-hidden="true">
      {Object.entries(eyeImages).map(([imageDirection, source]) => (
        <img
          key={imageDirection}
          className={`eye-follow-image${direction === imageDirection ? " is-active" : ""}`}
          src={source}
          alt=""
          decoding="async"
          onError={() => setImageFailed(true)}
          style={{
            transitionDuration: `${eyeConfig.fadeMs}ms`,
            transform: `scale(${eyeConfig.zoom})`,
            transformOrigin: `${eyeConfig.originX}% ${eyeConfig.originY}%`,
          }}
        />
      ))}
    </div>
  );
}
