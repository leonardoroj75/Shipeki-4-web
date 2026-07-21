/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Quote, Sparkles, Star, Heart, Eye, ArrowRight } from "lucide-react";

interface PageCasosExitoProps {
  onNavigate: (page: string) => void;
}

export default function PageCasosExito({ onNavigate }: PageCasosExitoProps) {
  // We will feature 4 Polaroid stories that can be flipped (interactive gamification!)
  const polaroids = [
    {
      id: "rocky",
      name: "Rocky & Familia",
      breed: "Pastor Alemán (2 años)",
      problem: "Reactividad severa con agresión",
      quote: "Carlos & Sofía",
      testimonial: "“Pasamos de la pesadilla y el aislamiento social absoluto a disfrutar de paseos mágicos al atardecer en el parque. Rocky por fin confía en nuestra guía y se siente en calma.”",
      img: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80&w=600",
      color: "bg-[#5CB4FC]" // Tertiary blue for trust!
    },
    {
      id: "luna",
      name: "Luna & Mariana",
      breed: "Golden Retriever (18 meses)",
      problem: "Ansiedad grave por separación",
      quote: "Mariana R.",
      testimonial: "“Recuperamos nuestra libertad de salir sin culpa. Luna conoció la paz de saber esperar relajada masticando su Pekisnax en su colchoneta. ¡Increíble cambio!”",
      img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&q=80&w=600",
      color: "bg-[#5CB4FC]"
    },
    {
      id: "coco",
      name: "Coco & Mateo",
      breed: "Mestizo rescatado (3 años)",
      problem: "Fobia severa a ruidos urbanos",
      quote: "Mateo G.",
      testimonial: "“Ver a Coco correr feliz por el pasto sin temblar es un milagro que le debemos enteramente al enfoque paciente, clínico y amoroso de Shipeki.”",
      img: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?auto=format&fit=crop&q=80&w=600",
      color: "bg-[#5CB4FC]"
    },
    {
      id: "mila",
      name: "Mila & Familia",
      breed: "Border Collie (9 meses)",
      problem: "Hiperactividad y obsesión",
      quote: "Sonia & Andrés",
      testimonial: "“Mila andaba sobreestimulada y estresada. En la Universidad Canina canalizaron su mente brillante. Ahora es una perra reflexiva, alegre y sumamente feliz.”",
      img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600",
      color: "bg-[#5CB4FC]"
    }
  ];

  return (
    <div className="w-full bg-[#0A0A0C] text-white min-h-screen py-20 px-4" id="page-casos-exito">
      
      {/* SECCIÓN 1: INTRO */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="text-xs font-mono text-[#F277B0] tracking-widest uppercase font-semibold block mb-2">
          Capítulo V: La Prueba Social
        </span>
        <h1 className="font-display text-3xl sm:text-4xl md:text-[44px] text-white font-extrabold leading-tight">
          Historias que inspiran
        </h1>
        <p className="font-sans text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mt-4">
          La ciencia del comportamiento y el amor empático rinden frutos reales. Pasa el mouse (o haz tap en móvil) sobre las Polaroids para descubrir el testimonio de cada familia.
        </p>
        <div className="w-16 h-1 bg-[#94E07B] mx-auto mt-6" />
      </div>

      {/* SECCIÓN 2: GAMIFIED POLAROID INTERACTIVE CAROUSEL / GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 mb-24">
        {polaroids.map((p, idx) => (
          <div
            key={p.id}
            className="polaroid-container w-full aspect-[3/4] max-w-[290px] mx-auto cursor-pointer"
          >
            {/* Inner Flip Card */}
            <div className="polaroid-inner w-full h-full relative duration-700 transform-3d select-none">
              
              {/* FRONT OF POLAROID */}
              <div className="polaroid-front absolute inset-0 bg-[#121214] p-4 pb-8 rounded-lg shadow-2xl border border-white/5 flex flex-col justify-between">
                {/* Decorative Tape */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-white/5 border-l border-r border-dashed border-white/10 backdrop-blur-xs rotate-[-2deg] pointer-events-none z-10 shadow-xs" />

                {/* Photo Area with a light analog grain feel */}
                <div className="w-full aspect-square overflow-hidden bg-[#1A1A1E] rounded-xs border border-white/5">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Polaroid Text Area */}
                <div className="pt-4 text-center">
                  <h4 className="font-display font-bold text-base text-white leading-tight mb-1">
                    {p.name}
                  </h4>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                    {p.breed}
                  </span>
                  
                  {/* Interactive hint */}
                  <div className="mt-4 flex items-center justify-center gap-1.5 text-[9px] font-sans font-bold text-[#94E07B] uppercase tracking-wider">
                    <Eye className="w-3.5 h-3.5" /> Voltear foto
                  </div>
                </div>
              </div>

              {/* BACK OF POLAROID (The Testimonial inside Blue theme for Trust) */}
              <div className="polaroid-back absolute inset-0 bg-[#1E1E22] text-white p-6 sm:p-8 rounded-lg shadow-2xl border border-white/10 flex flex-col justify-between">
                
                {/* Top Quotes */}
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-8 h-8 opacity-25 text-white" />
                    <div className="flex gap-1 text-[#94E07B]">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#F277B0] block mb-2 font-bold">
                    Dificultad: {p.problem}
                  </span>
                  
                  <p className="font-serif italic text-sm leading-relaxed text-gray-300">
                    {p.testimonial}
                  </p>
                </div>

                {/* Bottom Author */}
                <div className="border-t border-white/10 pt-4 text-left">
                  <span className="text-[9px] font-mono tracking-wider uppercase block text-gray-500">Familia Canina de:</span>
                  <span className="font-display font-black text-xs text-white block mt-0.5">{p.quote}</span>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>

      {/* SECCIÓN 3: ACCENT BANNER ABOUT CLINICAL CREDENTIALS */}
      <section className="bg-[#121214] border border-white/5 rounded-[40px] p-8 sm:p-12 max-w-5xl mx-auto mb-20 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-3">
            <span className="text-xs font-mono text-[#94E07B] tracking-widest uppercase font-bold block">
              Certificación de Confianza
            </span>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
              Especialidad en Modificación de Conductas Clínicas
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-sans">
              Shirley y todo nuestro equipo están certificados por asociaciones internacionales de etología clínica y psicología animal respetuosa, garantizando el más alto estándar de rigor científico.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-start md:justify-end">
            <button
              onClick={() => onNavigate("shirley")}
              className="bg-transparent hover:bg-white/5 text-[#94E07B] border-2 border-[#94E07B]/40 hover:border-[#94E07B] font-display font-black text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer"
            >
              Conoce las credenciales
            </button>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: CALL TO ACTION */}
      <section className="max-w-4xl mx-auto bg-gradient-to-r from-[#0C120D] to-[#121214] p-8 sm:p-12 rounded-[40px] border border-white/5 shadow-2xl text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <h2 className="font-display text-2xl sm:text-3xl font-black mb-4">
          ¿Listo para que tu perro sea nuestra próxima historia de éxito?
        </h2>
        <p className="text-sm text-gray-300 font-sans max-w-2xl mx-auto mb-8">
          La verdadera paz mental comienza con un diagnóstico asertivo. Reserva una valoración de lujo o realiza nuestro Test Etológico para vincular los resultados.
        </p>
        <button
          onClick={() => onNavigate("agenda")}
          className="bg-[#94E07B] hover:bg-[#94E07B]/90 text-[#0A0A0C] font-display font-black text-xs uppercase tracking-wider px-9 py-4.5 rounded-full transition-all shadow-lg shadow-[#94E07B]/20 cursor-pointer hover:scale-105 active:scale-95"
        >
          Agenda tu valoración inicial →
        </button>
      </section>

    </div>
  );
}
