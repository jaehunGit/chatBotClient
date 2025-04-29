import React from "react";
import MailIcon from "@mui/icons-material/Mail";

interface ChatLayoutProps {
  children: React.ReactNode;
}

const ChatLayout: React.FC<ChatLayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen flex justify-center bg-gray-100">
      <div className="w-full max-w-2xl h-full bg-white shadow-xl flex flex-col">
        <div className="h-12 bg-blue-500 px-4 flex items-center justify-between text-white text-sm">
          <span />
          <MailIcon className="w-6 h-6" />
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-6">{children}</div>
      </div>
    </div>
  );
};

export default ChatLayout;
