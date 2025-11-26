import { NextResponse } from "next/server";
const nodemailer = require('nodemailer');

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // tu propio correo
        subject: `Nuevo mensaje de ${name}`,
        text: `Correo: ${email}\n\nMensaje:\n${message}`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
