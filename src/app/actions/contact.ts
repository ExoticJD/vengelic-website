"use server";

import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  website: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    // 1. Basic Validation
    if (!data.name || !data.email) {
      return { success: false, error: "Name and Email are required." };
    }

    // 2. Save to Supabase
    const { error: dbError } = await supabase
      .from("leads")
      .insert([
        {
          name: data.name,
          email: data.email,
          website: data.website || null,
          message: data.message || null,
        },
      ]);

    if (dbError) {
      console.error("Supabase Error:", dbError);
      return { success: false, error: "Failed to save lead to database." };
    }

    // 3. Send Email via Resend
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "julio@vengelic.com";

    const { error: mailError } = await resend.emails.send({
      from: "Vengelic Website <onboarding@resend.dev>",
      to: [recipientEmail],
      subject: `New Lead: ${data.name} from ${data.website || "No Website"}`,
      html: `
        <div style="font-family: serif; color: #432616; padding: 20px;">
          <h2 style="border-bottom: 1px solid #432616; padding-bottom: 10px;">New Consultation Request</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Website:</strong> ${data.website || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${data.message || "No message provided."}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin-top: 20px;" />
          <p style="font-size: 12px; color: #999;">Sent from Vengelic Website</p>
        </div>
      `,
    });

    if (mailError) {
      console.error("Resend Error Details:", JSON.stringify(mailError, null, 2));
      // We return success: true because the lead IS in Supabase, but we warn about the email.
      return { success: true, warning: "Lead saved, but notification email failed. Check server logs." };
    }

    return { success: true };
  } catch (error) {
    console.error("Action Error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}
