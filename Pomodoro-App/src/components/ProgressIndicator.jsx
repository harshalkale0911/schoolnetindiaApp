import React from 'react';
import { Progress } from 'antd';
import './ProgressIndicator.css'; // Import custom styles

const ProgressIndicator = ({ timeLeft, totalDuration }) => {
    const percentage = (timeLeft / (totalDuration * 60)) * 100;

    return (
        <Progress 
            type="circle" 
            percent={100 - percentage}
            format={() => `${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`}
            className="progress-indicator"
        />
    );
};

export default ProgressIndicator;
