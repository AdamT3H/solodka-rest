"use client";

export default function Success() {
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
          Ваш запит отримано.<br />
          Збережіть рахунок від WayForPay — він підтверджує оплату.<br />
          Ми зв'яжемось з вами найближчим часом.
        </p>

        <div style={{
          width: 40,
          height: 1,
          background: "#634638",
          opacity: 0.2,
          margin: "0 auto 40px",
        }} />

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