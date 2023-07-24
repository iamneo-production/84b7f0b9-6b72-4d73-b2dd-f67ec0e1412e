import React, { useState, useEffect } from 'react';

const ToastComponent = () => {
  const [isActive, setIsActive] = useState(false);
  let timer1, timer2;

  const showToast = () => {
    setIsActive(true);
    timer1 = setTimeout(() => {
      setIsActive(false);
    }, 5000);
    timer2 = setTimeout(() => {
      setIsActive(false);
    }, 5300);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
      {isActive && (
        <div className="toast active">
          <div className="toast-content">
            <i className="fas fa-solid fa-check check"></i>
            <div className="message">
              <span className="text text-1">Success</span>
              <span className="text text-2">Your changes have been saved</span>
            </div>
          </div>
          <i className="fa-solid fa-xmark close"></i>
          <div className="progress active"></div>
        </div>
      )}
    </div>
  );
};

export default ToastComponent;
