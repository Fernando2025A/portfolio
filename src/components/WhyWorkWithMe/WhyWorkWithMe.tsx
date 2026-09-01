import { Code2, ShieldCheck, Rocket, Users, Bot } from "lucide-react";
import "./WhyWorkWithMe.css";

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
}

const FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: "Criterio Técnico",
    description:
      "Detecto problemas, propongo soluciones y elijo la mejor tecnología para cada caso.",
    icon: <Code2 size={22} />,
    accentColor: "#a855f7", // Púrpura/Violeta
  },
  {
    id: 2,
    title: "Seguridad Primero",
    description:
      "Aplico buenas prácticas de seguridad en autenticación, autorización y manejo de datos.",
    icon: <ShieldCheck size={22} />,
    accentColor: "#10b981", // Verde
  },
  {
    id: 3,
    title: "Rendimiento",
    description:
      "Código optimizado, uso de caché, consultas eficientes y arquitectura escalable.",
    icon: <Rocket size={22} />,
    accentColor: "#3b82f6", // Azul
  },
  {
    id: 4,
    title: "Organización",
    description:
      "Proyectos estructurados por responsabilidades, modulares y fáciles de mantener.",
    icon: <Users size={22} />,
    accentColor: "#f97316", // Naranja
  },
  {
    id: 5,
    title: "IA como Aliada",
    description:
      "Uso IA para acelerar el desarrollo, investigar y resolver mejor.",
    icon: <Bot size={22} />,
    accentColor: "#c084fc", // Rosado/Violeta claro
  },
];

export function WhyWorkWithMe() {
  return (
    <section className="why-work-wrapper">
      <h2 className="why-work-title">¿Por qué trabajar conmigo?</h2>

      <div className="why-work-card">
        {FEATURES.map((feature, index) => (
          <div key={feature.id} className="feature-column">
            <div className="feature-header">
              <div
                className="feature-icon-wrapper"
                style={{
                  color: feature.accentColor,
                  backgroundColor: `${feature.accentColor}1A`, // 10% opacidad para el fondo
                }}
              >
                {feature.icon}
              </div>
              <h3
                className="feature-item-title"
                style={{ color: feature.accentColor }}
              >
                {feature.title}
              </h3>
            </div>

            <p className="feature-description">{feature.description}</p>

            {/* Separador vertical para PC (no se renderiza en el último item) */}
            {index < FEATURES.length - 1 && (
              <div className="vertical-divider" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}