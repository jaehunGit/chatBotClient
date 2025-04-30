"use client";

import { useChatStore } from "@/store/ChatStore";
import { botResponses } from "@/constants/responses";

const options = [
  { label: "Introduce", icon: "👋" },
  { label: "Career", icon: "📚" },
  { label: "Skills", icon: "💻" },
  { label: "Projects", icon: "✨" },
  { label: "Works", icon: "👨‍💻" },
  { label: "Contact", icon: "📧" },
];

const getCurrentTime = (): string => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const period = hours < 12 ? "오전" : "오후";
  const formattedHour = hours > 12 ? hours - 12 : hours;
  return `${period} ${formattedHour}:${minutes}`;
};

const ChatOptions = () => {
  const addMessage = useChatStore((s) => s.addMessage);
  const addBotCardResponse = useChatStore((s) => s.addBotCardResponse);
  const messages = useChatStore((s) => s.messages);

  const hasUserClicked = messages.some((m) => m.role === "user");

  const handleClick = (label: string, icon: string) => {
    const now = getCurrentTime();

    addMessage({
      role: "user",
      text: `${icon} ${label}`,
      time: now,
      type: "text",
    });

    const response = botResponses[label] ?? "아직 준비되지 않은 항목입니다.";
    addBotCardResponse(label, response);
  };

  return (
    <div className="flex flex-col items-end gap-1 pr-2 mt-4">
      {hasUserClicked && (
        <p className="text-xs text-gray-400 mb-1">더 궁금하신 게 있으세요?</p>
      )}

      <div className="flex gap-1 flex-wrap">
        {options.slice(0, 3).map(({ label, icon }) => (
          <button
            key={label}
            onClick={() => handleClick(label, icon)}
            className="px-3 py-1 text-xs sm:text-sm rounded-full border border-gray-300 bg-white text-black hover:bg-blue-500 hover:text-white whitespace-nowrap"
          >
            {icon} {label}
          </button>
        ))}
      </div>
      <div className="flex gap-1 flex-wrap">
        {options.slice(3).map(({ label, icon }) => (
          <button
            key={label}
            onClick={() => handleClick(label, icon)}
            className="px-3 py-1 text-xs sm:text-sm rounded-full border border-gray-300 bg-white text-black hover:bg-blue-500 hover:text-white whitespace-nowrap"
          >
            {icon} {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatOptions;
