import Head from 'next/head';
import { useState, useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [x, setX] = useState(0);
  const [resetting, setResetting] = useState(false);
  const dragging = useRef(false);
  const startX = useRef(0);
  const lastX = useRef(0);
  const barRef = useRef(null);
  const imageWidth = 150;
  const router = useRouter();

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    dragging.current = true;
    startX.current = e.clientX;
    setResetting(false);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!dragging.current) return;
    const dx = e.clientX - startX.current;
    let newX = lastX.current + dx;
    const bar = barRef.current;
    if (bar) {
      const maxX = bar.offsetWidth - imageWidth;
      if (newX < 0) newX = 0;
      if (newX > maxX) {
        newX = maxX;
        // Navigate to new route when image reaches the end
        router.push('/portfolio');
      }
    }
    setX(newX);
  };

  const handleMouseUp = () => {
    dragging.current = false;
    lastX.current = 0;
    setResetting(true);
    setX(0);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e) => {
    dragging.current = true;
    startX.current = e.touches[0].clientX;
    setResetting(false);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
    e.preventDefault();
  };

  const handleTouchMove = (e) => {
    if (!dragging.current) return;
    const dx = e.touches[0].clientX - startX.current;
    let newX = lastX.current + dx;
    const bar = barRef.current;
    if (bar) {
      const maxX = bar.offsetWidth - imageWidth;
      if (newX < 0) newX = 0;
      if (newX > maxX) {
        newX = maxX;
        // Navigate to new route when image reaches the end
        router.push('/home');
      }
    }
    setX(newX);
  };

  const handleTouchEnd = () => {
    dragging.current = false;
    lastX.current = 0;
    setResetting(true);
    setX(0);
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };

  const handleTransitionEnd = () => {
    setResetting(false);
  };

  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio!" />
      </Head>
      <main>
        <div className="wrapper">
          <div className="heroSection">
            <div className="heroText">
                <h1>João Vale's Portfolio</h1>
            </div>
            <div className="unlockBar" ref={barRef}>
              <div
                className="unlockBarOverlay"
                style={{
                  width: resetting ? `${x}px` : `${x + 75}px`,
                  opacity: resetting ? 1 : 0.7
                }}
              />
              <img
                src="/images/joaoVale.jpg"
                className="unlockImage"
                alt="Loading..."
                style={{
                  transform: `translateX(${x}px)`,
                  cursor: 'grab',
                  touchAction: 'none',
                  transition: resetting ? 'transform 0.5s cubic-bezier(0.4,0,0.2,1)' : 'none',
                }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onTransitionEnd={handleTransitionEnd}
              />
              <h2 className="unlockText">Unlock my Portfolio...</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
