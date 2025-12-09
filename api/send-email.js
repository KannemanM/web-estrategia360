export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Sólo POST permitido" });
  }

  try {
    const { nombre, email, tel, mensaje, website } = req.body;

    // Honeypot anti-spam
    if (website) {
      return res.status(400).json({ error: "Spam detectado" });
    }

    if (!nombre || !email || !mensaje) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    const html = `
      <h2>Nuevo mensaje desde la web</h2>
      <p><b>Nombre:</b> ${nombre}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Teléfono:</b> ${tel}</p>
      <p><b>Mensaje:</b><br>${mensaje.replace(/\n/g, "<br>")}</p>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Estrategia 360<onboarding@resend.dev>",
        to: [
          "estrategia360consulting@gmail.com",
          "cardettimatias@gmail.com",         
        ],
        bcc: ["martin.kanneman@gmail.com"],
        subject: "Nuevo mensaje de Estrategia 360",
        html: html
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(data);
      return res.status(500).json({ error: "Error enviando el email" });
    }

    return res.status(200).json({ ok: true });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error del servidor" });
  }
}
