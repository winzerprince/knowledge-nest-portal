
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabbedContentProps {
  tabs: Tab[];
  defaultTab?: string;
}

const TabbedContent: React.FC<TabbedContentProps> = ({
  tabs,
  defaultTab,
}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id || "");

  if (!tabs.length) return null;

  return (
    <div className="w-full">
      <div className="border-b border-border">
        <div className="flex space-x-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-all relative",
                activeTab === tab.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="py-6">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={cn(
              "transition-all duration-300",
              activeTab === tab.id
                ? "animate-fade-in block"
                : "hidden"
            )}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabbedContent;
