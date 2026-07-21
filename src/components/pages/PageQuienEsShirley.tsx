/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Quote, Sparkles, GraduationCap, Heart, Library } from "lucide-react";

interface PageQuienEsShirleyProps {
  onNavigate: (page: string) => void;
}

export default function PageQuienEsShirley({ onNavigate }: PageQuienEsShirleyProps) {
  return (
    <div className="w-full bg-[#0A0A0C] text-white min-h-screen relative" id="page-quien-es-shirley">
      {/* SECCIÓN 1: HERO CON FOTO (50/50 Layout) */}
      <section className="flex flex-col lg:flex-row min-h-[600px] items-stretch overflow-hidden">
        {/* Left Side: 50% Image */}
        <div className="lg:w-1/2 relative min-h-[350px] lg:min-h-auto">
          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800"
            alt="Shirley con Perla y Kiara"
            className="w-full h-full object-cover object-center absolute inset-0"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Right Side: 50% Text Content */}
        <div className="lg:w-1/2 bg-[#121214] border-l border-white/5 text-white p-8 sm:p-12 md:p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F277B0]/10 text-[#F277B0] border border-[#F277B0]/20 text-[11px] font-mono tracking-widest uppercase font-semibold mb-6 w-fit"
          >
            <Sparkles className="w-3.5 h-3.5" /> Fundadora de Shipeki
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl text-white font-extrabold leading-tight mb-6"
          >
            Shirley, fundadora de Shipeki
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed font-light"
          >
            Apasionada por el bienestar animal, educadora canina y etóloga clínica. Con años de experiencia ayudando a cientos de familias a recuperar la tranquilidad en casa, Shirley fundó Shipeki con una misión clara: transformar la educación canina a través del respeto, la ciencia y la empatía. Su enfoque combina el rigor científico de la etología clínica con una profunda sensibilidad humana, entendiendo que cada perro y cada familia tienen una historia única que merece ser escuchada y respetada.
          </motion.p>
        </div>
      </section>

      {/* SECCIÓN 2: HISTORIA COMPLETA */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story Column */}
          <div className="lg:col-span-8 space-y-8 text-gray-300 font-sans text-base sm:text-lg leading-relaxed font-light">
            <h2 className="font-display font-extrabold text-3xl text-white">
              Nuestra Historia: Cómo nació Shipeki
            </h2>
            <div className="w-16 h-1 bg-[#F277B0] mb-8" />

            <p>
              La historia de Shirley en la educación canina comenzó con la llegada de <strong>Perla y Kiara</strong>, dos perras que transformaron su vida por completo. Al enfrentarse a los desafíos cotidianos de su crianza, Shirley descubrió la falta de alternativas respetuosas en el adiestramiento tradicional, lo que la llevó a formarse profesionalmente en etología y psicología canina. Al ver el impacto positivo de una educación sin violencia en sus propias perras, decidió que debía compartir este enfoque con el mundo.
            </p>

            <div className="p-8 bg-[#1E1E22] rounded-3xl border-l-4 border-[#F277B0] my-8">
              <Quote className="w-8 h-8 text-[#F277B0] mb-3 opacity-60" />
              <p className="font-display text-xl text-[#F277B0] italic leading-relaxed font-bold">
                “Descubrí que la unión de la psicología humana y animal es el único puente real para resolver los problemas de comportamiento en casa. No educamos perros, educamos familias multiespecie.”
              </p>
            </div>

            <p>
              Así nació <strong>Shipeki</strong>, un proyecto que rinde homenaje a sus grandes maestras de cuatro patas (Shirley + Perla + Kiara) y que hoy es un referente de bienestar para cientos de familias caninas. Nuestro centro etológico ofrece un espacio de lujo donde las familias no reciben órdenes mecánicas, sino una reestructuración de su vínculo afectivo basada en el respeto, la ciencia y la empatía mutua.
            </p>
          </div>

          {/* Sidebar Achievements */}
          <div className="lg:col-span-4 bg-[#121214] p-8 rounded-3xl border border-white/5 shadow-2xl space-y-6">
            <h3 className="font-display font-bold text-xl text-white border-b border-white/5 pb-4">
              Credenciales y Filosofía
            </h3>

            <div className="flex gap-4 items-start">
              <GraduationCap className="w-6 h-6 text-[#F277B0] shrink-0 mt-1" />
              <div>
                <h4 className="font-display font-bold text-sm text-white">Etóloga Clínica Certificada</h4>
                <p className="text-xs text-gray-400 font-sans leading-relaxed mt-1">Especialización de posgrado en psicología del aprendizaje y neurobiología del comportamiento canino.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Library className="w-6 h-6 text-[#94E07B] shrink-0 mt-1" />
              <div>
                <h4 className="font-display font-bold text-sm text-white">Psicología Humana y Sistémica</h4>
                <p className="text-xs text-gray-400 font-sans leading-relaxed mt-1">Enfoque centrado en la familia como núcleo del bienestar emocional del perro.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Heart className="w-6 h-6 text-[#F277B0] shrink-0 mt-1" />
              <div>
                <h4 className="font-display font-bold text-sm text-white">Educación de Vanguardia</h4>
                <p className="text-xs text-gray-400 font-sans leading-relaxed mt-1">Pionera en el desarrollo de "profeludos" como coterapeutas autoritativos.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <button
                onClick={() => onNavigate("agenda")}
                className="w-full bg-[#94E07B] hover:bg-[#94E07B]/95 text-[#0A0A0C] font-display font-black text-xs tracking-wider uppercase py-4.5 rounded-full shadow-lg shadow-[#94E07B]/20 transition-all text-center hover:scale-105 active:scale-95 cursor-pointer"
              >
                Habla con Shirley hoy
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
