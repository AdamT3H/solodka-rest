import nodemailer from "nodemailer";

export async function POST(req) {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
    });

    const interestMap = {
        "owner-consultation": "Консультація для власника / керівника",
        "system-work": "Системна робота з закладом",
        "staff-consultation": "Консультація для працівників",
        "service-guide": "Гайд по сервісу"
    };

    const interestText = interestMap[data.interest] || data.interest;

    try {
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: "Новий запит з сайту",
          html: `
            <h2>Новий запит</h2>
            <p><b>Ім'я:</b> ${data.name}</p>
            <p><b>Контакт:</b> ${data.contact}</p>
            <p><b>Місто:</b> ${data.city}</p>
            <p><b>Формат:</b> ${interestText}</p>
            <p><b>Ситуація:</b> ${data.situation}</p>
            <p><b>Лінк:</b> ${data.link}</p>
          `,
        });
    
        return Response.json({ success: true });
      } catch (error) {
        return Response.json({ success: false, error });
    }
}