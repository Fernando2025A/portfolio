import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import "./ContactForm.css";

// Reemplaza con tus llaves de EmailJS (o usalas desde un archivo .env)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus("idle");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          formRef.current?.reset();
        },
        (error) => {
          console.error("Error al enviar el mensaje:", error);
          setLoading(false);
          setStatus("error");
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
      <h2>Contactar</h2>
      <div className="form-group">
        <label htmlFor="from_name">Nombre</label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          required
          placeholder="Tu nombre o empresa"
        />
      </div>

      <div className="form-group">
        <label htmlFor="from_email">Correo Electrónico</label>
        <input
          type="email"
          id="from_email"
          name="from_email"
          required
          placeholder="tu@email.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="¿En qué te puedo ayudar?"
        />
      </div>

      <button id="contact" type="submit" className="btn-primary btn-submit" disabled={loading}>
        {loading ? (
          <>
            <Loader2 size={16} className="spinner-icon" />
            <span>Enviando...</span>
          </>
        ) : (
          <>
            <Send size={16} />
            <span>Enviar mensaje</span>
          </>
        )}
      </button>

      {status === "success" && (
        <div className="form-feedback success">
          <CheckCircle2 size={18} />
          <span>¡Mensaje enviado con éxito! Te responderé lo antes posible.</span>
        </div>
      )}

      {status === "error" && (
        <div className="form-feedback error">
          <AlertCircle size={18} />
          <span>Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.</span>
        </div>
      )}
    </form>
  );
}