import React, { useState, useRef, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const audioRef = useRef(new Audio("/overn-timer-ding-78204.mp3")); // ✅ From public

  useEffect(() => {
    if (secondsLeft === 0 && isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
      setIsPaused(false);
      audioRef.current.play();
    }
  }, [secondsLeft, isRunning]);

  const startTimer = () => {
    if (!time || time <= 0 || isRunning) {
      setTime(""); // clear input if invalid
      return;
    }
    setSecondsLeft(time);
    setIsRunning(true);
    setIsPaused(false);
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
  };

  const pauseResumeTimer = () => {
    if (!isRunning) return;
    if (isPaused) {
      setIsPaused(false);
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      setIsPaused(true);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setIsPaused(false);
    setSecondsLeft(null);
    setTime("");
  };

  const progressWidth =
    secondsLeft !== null && time > 0 ? (secondsLeft / time) * 100 : 0;

  return (
    <div className="max-w-sm mx-auto p-6 bg-white shadow-xl rounded-2xl text-center">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Countdown Timer</h1>

      <input
        type="number"
        min="1"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        disabled={isRunning}
        placeholder="Enter seconds"
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      <div className="flex justify-center gap-3 mb-4">
        <button
          onClick={startTimer}
          disabled={isRunning}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 disabled:opacity-50"
        >
          Start
        </button>
        <button
          onClick={pauseResumeTimer}
          disabled={!isRunning}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 disabled:opacity-50"
        >
          {isPaused ? "Resume" : "Pause"}
        </button>
        <button
          onClick={resetTimer}
          className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
        >
          Reset
        </button>
      </div>

      <div className="text-3xl font-semibold text-gray-800 mb-4">
        {secondsLeft > 0
          ? secondsLeft
          : secondsLeft === 0
          ? "⏰ Time's up!"
          : ""}
      </div>

      <div className="h-3 bg-gray-200 rounded-lg overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-1000 ease-linear"
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

export default CountdownTimer;
