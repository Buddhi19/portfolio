import React, { useEffect, useState } from 'react';

const FallingStars = ({ theme }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    if (theme === 'dark') {
      const createStar = () => {
        const star = {
          id: Math.random(),
          left: Math.random() * 100,
          duration: Math.random() * 3 + 2,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 2
        };

        setStars(prevStars => [...prevStars].concat(star));

        setTimeout(() => {
          setStars(prevStars => prevStars.filter(s => s.id !== star.id));
        }, (star.duration + star.delay) * 1000);
      };

      // Create stars periodically
      const interval = setInterval(createStar, 300);
      
      // Initial stars
      for (let i = 0; i < 10; i++) {
        createStar();
      }

      return () => {
        clearInterval(interval);
        setStars([]);
      };
    } else {
      setStars([]);
    }
  }, [theme]);

  if (theme !== 'dark') return null;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ zIndex: 1 }}>
      <div className="absolute inset-0 bg-gray-900 opacity-90" />
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute top-0 rounded-full"
          style={{
            left: `${star.left}%`, // Explicit left position
            position: 'absolute', // Ensure correct positioning
            top: '0px', // Start from the top
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: 'white',
            boxShadow: '0 0 4px #fff, 0 0 8px #fff',
            transform: 'translateY(-100%)',
            animation: `
                fallingStar ${star.duration}s linear ${star.delay}s forwards,
                twinkle ${star.duration / 4}s ease-in-out infinite alternate
            `,
            }}
        />
      ))}
      <style jsx>{`
        @keyframes fallingStar {
          from {
            transform: translateY(-100%) rotate(45deg);
            opacity: 1;
          }
          to {
            transform: translateY(100vh) rotate(45deg);
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0% {
            opacity: 0.3;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default FallingStars;