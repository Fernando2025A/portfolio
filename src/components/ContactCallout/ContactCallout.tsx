import { Send, Mail } from "lucide-react";
import "./ContactCallout.css";

export function ContactCallout() {
  return (
    <section className="contact-callout-wrapper">
      <div className="contact-callout-card">
        {/* Lado izquierdo: Ícono e información */}
        <div className="contact-info-side">
          <div className="paper-plane-icon-bg">
            <Send size={20} className="plane-icon" />
          </div>

          <div className="contact-text-content">
            <h3 className="contact-title">¿Tienes un proyecto en mente?</h3>
            <p className="contact-subtitle">
              Estoy disponible para nuevas oportunidades y colaboraciones.
            </p>
          </div>
        </div>

        {/* Lado derecho: Botón de contacto */}
        <a
          href="#contact"
          className="btn-contact-callout"
        >
          <Mail size={18} />
          <span>Contáctame</span>
        </a>
      </div>
    </section>
  );
}