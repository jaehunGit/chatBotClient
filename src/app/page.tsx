"use client";

import React from "react";
import ChatLayout from "@/components/ChatLayout";
import ChatMessage from "@/components/ChatMessage";
import ChatOptions from "@/components/ChatOptions";
import IntroduceCard from "@/components/IntroduceCard";
import CareerCard from "@/components/CareerCard";
import SkillsCard from "@/components/SkillsCard";
import { useChatStore, Message } from "@/store/ChatStore";

export default function Page() {
  const messages = useChatStore((s) => s.messages);

  return (
    <ChatLayout>
      {messages.map((msg: Message, i: number) => {
        if (
          msg.text === "..." &&
          (msg.type === "text" || msg.type === "card")
        ) {
          return <ChatMessage key={i} message="..." time={msg.time} />;
        }

        if (msg.type === "card") {
          switch (msg.title) {
            case "Introduce":
              return <IntroduceCard key={i} time={msg.time} />;
            case "Career":
              return <CareerCard key={i} time={msg.time} />;
            case "Skills":
              return <SkillsCard key={i} time={msg.time} />;
          }
        }

        return (
          <ChatMessage
            key={i}
            message={msg.text}
            time={msg.time}
            isUser={msg.role === "user"}
          />
        );
      })}

      <ChatOptions />
    </ChatLayout>
  );
}
