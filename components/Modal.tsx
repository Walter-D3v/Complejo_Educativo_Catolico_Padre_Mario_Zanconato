import React from "react";
import { Button } from "./ui/button";

function Modal({closeModal}) {
    return (
        <section>
            <div className="animate-fade-in ">
            <h2 className="p-6 m-4 animate-bounce-slow animate-fade-in font-black text-institutional-navy">Mensaje enviado</h2>
            <Button
            className="w-2 p4 sm:w-auto bg-institutional-navy hover:bg-institutional-mustard hover:text-institutional-navy text-white font-bold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-lg "
            onClick={()=>closeModal(false)}> 
                Cerrar
                
            </Button>
        </div>
        </section>
        
    )
}

export default Modal;