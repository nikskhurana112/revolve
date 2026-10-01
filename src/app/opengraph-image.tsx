import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — Vancouver massage therapy, acupuncture and counselling`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/images/logo-mark.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#0f2e33",
        color: "#ffffff",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -180,
          top: -180,
          width: 720,
          height: 720,
          borderRadius: 9999,
          border: "2px solid rgba(133,192,201,0.25)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: -80,
          top: -80,
          width: 520,
          height: 520,
          borderRadius: 9999,
          border: "2px solid rgba(200,220,116,0.35)",
          display: "flex",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <img src={logoSrc} width={132} height={100} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 44, fontWeight: 600 }}>Revolve Therapy</div>
          <div style={{ fontSize: 20, letterSpacing: 6, color: "#bddfe3" }}>HEALTH SERVICES</div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontSize: 68, lineHeight: 1.05, maxWidth: 900, display: "flex", flexWrap: "wrap" }}>
          Arrive in discomfort.&nbsp;<span style={{ color: "#d6e596" }}>Leave feeling relieved.</span>
        </div>
        <div style={{ fontSize: 28, color: "#dceef0" }}>
          Massage Therapy · Acupuncture & TCM · Counselling — Vancouver, BC
        </div>
      </div>
    </div>,
    size,
  );
}
