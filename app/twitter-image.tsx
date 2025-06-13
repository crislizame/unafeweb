import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Una Fé - Banda de Adoración Cristiana"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  try {
    return new ImageResponse(
      <div
        style={{
          background: "linear-gradient(135deg, #ea580c 0%, #dc2626 50%, #ec4899 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: "bold",
            marginBottom: 20,
            textAlign: "center",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          Una Fé
        </div>
        <div
          style={{
            fontSize: 32,
            textAlign: "center",
            opacity: 0.9,
            maxWidth: 800,
            lineHeight: 1.2,
          }}
        >
          Banda de Adoración Cristiana
        </div>
        <div
          style={{
            fontSize: 24,
            textAlign: "center",
            opacity: 0.8,
            marginTop: 20,
            maxWidth: 900,
          }}
        >
          Adoración que enciende el corazón
        </div>
      </div>,
      {
        ...size,
      },
    )
  } catch (e) {
    console.log(`Error generating Twitter image: ${e.message}`)
    return new Response(`Error generating Twitter image`, {
      status: 500,
    })
  }
}
