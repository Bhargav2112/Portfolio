import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;
    let animationFrame = 0;

    const moveCursor = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (cursor) {
        cursor.style.left = `${mouseX - 6}px`;
        cursor.style.top = `${mouseY - 6}px`;
      }
    };
    const animateFollower = () => {
      followerX += (mouseX - followerX - 20) * 0.12;
      followerY += (mouseY - followerY - 20) * 0.12;
      if (follower) {
        follower.style.left = `${followerX}px`;
        follower.style.top = `${followerY}px`;
      }
      animationFrame = window.requestAnimationFrame(animateFollower);
    };
    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);
    const interactables = document.querySelectorAll('a, button, [data-hover]');
    document.addEventListener('mousemove', moveCursor, { passive: true });
    interactables.forEach((element) => {
      element.addEventListener('mouseenter', handleEnter);
      element.addEventListener('mouseleave', handleLeave);
    });
    animationFrame = window.requestAnimationFrame(animateFollower);
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      window.cancelAnimationFrame(animationFrame);
      interactables.forEach((element) => {
        element.removeEventListener('mouseenter', handleEnter);
        element.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;
  return (
    <>
      <div ref={cursorRef} className="luxury-cursor" style={{ transform: isHovering ? 'scale(2.5)' : 'scale(1)', background: isHovering ? '#0B6B4B' : '#C8A24D' }} />
      <div ref={followerRef} className="luxury-cursor-follower" style={{ width: isHovering ? '60px' : '40px', height: isHovering ? '60px' : '40px', borderColor: isHovering ? '#0B6B4B' : '#C8A24D' }} />
    </>
  );
}
