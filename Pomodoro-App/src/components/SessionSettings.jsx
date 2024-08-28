import React from 'react';
import { InputNumber, Space } from 'antd';
import './SessionSettings.css'; // Import custom styles

const SessionSettings = ({ workDuration, breakDuration, setWorkDuration, setBreakDuration }) => {
    return (
        <Space className="session-settings">
            <InputNumber
                min={1}
                max={60}
                value={workDuration}
                onChange={value => setWorkDuration(value)}
                addonBefore="Work Duration (min)"
                className="settings-input"
                size="large"
            />
            <InputNumber
                min={1}
                max={60}
                value={breakDuration}
                onChange={value => setBreakDuration(value)}
                addonBefore="Break Duration (min)"
                className="settings-input"
                size="large"
            />
        </Space>
    );
};

export default SessionSettings;
