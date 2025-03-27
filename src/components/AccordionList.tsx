
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionListProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

const AccordionList: React.FC<AccordionListProps> = ({
  items,
  allowMultiple = false,
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  if (!items.length) return null;

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        
        return (
          <div
            key={item.id}
            className="border border-border rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className={cn(
                "flex w-full items-center justify-between px-4 py-4 text-left font-medium transition-colors",
                isOpen 
                  ? "bg-muted" 
                  : "hover:bg-muted/50"
              )}
            >
              <span>{item.title}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-muted-foreground transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isOpen 
                  ? "max-h-96 animate-accordion-down" 
                  : "max-h-0 animate-accordion-up"
              )}
            >
              <div className="px-4 py-3 text-sm">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccordionList;
