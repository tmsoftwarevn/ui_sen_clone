import { useEffect, useState } from 'react';
import './styles.css'; // Import the CSS file

const LoadingAnimation = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after animation is completed
    const timer = setTimeout(() => {
      setLoading(false);
    },1000); // Duration of the loading animation (3 seconds in this case)

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <div>
      {/* The loading animation container */}
      <div className={`loading-container ${loading ? 'show' : 'hide'}`}>
        <div className="loading-background"></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
