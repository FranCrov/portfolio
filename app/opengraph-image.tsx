import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#101827",
          color: "#f4f6fb",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "80px",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#7c3aed",
            borderRadius: "999px",
            display: "flex",
            height: "18px",
            marginBottom: "36px",
            width: "120px",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: "0.16em",
            opacity: 0.72,
            textTransform: "uppercase",
          }}
        >
          {site.analystTitle}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 104,
            fontWeight: 800,
            letterSpacing: "0.02em",
            lineHeight: 1,
            marginTop: 20,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 38,
            marginTop: 26,
            opacity: 0.9,
          }}
        >
          {site.role}
        </div>
        <div
          style={{
            alignItems: "center",
            borderTop: "1px solid rgba(244,246,251,0.22)",
            display: "flex",
            fontSize: 26,
            gap: 16,
            marginTop: 56,
            opacity: 0.72,
            paddingTop: 32,
          }}
        >
          <span>{site.brandName}</span>
          <span style={{ opacity: 0.5 }}>/</span>
          <span>Portfolio</span>
        </div>
      </div>
    ),
    size,
  );
}