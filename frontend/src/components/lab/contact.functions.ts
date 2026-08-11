import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

type ContactData = {
  name: string;
  email: string;
  message: string;
};

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator((data: ContactData) => {
    if (!data.name.trim()) {
      throw new Error("Name is required.");
    }

    if (!data.email.trim()) {
      throw new Error("Email is required.");
    }

    if (!data.message.trim()) {
      throw new Error("Message is required.");
    }

    return {
      name: data.name.trim(),
      email: data.email.trim(),
      message: data.message.trim(),
    };
  })
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not configured.");
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Kanishka Labs <onboarding@resend.dev>",
      to: ["kanishkagarg0410@gmail.com"],
      replyTo: data.email,
      subject: `New transmission from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Kanishka Labs Contact</h2>

          <p>
            <strong>Name:</strong> ${escapeHtml(data.name)}
          </p>

          <p>
            <strong>Email:</strong> ${escapeHtml(data.email)}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${escapeHtml(data.message).replace(/\n/g, "<br />")}
          </p>

          <hr />

          <p style="color: #666;">
            Sent from the Kanishka Labs contact terminal.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error("Failed to transmit message.");
    }

    return {
      success: true,
    };
  });

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}