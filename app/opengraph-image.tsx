import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Norgesgym | Døgnåpent treningssenter i Moss";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#FFFFFF",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "80px",
      }}
    >
      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: "72px",
          fontWeight: 600,
          color: "#131210",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          lineHeight: 1,
        }}
      >
        NORGESGYM
      </div>
      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: "26px",
          color: "#57544E",
          marginTop: "24px",
        }}
      >
        Døgnåpent treningssenter i Moss
      </div>
    </div>
  );
}
