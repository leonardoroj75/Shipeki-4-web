/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Award, ShieldCheck, Heart } from "lucide-react";

interface PageProfeludosProps {
  onNavigate: (page: string) => void;
}

export default function PageProfeludos({ onNavigate }: PageProfeludosProps) {
  const profeludos = [
    {
      name: "Perla",
      role: "Líder de Regulación y Corrección Social",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=400",
      desc: "Es la líder de la manada y la principal referente de nuestros procesos educativos. Gracias a su equilibrio emocional y excelente comunicación canina, guía, corrige y enseña a otros perros a través de interacciones naturales, promoviendo el autocontrol, el respeto y una convivencia armónica, en especial con cachorros."
    },
    {
      name: "Kiara",
      role: "Fundadora de Seguridad Emocional y Confianza Social",
      image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80&w=400",
      desc: "Kiara representa la esencia de Shipeki. Su presencia transmite calma y seguridad, ayudando a perros inseguros o sensibles a desarrollar confianza durante sus procesos de adaptación, socialización y aprendizaje."
    },
    {
      name: "Max",
      role: "Co-Líder de Orden y Desarrollo Motriz",
      image: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?auto=format&fit=crop&q=80&w=400",
      desc: "Max aporta estructura, energía y estabilidad a la manada. Su función es mantener el equilibrio del grupo, favorecer el desarrollo motriz de los estudiantes y acompañar actividades que fortalecen la coordinación, la confianza y el trabajo en equipo."
    },
    {
      name: "Tobby",
      role: "Facilitador Principal de Socialización",
      image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&q=80&w=400",
      desc: "Especialista en primeros encuentros entre perros. Facilita la integración de nuevos estudiantes, reduce tensiones y favorece relaciones sociales saludables mediante una comunicación clara y equilibrada."
    },
    {
      name: "Mechas",
      role: "Facilitadora de Vinculación Humana",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400",
      desc: "Su afinidad natural con las personas la convierte en un puente entre los perros y sus familias. Participa en procesos de recepción, actividades de intervención y experiencias donde el vínculo humano-perro es protagonista."
    },
    {
      name: "Jacob",
      role: "Supervisor de Protección y Corrección Avanzada",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&q=80&w=400",
      desc: "Es el protector de la manada en situaciones de mayor complejidad. Interviene cuando se requiere apoyo en procesos avanzados de regulación social, aportando seguridad, estabilidad y respaldo al equipo educativo."
    },
    {
      name: "Milo",
      role: "Facilitador Junior de Protección",
      image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&q=80&w=400",
      desc: "Actualmente se encuentra en formación para convertirse en uno de los futuros líderes de la manada. Participa activamente en los procesos educativos fortaleciendo sus habilidades de liderazgo, seguridad y regulación social."
    },
    {
      name: "Nix",
      role: "Facilitadora de Juego, Pastoreo y Comunicación Social",
      image: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?auto=format&fit=crop&q=80&w=400",
      desc: "Con su gran capacidad de comunicación y disposición para el juego, Nix estimula el aprendizaje mediante actividades dinámicas que fortalecen la interacción social, el lenguaje canino y el trabajo cooperativo entre los estudiantes."
    }
  ];

  return (
    <div className="w-full bg-[#0A0A0C] text-white min-h-screen relative" id="page-profeludos">
      {/* SECCIÓN 1: HERO CON OVERLAY SUAVE */}
      <section className="relative h-[480px] flex items-center justify-center overflow-hidden bg-[#0A0A0C]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1200"
            alt="Manada de perros jugando en campo"
            className="w-full h-full object-cover object-center brightness-[0.2]"
            referrerPolicy="no-referrer"
          />
          {/* Overlay suave rosa */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#F277B0]/5 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs font-mono text-[#94E07B] tracking-widest uppercase font-semibold block mb-4">
            Nuestros Coterapeutas Caninos
          </span>
          <h1 className="font-display text-4xl sm:text-5xl text-white font-black leading-tight mb-6">
            Los mejores maestros tienen cuatro patas
          </h1>
          <p className="font-sans text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-light">
            En Shipeki contamos con los "Profeludos", perros educadores especialmente formados para interactuar de manera terapéutica. Su lenguaje, empatía y calma natural logran cambios conductuales que un humano jamás podría replicar por sí solo.
          </p>
        </div>
      </section>

      {/* SECCIÓN 2: TARJETAS DE PROFELUDOS */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl text-white font-black">
            Conoce a la Manada Educadora
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-sans mt-3 max-w-2xl mx-auto">
            Cada uno de nuestros perros cumple un rol especializado dentro de las terapias de socialización y reasociación emocional.
          </p>
          <div className="w-16 h-1 bg-[#F277B0] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {profeludos.map((dog, idx) => (
            <motion.div
              key={dog.name}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-[#121214] rounded-3xl p-8 shadow-2xl border border-white/5 flex flex-col items-center text-center transition-all duration-300 hover:border-white/10 hover:-translate-y-1"
            >
              {/* Circular Photo with Pink Border */}
              <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-4 border-[#F277B0]/80 shadow-lg shadow-[#F277B0]/10 mb-6 shrink-0 relative">
                <img
                  src={dog.image}
                  alt={dog.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-1">
                {dog.name}
              </h3>
              <p className="font-display font-bold text-xs sm:text-sm text-[#F277B0] mb-4 uppercase tracking-wide">
                {dog.role}
              </p>
              <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                {dog.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* METODOLOGÍA DE PROFELUDOS */}
      <section className="bg-[#121214] py-20 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-[#F277B0]/10 text-[#F277B0] border border-[#F277B0]/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white mb-1">Seguridad Absoluta</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">Nuestros profeludos están entrenados para desescalar conflictos de forma inmediata y mantener la paz en todo momento.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-[#94E07B]/10 text-[#94E07B] border border-[#94E07B]/20 flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white mb-1">Empatía Inequívoca</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">Los perros se comunican mediante sutiles señales que escapan al ojo humano. Perla y su equipo leen estas señales al instante.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-[#F277B0]/10 text-[#F277B0] border border-[#F277B0]/20 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white mb-1">Formación Continua</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">Cada perro pasa por un proceso de juego etológico para asegurar que disfruta de su labor de mentor conductual.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
