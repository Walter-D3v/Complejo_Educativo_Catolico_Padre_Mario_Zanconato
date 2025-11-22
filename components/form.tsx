"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    // Aquí podrías integrar con Notion, EmailJS o una API propia
    };

    return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white shadow-md rounded-lg">
        <Input 
        name="name" 
        placeholder="Tu nombre" 
        value={formData.name} 
        onChange={handleChange} 
        required 
        />
        <Input 
        type="email" 
        name="email" 
        placeholder="Tu correo" 
        value={formData.email} 
        onChange={handleChange} 
        required 
        />
        <Textarea 
        name="message" 
        placeholder="Tu mensaje" 
        value={formData.message} 
        onChange={handleChange} 
        required 
        />
        <Button type="submit" className="w-full">Enviar</Button>
    </form>
    );
}
