import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1A1A1A",
          borderRadius: "14px",
        }}
      >
        <div style={{ fontSize: 30, color: "#C8102E", fontWeight: 800 }}>FC</div>
      </div>
    ),
    { ...size }
  );
}
