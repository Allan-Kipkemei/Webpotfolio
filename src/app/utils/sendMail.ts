'use server'

import nodemailer from "nodemailer";
import { toast } from "sonner";

export async function sendMail(name: string, email: string, message: string) {
    try {
        let mailTransporter = nodemailer.createTransport({
            host: "smtp.zoho.com",
            port: 465,
            secure: true, // use SSL
            auth: {
                user: process.env.ZOHO_USER,
                pass: process.env.ZOHO_PASS,
            },
            tls: {
                rejectUnauthorized: false, // do not fail on invalid certs
            },
        });

        const mailDetails = {
            from: process.env.ZOHO_USER,
            to: "alvin@studioaurora.io",
            subject: `Contact form submission from ${name}`,
            text: `From: ${name} <${email}>\n\n${message}`,
            replyTo: email, // Add this line wahh
        };

        if (!mailDetails) {
            console.error("Invalid email type");
            return;
        }

        try {
            await mailTransporter.sendMail(mailDetails);
            return { success: true, message: "Email sent successfully" };
        } catch (error) {
            console.error("Error occurred while sending email:", error);
            return { success: false, message: "Error occurred while sending email" };
        }

    } catch (error) {
        console.error("Error occurred while sending email:", error);
    }
}
