/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Shield, Sparkles, Heart, Library, CheckCircle, Lightbulb } from "lucide-react";

interface PageMetodologiaProps {
  onNavigate: (page: string) => void;
}

export default function PageMetodologia({ onNavigate }: PageMetodologiaProps) {
  const pillars = [
    {
      icon: Shield,
      title: "Procesos personalizados",
      desc: "No creemos en soluciones iguales para todos. Cada perro es único, por lo que cada proceso es adaptado de manera individual a su ritmo, personalidad y necesidades biológicas."
    },
    {
      icon: Sparkles,
      title: "Educación para la familia",
      desc: "La educación de un perro también es la educación de su familia. Por eso te acompañamos y te brindamos herramientas prácticas para que aprendas junto a él."
    },
    {
      icon: Heart,
      title: "Bienestar animal",
      desc: "El bienestar animal es nuestro principio fundamental. Respetamos sus necesidades físicas, mentales y emocionales durante todo el proceso."
    },
    {
      icon: Library,
      title: "Psicología canina",
      desc: "Basamos nuestra metodología en la ciencia del aprendizaje y la psicología canina, evitando el castigo y fomentando la motivación y la confianza."
    },
    {
      icon: CheckCircle,
      title: "Aprendizaje respetuoso",
      desc: "Diseñamos entornos seguros donde tu perro puede aprender de manera respetuosa, libre de miedo, dolor o intimidación."
    },
    {
      icon: Lightbulb,
      title: "Desarrollo de habilidades",
      desc: "Fomentamos la toma de decisiones, la autonomía, la socialización saludable y el desarrollo de habilidades que duran para toda la vida."
    }
  ];

  return (
    <div className="w-full bg-[#0A0A0C] min-h-screen relative py-12 px-4" id="page-metodologia">
      {/* SECCIÓN 1: INTRO */}
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        <span className="text-xs font-mono text-[#F277B0] tracking-widest uppercase font-semibold block mb-2">
          Cómo Trabajamos
        </span>
        <h1 className="font-display text-3xl sm:text-4xl md:text-[42px] text-white font-extrabold leading-tight mb-8">
          Cada perro aprende de una manera diferente. Por eso cada proceso también debe ser diferente.
        </h1>
        <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          No creemos en el adiestramiento que busca simplemente forzar obediencias o inhibir conductas para calmar al tutor en 5 minutos. Nuestra metodología se enfoca en modificar la emoción que origina el comportamiento de tu perro, ayudándole a comprender lo que esperamos de él y brindándole las herramientas necesarias para gestionar sus emociones de forma correcta. No buscamos perros perfectos; buscamos perros felices y familias tranquilas.
        </p>
      </section>

      {/* SECCIÓN 2: LOS 6 PILARES */}
      <section className="bg-[#121214] border-t border-b border-white/5 py-24 px-4 rounded-[40px] md:rounded-[80px] mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl text-white font-extrabold leading-tight">
              Los 6 pilares de nuestra metodología
            </h2>
            <div className="w-16 h-1 bg-[#F277B0] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={idx}
                  className="organic-card p-8 flex flex-col items-start hover:shadow-2xl transition-all hover:border-[#94E07B]/20"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#94E07B]/10 text-[#94E07B] flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-400 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: FRASE DESTACADA */}
      <section className="max-w-6xl mx-auto bg-gradient-to-br from-[#060D07] via-[#0E1F0F] to-[#060D07] border border-[#94E07B]/10 py-20 px-6 rounded-[40px] text-center mb-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <p className="font-serif italic text-2xl sm:text-3xl text-white leading-relaxed max-w-3xl">
            “No creemos en soluciones rápidas. Creemos en procesos que transforman vidas, fortalecen vínculos y dejan aprendizajes para toda la vida.”
          </p>
          <button
            onClick={() => onNavigate("agenda")}
            className="mt-10 bg-[#94E07B] hover:bg-[#94E07B]/95 text-[#0A0A0C] font-display font-black text-xs tracking-wider uppercase px-10 py-4.5 rounded-full transition-all shadow-lg shadow-[#94E07B]/20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Quiero comenzar el cambio
          </button>
        </div>
      </section>
    </div>
  );
}
