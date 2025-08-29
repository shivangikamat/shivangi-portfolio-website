import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type Position = { top: string; left: string };

interface HotspotProps {
  label: string;
  anchor: string; // id of the target section
  position: Position; // percentage based positioning (e.g., { top: "50%", left: "30%" })
  description?: string;
}

const Hotspot: React.FC<HotspotProps> = ({ label, anchor, position, description }) => {
  return (
    <div
      className="absolute"
      style={{ top: position.top, left: position.left, transform: "translate(-50%, -50%)" }}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={`#${anchor}`}
            aria-label={label}
            className="block w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary/80 border border-border shadow-elegant ring-2 ring-primary/30 hover:ring-primary/60 hover:scale-105 transition-transform duration-200 animate-pulse-glow backdrop-blur-md"
          >
            <span className="sr-only">{label}</span>
          </a>
        </TooltipTrigger>
        <TooltipContent side="top">
          <div className="space-y-1">
            <p className="text-sm font-medium">{label}</p>
            {description && (
              <p className="text-xs text-muted-foreground max-w-[180px]">{description}</p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default Hotspot;
