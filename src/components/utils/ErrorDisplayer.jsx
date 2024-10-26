import { FaCheck, FaInfo } from "react-icons/fa";
import { MdOutlineDangerous } from "react-icons/md";
import "./../../styles/error-display.css";
import { useEffect, useState } from "react";
import { useErrorContext } from "../../context/ErrorContext";

const ErrorDisplayer = () => {
  const { messages, setMessages } = useErrorContext();
  const [timer, setTimer] = useState([]);

  useEffect(() => {
    setTimer(messages.map(({ time }) => time + 5000));
  }, [messages]);

  useEffect(() => {
    if (timer.length === 0) return;
    const interval = setInterval(() => {
      timer.map((time) => {
        if (time < Date.now()) {
          setMessages((prev) => {
            const newMessages = prev.filter(
              (_, i) => _.time + 5000 > Date.now()
            );
            return newMessages;
          });
        }
        return 0;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [setMessages, timer]);

  return (
    <div className="error-display">
      {messages.length === 0
        ? ""
        : messages.map(({ type, message, time }, index) => (
            <div key={time} className={`error-container ${type}`}>
              <span>
                {type === "success" ? (
                  <FaCheck />
                ) : type === "danger" ? (
                  <MdOutlineDangerous />
                ) : (
                  <FaInfo />
                )}
              </span>
              <p>{message}</p>
              <div className="progress-bar"></div>
            </div>
          ))}
    </div>
  );
};

export default ErrorDisplayer;
