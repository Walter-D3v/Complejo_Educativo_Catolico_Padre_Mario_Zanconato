"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Modal from "./Modal";
import { Fascinate } from "next/font/google";



export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const [openModal, setOpenModal ] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
    });

    if (res.ok) {
        setOpenModal(true);
        setFormData({ name: "", email: "", message: "" });
    } else {
        alert("Error al enviar el mensaje ❌");
    }
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
        <Button type="submit" className="w-full sm:w-auto bg-institutional-navy hover:bg-institutional-mustard hover:text-institutional-navy text-white font-bold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-lg">
            Enviar
            </Button>
        {openModal && <Modal closeModal={setOpenModal} />}

        </form>
        
    );
    
}
