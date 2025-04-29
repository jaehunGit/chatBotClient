"use client";

import { create } from "zustand";

type BaseMessage = {
  role: "user" | "bot";
  text: string;
  time: string;
};

export type Message =
  | (BaseMessage & {
      type?: "text";
      title?: never;
    })
  | (BaseMessage & {
      type: "card";
      title: string;
    });

type ChatStore = {
  messages: Message[];
  addMessage: (msg: Message) => void;
  resetMessages: () => void;
  addBotResponse: (text: string) => void;
  addBotCardResponse: (title: string, text: string) => void;
};

function getCurrentTime(): string {
  const now = new Date();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const period = hours < 12 ? "오전" : "오후";
  const formattedHour = hours > 12 ? hours - 12 : hours;
  return `${period} ${formattedHour}:${minutes}`;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [
    {
      role: "bot",
      text: `안녕하세요 👋\n궁금하신 점이 있으신가요?\n\n아래 버튼을 눌러주세요.`,
      time: getCurrentTime(),
      type: "text",
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

  addBotResponse: (text) => {
    const now = getCurrentTime();
    set((state) => ({
      messages: [
        ...state.messages,
        { role: "bot", text: "...", time: now, type: "text" },
      ],
    }));
    setTimeout(() => {
      set((state) => {
        const msgs = [...state.messages];
        msgs[msgs.length - 1] = { role: "bot", text, time: now, type: "text" };
        return { messages: msgs };
      });
    }, 800);
  },

  addBotCardResponse: (title, text) => {
    const now = getCurrentTime();
    set((state) => ({
      messages: [
        ...state.messages,
        { role: "bot", title, text: "...", time: now, type: "card" },
      ],
    }));
    setTimeout(() => {
      set((state) => {
        const msgs = [...state.messages];
        msgs[msgs.length - 1] = {
          role: "bot",
          title,
          text,
          time: now,
          type: "card",
        };
        return { messages: msgs };
      });
    }, 800);
  },
}));
