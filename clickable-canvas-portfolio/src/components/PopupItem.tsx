import React from "react";

type Position = { top?: string; left?: string; right?: string; bottom?: string; transform?: boolean };

interface PopupItemProps {
  label: string;
  src: string;
  alt: string;
  position: Position; // percentage-based positioning within relative container
  width?: string; // e.g., "18%"
  height?: string; // e.g., "18%"
  description?: string;
  onOpenPopup: () => void; // callback to open popup
  disableDropShadow?: boolean; // disable drop shadow on the image
  zIndex?: number; // custom z-index for layering
  disabled?: boolean; // make the component non-clickable
  flip?: boolean; // horizontally flip the image
}

const PopupItem: React.FC<PopupItemProps> = ({ 
  label, 
  src, 
  alt, 
  position, 
  width = "18%", 
  height = "18%", 
  description, 
  onOpenPopup, 
  disableDropShadow = false, 
  zIndex, 
  disabled = false,
  flip = false
}) => {
  const handleClick = () => {
    if (!disabled) {
      onOpenPopup();
    }
  };

  return (
    <div
      className="absolute"
      style={{ 
        top: position.top, 
        left: position.left, 
        right: position.right, 
        bottom: position.bottom, 
        width, 
        height, 
        transform: position.transform ? "translate(-50%, -50%)" : "none",
        zIndex: zIndex
      }}
    >
      <button
        type="button"
        aria-label={label}
        onClick={handleClick}
        disabled={disabled}
        className={`w-full h-full group relative block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 transition-transform duration-200 flex items-center justify-center ${
          disabled 
            ? 'cursor-default' 
            : 'hover:scale-[1.02]'
        }`}
        title={disabled ? undefined : description}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`w-full h-auto select-none pointer-events-none ${!disableDropShadow ? 'drop-shadow-md' : ''} ${flip ? 'scale-x-[-1]' : ''}`}
        />
        <span className="sr-only">{label}</span>
      </button>
    </div>
  );
};

export default PopupItem;
