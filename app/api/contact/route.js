const rateLimit = new Map();

export async function POST(req) {
    const ip = req.headers.get("x-forwarded-for") || "unknown";

    const now = Date.now();
    const lastRequest = rateLimit.get(ip);
  
    if (lastRequest && now - lastRequest < 60_000) {
      return Response.json({ success: false, error: "Too many requests" });
    }
  
    rateLimit.set(ip, now);
    
    const data = await req.json();
  
    const interestMap = {
      "owner-consultation": "Консультація для власника / керівника",
      "system-work": "Системна робота з закладом",
      "staff-consultation": "Консультація для працівників",
      "service-guide": "Гайд по сервісу"
    };
  
    const interestText = interestMap[data.interest] || data.interest;
  
    const message = `
  🆕 НОВИЙ ЗАПИТ
  
  👤 Ім’я: ${data.name}
  📞 Контакт: ${data.contact}
  🏙 Місто: ${data.city}
  
  📌 Формат: ${interestText}
  
  💬 Ситуація:
  ${data.situation}
  
  🔗 Лінк: ${data.link || "—"}
    `;
  
    try {
      const res = await fetch(
        `https://api.telegram.org/bot${process.env.TG_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: process.env.TG_CHAT_ID,
            text: message,
          }),
        }
      );
  
      const tgData = await res.json();
  
      if (!tgData.ok) {
        throw new Error("Telegram error");
      }
  
      return Response.json({ success: true });
    } catch (error) {
      console.error(error);
      return Response.json({ success: false });
    }
  }