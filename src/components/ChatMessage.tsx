"use client";

import React, { useState, useEffect } from "react";

type Props = {
  message: string;
  time?: string;
  isUser?: boolean;
};

const ChatMessage = ({ message, time, isUser = false }: Props) => {
  const [clientTime, setClientTime] = useState<string | null>(null);

  useEffect(() => {
    if (time) {
      setClientTime(time);
    }
  }, [time]);

  return (
    <div
      className={`w-full flex ${
        isUser ? "justify-end" : "justify-start"
      } px-2 mt-2`}
    >
      {isUser ? (
        <div className="flex items-end gap-1">
          {clientTime && (
            <span className="text-[10px] text-gray-400 mb-[2px]">
              {clientTime}
            </span>
          )}
          <div className="bg-blue-500 text-white px-4 py-2 rounded-tr-none rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] shadow-md w-auto max-w-full text-sm sm:text-base whitespace-pre-line">
            {message}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-start space-y-1">
          {message !== "..." ? (
            <div className="bg-gray-100 text-black px-5 py-3 rounded-tl-none rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] shadow-md w-auto max-w-full text-sm sm:text-base whitespace-pre-line">
              {message}
            </div>
          ) : (
            <div className="flex gap-6 mt-2">
              <span className="dot animate-ping"></span>
              <span className="dot animate-ping delay-200"></span>
              <span className="dot animate-ping delay-400"></span>
            </div>
          )}
          {message !== "..." && clientTime && (
            <span className="text-[10px] text-gray-400 pl-2">{clientTime}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
