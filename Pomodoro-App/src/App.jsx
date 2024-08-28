import  { useState, useEffect } from 'react';
import TimerDisplay from './components/TimerDisplay';
import StartStopButton from './components/StartStopButton';
import ResetButton from './components/ResetButton';
import ProgressIndicator from './components/ProgressIndicator';
import SessionSettings from './components/SessionSettings';
import { Layout, Space, Typography } from 'antd';

const { Header, Content } = Layout;

const App = () => {
    const [workDuration, setWorkDuration] = useState(25); // default 25 minutes
    const [breakDuration, setBreakDuration] = useState(5); // default 5 minutes
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [timerType, setTimerType] = useState('work'); // work or break
    const [timeLeft, setTimeLeft] = useState(workDuration * 60);

    useEffect(() => {
        let timer;
        if (isTimerRunning) {
            timer = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime <= 0) {
                        clearInterval(timer);
                        setIsTimerRunning(false);
                        if (timerType === 'work') {
                            setTimerType('break');
                            setTimeLeft(breakDuration * 60);
                        } else {
                            setTimerType('work');
                            setTimeLeft(workDuration * 60);
                        }
                        return prevTime;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else if (!isTimerRunning && timeLeft !== 0) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isTimerRunning, timeLeft, timerType, workDuration, breakDuration]);

    return (
        <Layout className="app-layout">
            <Header className="header">
                <Typography.Title level={2} style={{ color: 'white', margin: 0 }}>
                    Pomodoro Timer
                </Typography.Title>
                <SessionSettings 
                    workDuration={workDuration} 
                    breakDuration={breakDuration} 
                    setWorkDuration={setWorkDuration} 
                    setBreakDuration={setBreakDuration} 
                />
            </Header>
            <Content className="content">
                <Space direction="vertical" size="large" align="center">
                    <TimerDisplay timeLeft={timeLeft} />
                    <ProgressIndicator timeLeft={timeLeft} totalDuration={timerType === 'work' ? workDuration : breakDuration} />
                    <Space>
                        <StartStopButton 
                            isRunning={isTimerRunning} 
                            setIsRunning={setIsTimerRunning} 
                            setTimerType={setTimerType} 
                            setTimeLeft={setTimeLeft} 
                            workDuration={workDuration} 
                            breakDuration={breakDuration} 
                        />
                        <ResetButton 
                            setTimeLeft={setTimeLeft} 
                            setIsRunning={setIsTimerRunning} 
                            workDuration={workDuration} 
                            breakDuration={breakDuration} 
                        />
                    </Space>
                </Space>
            </Content>
        </Layout>
    );
};

export default App;
