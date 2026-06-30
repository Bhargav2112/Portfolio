import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursor) {
        cursor.style.left = mouseX - 6 + 'px';
        cursor.style.top = mouseY - 6 + 'px';
      }
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX - 20) * 0.12;
      followerY += (mouseY - followerY - 20) * 0.12;
      if (follower) {
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
      }
      requestAnimationFrame(animateFollower);
    };

    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', moveCursor);
    animateFollower();

    const interactables = document.querySelectorAll('a, button, [data-hover]');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="luxury-cursor"
        style={{
          transform: isHovering ? 'scale(2.5)' : 'scale(1)',
          background: isHovering ? '#0B6B4B' : '#C8A24D',
        }}
      />
      <div
        ref={followerRef}
        className="luxury-cursor-follower"
        style={{
          width: isHovering ? '60px' : '40px',
          height: isHovering ? '60px' : '40px',
          borderColor: isHovering ? '#0B6B4B' : '#C8A24D',
        }}
      />
    </>
  );
}