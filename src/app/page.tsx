"use client";

import ChatLayout from "@/components/ChatLayout";
import ChatMessage from "@/components/ChatMessage";
import ChatOptions from "@/components/ChatOptions";
import { useChatStore } from "@/store/useChatStore";

export default function Page() {
  const messages = useChatStore((state) => state.messages);

  return (
    <ChatLayout>
      {messages.map((msg, index) => (
        <ChatMessage
          key={index}
          message={msg.text}
          time={msg.time}
          isUser={msg.role === "user"}
        />
      ))}
      <ChatOptions />
    </ChatLayout>
  );
}
