/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, ChevronUp, MessagesSquare } from "lucide-react";

interface PageFaqsProps {
  onNavigate: (page: string) => void;
}

export default function PageFaqs({ onNavigate }: PageFaqsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Qué es Shipeki y cuál es su enfoque?",
      a: "Shipeki es un centro especializado en educación canina respetuosa, etología clínica y psicología canina. Nuestro enfoque se basa en comprender el porqué del comportamiento de tu perro, trabajando en el origen emocional de sus conductas en lugar de simplemente castigar o reprimir los síntomas. No utilizamos métodos aversivos, collares de castigo ni fuerza física; educamos con ciencia, empatía y respeto absoluto."
    },
    {
      q: "¿A partir de qué edad puede comenzar mi perro su proceso?",
      a: "¡Desde cachorros! De hecho, la etapa de cachorro (entre las 8 semanas y los 6 meses) es el momento ideal para prevenir problemas de conducta, socializar de manera segura y construir bases sólidas de comunicación y convivencia. Sin embargo, no hay límite de edad: los perros adultos y senior también pueden aprender y beneficiarse enormemente de nuestros procesos de educación y rehabilitación."
    },
    {
      q: "¿Cómo funciona la valoración inicial?",
      a: "La valoración inicial es el primer paso de cualquier proceso en Shipeki. Es una sesión personalizada donde Shirley o uno de nuestros etólogos especialistas analiza el comportamiento de tu perro, su entorno, su salud fisiológica y la dinámica familiar. A partir de este diagnóstico profundo, diseñamos un plan de trabajo a medida adaptado a vuestras necesidades y objetivos específicos."
    },
    {
      q: "¿Los planes de trabajo se realizan a domicilio o en vuestro centro?",
      a: "Ofrecemos ambas modalidades según las necesidades de cada caso. Para problemas de convivencia en el hogar (como ansiedad por separación, reactividad dentro de casa o límites en el entorno familiar), las sesiones a domicilio son ideales. Para procesos de socialización, estimulación cognitiva o trabajo con otros perros, contamos con espacios campestres especialmente diseñados para garantizar un aprendizaje seguro, controlado y enriquecedor."
    },
    {
      q: "¿La familia también participa en el proceso?",
      a: "Sí, de manera obligatoria y activa. Nosotros no educamos perros de forma aislada; empoderamos a los tutores para que adquieran herramientas de liderazgo empático. Si la familia no se compromete en casa, los cambios del perro no perdurarán."
    },
    {
      q: "¿Cuánto tiempo tarda un proceso educativo?",
      a: "Depende del mapa biológico y conductual del perro. Los programas preventivos o de obediencia cooperativa suelen tomar de 4 a 6 semanas, mientras que las modificaciones de conducta profundas pueden durar entre 8 y 12 semanas."
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="w-full bg-[#FCFAF6] min-h-screen py-20 px-4 animate-fade-in" id="page-faqs">
      {/* SECCIÓN 1: INTRO */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="text-xs font-mono text-[#F277B0] tracking-widest uppercase font-semibold block mb-2">
          Soporte y Respuestas
        </span>
        <h1 className="font-eczar text-3xl sm:text-4xl md:text-[42px] text-gray-900 font-semibold leading-tight">
          Resolvemos tus dudas
        </h1>
        <div className="w-16 h-1 bg-[#F277B0] mx-auto mt-4" />
      </div>

      {/* SECCIÓN 2: ACCORDION LIST */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-3xl border transition-all overflow-hidden ${
                isOpen
                  ? "bg-[#F3A0BE] border-[#F277B0] shadow-sm text-white"
                  : "bg-white border-gray-100 hover:border-pink-200 text-gray-900 shadow-xs"
              }`}
            >
              {/* Trigger */}
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-6 sm:p-8 flex justify-between items-center gap-4 focus:outline-none"
              >
                <span className="font-eczar font-semibold text-base sm:text-lg leading-snug">
                  {faq.q}
                </span>
                <span className="shrink-0 rounded-full w-8 h-8 flex items-center justify-center bg-white/20">
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-current" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#F277B0]" />
                  )}
                </span>
              </button>

              {/* Collapsible Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-8 sm:px-8 sm:pb-8 border-t border-white/10 pt-4">
                      <p className="font-eczar text-sm sm:text-base leading-relaxed text-white/95 font-light">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* FLOATING CTA IN FAQS */}
      <div className="max-w-xl mx-auto text-center mt-16 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <div className="w-12 h-12 rounded-full bg-pink-50 text-[#F277B0] flex items-center justify-center mx-auto mb-4">
          <MessagesSquare className="w-5 h-5" />
        </div>
        <h4 className="font-eczar font-semibold text-lg text-gray-900">¿Tienes otra pregunta?</h4>
        <p className="text-xs text-gray-500 font-sans mt-1">Nuestros etólogos y especialistas están disponibles para charlar.</p>
        <button
          onClick={() => onNavigate("agenda")}
          className="mt-6 bg-[#94E07B] hover:bg-[#94E07B]/95 text-white font-sans font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-full transition-all inline-block shadow-sm"
        >
          Consultar por WhatsApp
        </button>
      </div>
    </div>
  );
}
