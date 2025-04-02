import React from "react";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex justify-center bg-gray-100">
      <div className="w-full max-w-2xl h-full bg-white shadow-xl flex flex-col">
        <div className="h-12 bg-blue-500 px-4 flex items-center justify-between text-white text-sm">
          <span> </span>
          <span className="material-icons">chat</span>
        </div>
        <div className="flex-1 p-4 overflow-y-auto space-y-6">{children}</div>
      </div>
    </div>
  );
};

export default ChatLayout;
