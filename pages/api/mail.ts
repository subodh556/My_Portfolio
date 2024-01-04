import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SENDER, // Replace with your Gmail email address
      pass: process.env.YOUR_PASS, // Replace with your Gmail password or app-specific password
    },
  });
  
type Data = {
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === "POST") {
        const {
            name,
            email,
            message,
        }: { name: string; email: string; message: string } = req.body;
        const msg = `Name: ${name}\r\n Email: ${email}\r\n Message: ${message}`;
        
        try {
            await transporter.sendMail({
                from: process.env.SENDER as string, // Replace with your email
                to: process.env.YOUR_EMAIL as string, // Replace with your email
                subject:  `${name.toUpperCase()} sent you a message from Portfolio`,
                text: msg,
              });
            res.status(200).json({ message: "Your message was sent successfully." });
        } catch (err) {
            res.status(500).json({ message: `There was an error sending your message. ${err}` });
        }
    }
}