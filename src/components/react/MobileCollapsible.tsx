"use client";

import { useState, Children, type ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface MobileCollapsibleProps {
  children: ReactNode;
  mobileLimit: number;
  className?: string;
  mobileClassName?: string;
  desktopClassName?: string;
  fadeColor?: string;
}

export function MobileCollapsible({
  children,
  mobileLimit,
  className = "",
  mobileClassName = "",
  desktopClassName = "",
  fadeColor = "from-cream",
}: MobileCollapsibleProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const childArray = Children.toArray(children);
  const hiddenCount = childArray.length - mobileLimit;

  const visibleChildren = childArray.slice(0, mobileLimit);
  const hiddenChildren = childArray.slice(mobileLimit);

  return (
    <div className="relative">
      {/* Desktop: show all items */}
      <div className={`hidden md:block ${className}`}>
        <div className={desktopClassName}>{children}</div>
      </div>

      {/* Mobile: collapsible with fade */}
      <div className="md:hidden">
        <div className="relative">
          <div className={`${mobileClassName} ${className}`}>
            {visibleChildren}

            {isExpanded && hiddenChildren}
          </div>

          {/* Fade overlay when collapsed */}
          {!isExpanded && hiddenCount > 0 && (
            <div
              className={`absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t ${fadeColor} to-transparent pointer-events-none`}
            />
          )}
        </div>

        {/* Toggle button */}
        {hiddenCount > 0 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 mx-auto mt-3 px-5 py-2 text-sm font-medium text-md-green bg-md-green/10 hover:bg-md-green/20 rounded-full transition-colors"
          >
            {isExpanded ? (
              <>
                Ver menos
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Ver {hiddenCount} más
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
