import { create } from "zustand";

type Message = {
  role: "user" | "bot";
  text: string;
  time: string;
};

type ChatStore = {
  messages: Message[];
  addMessage: (msg: Message) => void;
  resetMessages: () => void;
  addBotResponse: (text: string) => void;
};

export const useChatStore = create<ChatStore>((set) => ({
  messages: [
    {
      role: "bot",
      text: "안녕하세요 👋\n궁금하신 점이 있으신가요?\n아래 버튼을 눌러주세요",
      time: getCurrentTime(),
    },
  ],
  addMessage: (msg) =>
    set((state) => ({
      messages: [...state.messages, msg],
    })),
  resetMessages: () =>
    set(() => ({
      messages: [],
    })),

  addBotResponse: (text: string) => {
    const now = getCurrentTime();

    set((state) => ({
      messages: [...state.messages, { role: "bot", text: "...", time: now }],
    }));

    setTimeout(() => {
      set((state) => {
        const updated = [...state.messages];
        updated[updated.length - 1] = {
          role: "bot",
          text,
          time: now,
        };
        return { messages: updated };
      });
    }, 800);
  },
}));

function getCurrentTime(): string {
  const now = new Date();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const period = hours < 12 ? "오전" : "오후";
  const formattedHour = hours > 12 ? hours - 12 : hours;

  return `${period} ${formattedHour}:${minutes}`;
}
