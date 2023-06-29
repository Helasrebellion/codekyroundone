import React, { useEffect } from 'react';

function ProgressBars() {
  useEffect(() => {
    function updateProgressBar(barId, progress) {
      const progressBarFill = document.getElementById(barId);
      progressBarFill.style.width = `${progress}%`;
    }

    // Example usage:
    updateProgressBar('progress1', 100);
    updateProgressBar('progress2', 100);
    updateProgressBar('progress3', 80);
    updateProgressBar('progress4', 10);
    updateProgressBar('progress5', 50);
    updateProgressBar('progress6', 80);
    updateProgressBar('progress7', 40);
    updateProgressBar('progress8', 40);
    updateProgressBar('progress9', 60);
    updateProgressBar('progress10', 20);
  }, []);

  return (
    <div id="languagesknown">
      <div className="progress-bar">
        <div className="progress-bar-fill" id="progress1"></div>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-fill" id="progress2"></div>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-fill" id="progress3"></div>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-fill" id="progress4"></div>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-fill" id="progress5"></div>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-fill" id="progress6"></div>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-fill" id="progress7"></div>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-fill" id="progress8"></div>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-fill" id="progress9"></div>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-fill" id="progress10"></div>
      </div>
    </div>
  );
}

export default ProgressBars;
