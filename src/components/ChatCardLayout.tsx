import React from "react";

export type ChatCardLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const ChatCardLayout: React.FC<ChatCardLayoutProps> = ({ title, children }) => {
  const maxHClass =
    title === "Introduce"
      ? "max-h-96"
      : title === "Career"
      ? "max-h-[800px]"
      : "max-h-80";

  return (
    <div className="w-full bg-gray-100 text-black px-2 py-2 rounded-tl-none rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] shadow-md max-w-full">
      <div className="px-4 pt-1">
        <span className="text-lg font-bold text-[#005F99]">{title}</span>
        <div className="border-b-2 border-[#005F99] mt-1" />
      </div>

      <div className="px-4 py-2">
        <div
          className={`
            bg-white border border-gray-200 p-4 rounded-md
            ${maxHClass} overflow-y-auto whitespace-pre-line
          `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ChatCardLayout;
