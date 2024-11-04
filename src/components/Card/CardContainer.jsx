import { useEffect, useState } from 'react';

export default function CardContainer({ children }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const cardWidth = document.querySelector('.card-container').offsetWidth;
      setWidth(cardWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="rounded-xl border-4 w-full max-w-[480px] mx-auto card-container"
      style={{ height: `${width * 1.1}px` }} // 高さは常に幅の 1.1 倍
    >
      {children}
    </div>
  );
}
