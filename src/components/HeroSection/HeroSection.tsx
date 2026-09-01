import { useState, useRef, useEffect } from "react";
import { Code2, MapPin, ChevronDown, Download, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import "./HeroSection.css";

// Importación de assets
import nest from "../../assets/icons/nest.png";
import react from "../../assets/icons/react.png";
import ts from "../../assets/icons/ts.png";
import node from "../../assets/icons/node.png";
import js from "../../assets/icons/js.png";
import redis from "../../assets/icons/redis.png";
import postgres from "../../assets/icons/postgres.png";
import prisma from "../../assets/icons/prisma.png";
import jwt from "../../assets/icons/jwt.png";
import git from "../../assets/icons/git.png";
import swagger from "../../assets/icons/swagger.png";
import bcrypt from "../../assets/icons/bcrypt.png";
import docker from "../../assets/icons/docker.png";
import resend from "../../assets/icons/resend.png";
import cloudinary from "../../assets/icons/clodinary.png";

const STACK_ITEMS = [
  { name: "NestJS", icon: nest },
  { name: "React / Vite", icon: react },
  { name: "TypeScript", icon: ts },
  { name: "Node.js", icon: node },
  { name: "JavaScript", icon: js },
  { name: "PostgreSQL", icon: postgres },
  { name: "Prisma ORM", icon: prisma },
  { name: "Redis", icon: redis },
  { name: "JWT / Cookies", icon: jwt },
  { name: "Swagger", icon: swagger },
  { name: "Docker", icon: docker },
  { name: "Git / GitHub", icon: git },
  { name: "Resend", icon: resend },
  { name: "Cloudinary", icon: cloudinary },
  { name: "bcrypt", icon: bcrypt },
];

const KEY_CONCEPTS = [
  "Decoradores personalizados",
  "DTOs",
  "Guards",
  "Roles y Permisos",
  "OAuth2 (Google)",
  "2FA",
  "Refresh Tokens",
  "APIs RESTful (BFF)",
  "Código limpio y modular",
  "IA para acelerar desarrollo",
  "Diseño Responsive",
  "Despliegue completo",
];

export function HeroSection() {
  const [isCvMenuOpen, setIsCvMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar el menú al hacer clic fuera del componente
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCvMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="hero-main-wrapper">
      <div className="hero-top-grid">
        <div className="hero-content">
          <header className="hero-header">
            <span className="greeting">Hola, soy</span>
            <h1>Fernando García</h1>
            <p className="role-title">Desarrollador de Software Fullstack</p>
            <p className="focus-subtitle">
              Foco en Backend - Ecosistema Node.js
            </p>
          </header>

          <p className="hero-bio">
            Diseño y construyo aplicaciones web escalables,
            seguras y optimizadas para producción. Como
            desarrollador Fullstack con foco en backend, 
            cubro todo el ciclo de vida del software: 
            desde la arquitectura de base de datos y diseño
            de APIs hasta la interfaz de usuario y el despliegue.
          </p>

          <div className="buttons-container">
            <a href="#projects" className="btn-primary">
              Ver Proyectos
            </a>

            {/* Contenedor del Dropdown de CV */}
            <div className="cv-dropdown-wrapper" ref={dropdownRef}>
              <button
                type="button"
                className="btn-secondary dropdown-trigger"
                onClick={() => setIsCvMenuOpen((prev) => !prev)}
                aria-expanded={isCvMenuOpen}
              >
                <span>Descargar CV</span>
                <ChevronDown
                  size={16}
                  className={`chevron-icon ${isCvMenuOpen ? "open" : ""}`}
                />
              </button>

              <a href="#contact" className="btn-contact">
                <Mail size={18} />
                <span style={{ marginLeft: "5px" }}>Contacto</span>
              </a>

              {isCvMenuOpen && (
                <div className="cv-dropdown-menu">
                  <a
                    href="/cv/CV-Fernando-Garcia-es.pdf"
                    download="CV-Fernando-Garcia-es.pdf"
                    className="dropdown-item"
                    onClick={() => setIsCvMenuOpen(false)}
                  >
                    <Download size={14} />
                    <span>Español</span>
                  </a>
                  <a
                    href="/cv/CV-Fernando-Garcia-en.pdf"
                    download="CV-Fernando-Garcia-en.pdf"
                    className="dropdown-item"
                    onClick={() => setIsCvMenuOpen(false)}
                  >
                    <Download size={14} />
                    <span>Inglés</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="datas-footer">
            <p className="location-tag">
              <MapPin size={20} />
              <span>Misiones, Argentina</span>
            </p>
            <a
              href="https://github.com/Fernando2025A"
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              <SiGithub size={20} />
              <span>github.com/Fernando2025A</span>
            </a>
          </div>
        </div>

        <aside className="stack-container">
          <h2 className="stack-title">
            <Code2 size={24} className="stack-header-icon" />
            Tecnologías y herramientas
          </h2>

          <ul className="stack-grid">
            {STACK_ITEMS.map((item) => (
              <li key={item.name} className="stack-item">
                <img src={item.icon} alt={`${item.name} logo`} />
                <span>{item.name}</span>
              </li>
            ))}
          </ul>

          <div className="tech-tags-wrapper">
            {KEY_CONCEPTS.map((concept, index) => (
              <span key={concept} className="tech-tag-item">
                {concept}
                {index < KEY_CONCEPTS.length - 1 && (
                  <span className="tag-separator">•</span>
                )}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
