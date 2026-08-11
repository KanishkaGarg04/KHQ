import { createFileRoute } from "@tanstack/react-router";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();

          const { name, email, message } = body;

          if (!name || !email || !message) {
            return new Response(
              JSON.stringify({
                success: false,
                message: "All fields are required.",
              }),
              {
                status: 400,
                headers: {
                  "Content-Type": "application/json",
                },
              },
            );
          }

          const { data, error } = await resend.emails.send({
            from: "Kanishka Labs <onboarding@resend.dev>",
            to: ["kanishkagarg0410@gmail.com"],
            replyTo: email,
            subject: `New Kanishka Labs enquiry from ${name}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto;">
                <h2>New enquiry from Kanishka Labs</h2>

                <p>
                  <strong>Name:</strong> ${name}
                </p>

                <p>
                  <strong>Email:</strong> ${email}
                </p>

                <hr />

                <h3>Message</h3>

                <p style="white-space: pre-wrap;">
                  ${message}
                </p>

                <hr />

                <p style="color: #666; font-size: 12px;">
                  Sent through the Kanishka Labs contact terminal.
                </p>
              </div>
            `,
          });

          if (error) {
            console.error("Resend error:", error);

            return new Response(
              JSON.stringify({
                success: false,
                message: "Unable to send enquiry.",
              }),
              {
                status: 500,
                headers: {
                  "Content-Type": "application/json",
                },
              },
            );
          }

          return new Response(
            JSON.stringify({
              success: true,
              message: "Transmission received successfully.",
              id: data?.id,
            }),
            {
              status: 200,
              headers: {
                "Content-Type": "application/json",
              },
            },
          );
        } catch (error) {
          console.error("Contact API error:", error);

          return new Response(
            JSON.stringify({
              success: false,
              message: "Something went wrong while sending the enquiry.",
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            },
          );
        }
      },
    },
  },
});