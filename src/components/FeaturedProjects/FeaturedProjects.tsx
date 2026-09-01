import { Folder, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import "./FeaturedProjects.css";

// Reutilizamos los mismos assets de íconos
import nest from "../../assets/icons/nest.png";
import react from "../../assets/icons/react.png";
import postgres from "../../assets/icons/postgres.png";
import prisma from "../../assets/icons/prisma.png";
import redis from "../../assets/icons/redis.png";
import resend from "../../assets/icons/resend.png";
import cloudinary from "../../assets/icons/clodinary.png";
import swagger from "../../assets/icons/swagger.png";
import jwt from "../../assets/icons/jwt.png";

// Imágenes/Mockups de las previews
import puntoGestionImg from "../../assets/projects/punto-gestion.png";
import ecommerceImg from "../../assets/projects/ecommerce.png";
import cosmosImg from "../../assets/projects/cosmos.png";

interface Project {
  id: number;
  title: string;
  badgeText: string;
  badgeType: "production" | "development";
  description: string;
  image: string;
  demoUrl: string;
  githubFrontend: string;
  githubBackend: string;
  techIcons: { name: string; icon: string }[];
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Punto Gestión",
    badgeText: "En producción",
    badgeType: "production",
    description:
      "SaaS de gestión para negocios. Control de inventarios, clientes, empleados y permisos. Suscripciones, Google OAuth, 2FA, emails, almacenamiento de imágenes y más.",
    image: puntoGestionImg,
    demoUrl: "https://puntogestion.online",
    githubFrontend: "https://github.com/Fernando2025A/punto-gestion-frontend",
    githubBackend: "https://github.com/Fernando2025A/punto-gestion-backend",
    techIcons: [
      { name: "NestJS", icon: nest },
      { name: "React", icon: react },
      { name: "PostgreSQL", icon: postgres },
      { name: "Prisma", icon: prisma },
      { name: "Resend", icon: resend },
      { name: "Cloudinary", icon: cloudinary },
      { name: "Swagger", icon: swagger },
      { name: "JSON Web Tokens/cookies", icon: jwt },
    ],
  },
  {
    id: 2,
    title: "Simulador de eCommerce",
    badgeText: "En producción",
    badgeType: "production",
    description:
      "Juego basado en productos con comportamientos, carrito, generador de dinero progresivo, inventario y tiempos de envío. Experiencia gamificada completa.",
    image: ecommerceImg,
    demoUrl: "https://shop.ferdevx.com",
    githubFrontend: "https://github.com/Fernando2025A/shop-frontend",
    githubBackend: "https://github.com/Fernando2025A/shop-backend",
    techIcons: [
      { name: "NestJS", icon: nest },
      { name: "React", icon: react },
      { name: "PostgreSQL", icon: postgres },
      { name: "Prisma", icon: prisma },
      { name: "JSON Web Tokens/cookies", icon: jwt },
    ],
  },
  {
    id: 3,
    title: "Explorador del Cosmos",
    badgeText: "En desarrollo",
    badgeType: "development",
    description:
      "Catálogo de información astronómica, preguntas diarias, interacción de usuarios, noticias, posts y progresión de aventurero. Demo visual con datos mock.",
    image: cosmosImg,
    demoUrl: "https://cosmos.ferdevx.com",
    githubFrontend: "https://github.com/Fernando2025A/cosmos-explorer-frontend",
    githubBackend: "https://github.com/Fernando2025A/cosmos-explorer",
    techIcons: [
      { name: "NestJS", icon: nest },
      { name: "React", icon: react },
      { name: "PostgreSQL", icon: postgres },
      { name: "Redis", icon: redis },
      { name: "Resend", icon: resend },
      { name: "Prisma", icon: prisma },
      { name: "JSON Web Tokens/cookies", icon: jwt },
    ],
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="projects-section-wrapper">
      {/* Cabecera de la sección */}
      <div className="projects-header">
        <div className="section-title">
          <div className="folder-icon-bg">
            <Folder size={22} color="#ffffff" />
          </div>
          <h2>Proyectos destacados</h2>
        </div>

        <a
          href="https://github.com/Fernando2025A"
          target="_blank"
          rel="noreferrer"
          className="btn-all-github"
        >
          <SiGithub size={18} />
          <span>Ver todos en GitHub</span>
        </a>
      </div>

      {/* Grid de Tarjetas de Proyectos */}
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <article key={project.id} className="project-card">
            {/* Imagen / Preview */}
            <div className="project-image-container">
              <img
                src={project.image}
                alt={`Preview de ${project.title}`}
                className="project-image"
              />
            </div>

            {/* Contenido principal */}
            <div className="project-content">
              <div className="project-card-header">
                <h3 className="project-title">
                  {project.id}. {project.title}
                </h3>
                <span className={`status-badge ${project.badgeType}`}>
                  {project.badgeText}
                </span>
              </div>

              <p className="project-description">{project.description}</p>

              {/* Lista de íconos del stack */}
              <div className="project-tech-icons">
                {project.techIcons.map((tech) => (
                  <img
                    key={tech.name}
                    src={tech.icon}
                    alt={tech.name}
                    title={tech.name}
                    className="tech-icon-img"
                  />
                ))}
              </div>

              {/* Link al sitio en vivo */}
              <div className="demo-link-container">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="demo-url-link"
                >
                  <span>{project.demoUrl.replace("https://", "")}</span>
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Botones de repositorios Backend / Frontend */}
              <div className="code-links-container">
                <a
                  href={project.githubFrontend}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-code"
                >
                  <SiGithub size={14} />
                  <span>Ver Frontend</span>
                </a>
                <a
                  href={project.githubBackend}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-code"
                >
                  <SiGithub size={14} />
                  <span>Ver Backend</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}