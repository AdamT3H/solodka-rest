"use client";

import { useEffect } from "react";

export default function DownloadPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const a = document.createElement("a");
      a.href = "/guide.pdf";
      a.download = "guide.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#fdf8f3",
      fontFamily: "Georgia, serif",
      padding: "40px 20px",
    }}>
      <div style={{
        background: "#fff",
        borderRadius: "2px",
        maxWidth: "520px",
        width: "100%",
        padding: "60px 50px",
        textAlign: "center",
        boxShadow: "0 2px 4px rgba(99,70,56,0.06), 0 20px 60px rgba(99,70,56,0.12)",
      }}>
        <div style={{
          width: 72,
          height: 72,
          borderRadius: "50%",
          background: "#f0e8de",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 32px",
        }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
            stroke="#634638" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 18 l7 7 l13 -13" />
          </svg>
        </div>

        <p style={{
          fontSize: 11,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "#634638",
          opacity: 0.6,
          marginBottom: 14,
          fontFamily: "sans-serif",
        }}>
          Оплата успішна
        </p>

        <h1 style={{
          fontSize: 38,
          fontWeight: 400,
          lineHeight: 1.2,
          color: "#2a1f1a",
          marginBottom: 18,
        }}>
          Дякуємо за{" "}
          <em style={{ color: "#634638" }}>довіру!</em>
        </h1>

        <p style={{
          fontSize: 15,
          fontWeight: 300,
          lineHeight: 1.7,
          color: "#7a6a62",
          marginBottom: 40,
          fontFamily: "sans-serif",
        }}>
          Ваш гайд вже завантажується.<br />
          Збережіть його — він завжди буде під рукою.
        </p>

        <div style={{
          width: 40,
          height: 1,
          background: "#634638",
          opacity: 0.2,
          margin: "0 auto 40px",
        }} />

        <a
          href="/guide.pdf"
          download="guide.pdf"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "#634638",
            color: "#fdf8f3",
            fontFamily: "sans-serif",
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: 1,
            textTransform: "uppercase",
            padding: "16px 32px",
            borderRadius: 2,
            textDecoration: "none",
            boxShadow: "0 4px 20px rgba(99,70,56,0.25)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Завантажити гайд
        </a>

        <p style={{
          marginTop: 20,
          fontSize: 12,
          color: "#7a6a62",
          opacity: 0.6,
          fontFamily: "sans-serif",
        }}>
          Якщо завантаження не почалось — натисніть кнопку вище
        </p>

        <div style={{
          marginTop: 40,
          paddingTop: 28,
          borderTop: "1px solid rgba(99,70,56,0.1)",
          fontSize: 13,
          color: "#7a6a62",
          fontFamily: "sans-serif",
        }}>
          Повернутись на{" "}
          <a href="https://www.solodka-rest.com" style={{ color: "#634638", fontWeight: 500 }}>
            solodka-rest.com
          </a>
        </div>
      </div>
    </main>
  );
}