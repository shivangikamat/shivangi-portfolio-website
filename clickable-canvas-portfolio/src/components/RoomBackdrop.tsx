import React from "react";

interface RoomBackdropProps {
  floorColor?: string; // omit for a wall-only scene
  floorHeight?: string;
  skirtingColor?: string;
  glowColor?: string;
  glowPosition?: string; // centre of the soft light on the wall, e.g. "50% 38%"
  stripeOpacity?: number;
}

// Wall and floor dressing shared by every scene. Sits behind all scene content and
// extends past the fixed canvas so wide screens have no bare strips at the sides.
const RoomBackdrop: React.FC<RoomBackdropProps> = ({
  floorColor,
  floorHeight = "32%",
  skirtingColor = "#FBECE4",
  glowColor = "rgba(255,255,255,0.30)",
  glowPosition = "50% 38%",
  stripeOpacity = 0.09,
}) => {
  const span = { left: "-100%", width: "300%" };

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: -1 }} aria-hidden="true">
      {/* Wallpaper: soft stripes with a glow */}
      <div
        className="absolute top-0"
        style={{
          ...span,
          height: floorColor ? `calc(100% - ${floorHeight})` : "100%",
          backgroundImage: [
            `radial-gradient(ellipse 16% 75% at ${glowPosition}, ${glowColor}, transparent 72%)`,
            `repeating-linear-gradient(90deg, rgba(255,255,255,${stripeOpacity}) 0 36px, rgba(255,255,255,0) 36px 72px)`,
          ].join(", "),
        }}
      />

      {floorColor && (
        <>
          {/* Floor, shaded where it meets the wall and towards the front */}
          <div
            className="absolute bottom-0"
            style={{
              ...span,
              height: floorHeight,
              backgroundColor: floorColor,
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.14), rgba(0,0,0,0) 16%, rgba(0,0,0,0) 62%, rgba(0,0,0,0.14))",
            }}
          />

          {/* Skirting board */}
          <div
            className="absolute"
            style={{
              ...span,
              bottom: floorHeight,
              height: "1.3%",
              backgroundColor: skirtingColor,
              boxShadow: "0 3px 6px rgba(0,0,0,0.18)",
            }}
          />
        </>
      )}
    </div>
  );
};

export default RoomBackdrop;
