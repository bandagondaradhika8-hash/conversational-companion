import { Bot } from "lucide-react";

export const TypingIndicator = () => {
  return (
    <div className="flex gap-3 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shadow-elegant">
        <Bot className="w-5 h-5 text-white" />
      </div>
      <div className="bg-chat-ai text-chat-ai-foreground rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm border border-border">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
          <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
          <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
};
