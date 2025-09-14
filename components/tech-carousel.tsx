"use client"

import React from "react";
import * as SiIcons from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

// SVGs personalizados (puedes reemplazar el contenido por el SVG oficial si lo tienes)
const N8nIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 100" fill="currentColor" {...props}>
    <path d="M41.73 83.33V16.67h16.67v66.66H41.73zM0 83.33V16.67h16.67v66.66H0zm62.5 0V16.67h16.67v52.05l50.55-52.05h21.18L91.67 59.58l61.34 23.75h-21.7l-50.6-19.6v20.4H62.5zm145.83 0V16.67h16.67v66.66h-16.67zm-41.66 0V16.67h16.66v66.66h-16.66zm62.5 0V16.67h16.67v66.66h-16.67z" />
  </svg>
);

const PlaywrightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 200 100" fill="currentColor" {...props}>
      <path
    d="M60.13 0C60.13 0 54.43 0 54.43 0C24.43 0 0 24.43 0 54.43C0 54.43 0 119.98 0 119.98L60.13 59.85L60.13 0Z"/>
  </svg>
);

const GeminiIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
    <circle cx="16" cy="16" r="16" fill="#4285F4" />
    <text x="16" y="21" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Arial">Gemini</text>
  </svg>
);

const QdrantIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
    <circle cx="16" cy="16" r="16" fill="#6E4AFF" />
    <text x="16" y="21" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Arial">Qdrant</text>
  </svg>
);

const technologies = [
  { icon: "SiTypescript", name: "TypeScript" },
  { icon: "SiOpenai", name: "OpenAI" },
  { icon: "SiHuggingface", name: "HuggingFace" },
  { icon: "SiPython", name: "Python" },
  { icon: "SiReact", name: "React" },
  { icon: "SiNextdotjs", name: "Next.js" },
  { icon: "FaNodeJs", name: "Node.js" },
  { icon: "SiRedis", name: "Redis" },
  { icon: "SiTailwindcss", name: "Tailwind" },
  { icon: "SiShadcnui", name: "shadcn/ui" },
  { icon: "SiGraphql", name: "GraphQL" },
  { icon: "SiApollographql", name: "Apollo" },
  { icon: "SiPostgresql", name: "PostgreSQL" },
  { icon: "SiMongodb", name: "MongoDB" },
  { icon: "SiDocker", name: "Docker" },
  { icon: "SiKubernetes", name: "Kubernetes" },
  { icon: "SiGooglecloud", name: "Google Cloud" },
  { icon: "SiTensorflow", name: "TensorFlow" },
  { icon: "SiPytorch", name: "PyTorch" },
  { icon: "SiLangchain", name: "LangChain" },
  { icon: "SiVercel", name: "Vercel" },
  { icon: "SiFirebase", name: "Firebase" },
  { icon: "SiFigma", name: "Figma" },
  { icon: "SiZoho", name: "Zoho Mail" }, 
];

// Mapea todos los íconos
const iconMap: Record<string, React.ComponentType<any>> = {
  ...SiIcons,
  FaNodeJs,
  N8nIcon,
  QdrantIcon,
  GeminiIcon,
  PlaywrightIcon,
};

const TechCarousel = () => {
  // Duplicamos para efecto loop
  const extendedTechnologies = [...technologies, ...technologies];

  return (
    <div className="relative w-full overflow-hidden bg-black py-4">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
      </div>
      <div className="relative z-10 w-full overflow-hidden">
        <div className="flex gap-8 animate-carousel">
          {extendedTechnologies.map((tech, index) => {
            const IconComponent = iconMap[tech.icon];
            return (
              <div
                key={index}
                className="flex-shrink-0 w-36 h-24 flex flex-col items-center justify-center text-gray-400 hover:text-orange-400 transition-colors duration-300"
              >
                {IconComponent && <IconComponent className="w-8 h-8" />}
                <span className="mt-2 text-sm">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        @keyframes carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-carousel {
          width: max-content;
          animation: carousel 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TechCarousel;