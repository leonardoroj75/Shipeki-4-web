/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Brain, Phone, MessageSquare, Sparkles, CheckCircle } from "lucide-react";
import ShipekiBooking from "../ShipekiBooking";
import ShipekiAssessment from "../ShipekiAssessment";

interface PageAgendaValoracionProps {
  linkedProfile: string | null;
  linkedServices: string[];
  onSelectResult: (title: string, recommendedServices: string[]) => void;
  onClearLink: () => void;
}

export default function PageAgendaValoracion({
  linkedProfile,
  linkedServices,
  onSelectResult,
  onClearLink
}: PageAgendaValoracionProps) {
  // Page state: 'booking' or 'quiz'
  const [activeTab, setActiveTab] = useState<"booking" | "quiz">("booking");

  const handleLinkResult = (title: string, services: string[]) => {
    onSelectResult(title, services);
    setActiveTab("booking"); // Switch back to booking form once linked!
  };

  return (
    <div className="w-full bg-[#0A0A0C] min-h-screen py-16 px-4" id="page-agenda-valoracion">
      
      {/* SECCIÓN 1: INTRO */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="text-xs font-mono text-[#F277B0] tracking-widest uppercase font-semibold block mb-2">
          Capítulo VI: El Compromiso
        </span>
        <h1 className="font-display text-3xl sm:text-4xl md:text-[44px] text-white font-extrabold leading-tight">
          El Primer Paso Hacia la Calma
        </h1>
        <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mt-4">
          Reserva directamente tu sesión de valoración clínica premium con Shirley, o realiza nuestro Test Etológico preliminar para pre-vincular el estado emocional calculado de tu perro a la cita.
        </p>
        <div className="w-16 h-1 bg-[#94E07B] mx-auto mt-6" />
      </div>

      {/* TABS SELECTOR (Pill style, custom rounded) */}
      <div className="max-w-md mx-auto mb-16 flex bg-[#121214] p-2 rounded-full border border-white/5 shadow-2xl">
        <button
          onClick={() => setActiveTab("booking")}
          className={`flex-1 py-4 rounded-full text-xs font-display font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === "booking"
              ? "bg-[#94E07B] text-[#0A0A0C] shadow-md"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <Calendar className="w-4 h-4" /> Formulario de Reserva
        </button>
        <button
          onClick={() => setActiveTab("quiz")}
          className={`flex-1 py-4 rounded-full text-xs font-display font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === "quiz"
              ? "bg-[#F277B0] text-[#0A0A0C] shadow-md"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <Brain className="w-4 h-4" /> Test de Diagnóstico
        </button>
      </div>

      {/* ACTIVE SCREEN CONTENT */}
      <div className="max-w-4xl mx-auto mb-20">
        <AnimatePresence mode="wait">
          {activeTab === "booking" ? (
            <motion.div
              key="booking-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ShipekiBooking
                linkedProfile={linkedProfile}
                linkedServices={linkedServices}
                onClearLink={onClearLink}
              />
            </motion.div>
          ) : (
            <motion.div
              key="quiz-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-[#121214] rounded-[40px] border border-white/5 shadow-2xl p-8 sm:p-10 text-white">
                <div className="mb-8 bg-[#1A1A1E] p-5 rounded-3xl border border-white/5 flex gap-3 items-center text-[#F277B0]">
                  <Sparkles className="w-5 h-5 shrink-0 animate-pulse text-[#F277B0]" />
                  <p className="text-xs sm:text-sm font-sans font-medium text-gray-300">
                    Responde estas sencillas preguntas clínicas. Al finalizar, podrás vincular el diagnóstico inteligente al formulario de reserva de manera 100% automática.
                  </p>
                </div>
                <ShipekiAssessment onSelectResult={handleLinkResult} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* WHATSAPP DIRECT ASSISTANT */}
      <section className="max-w-4xl mx-auto bg-[#0C120D] rounded-[40px] border-2 border-dashed border-[#94E07B]/10 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex gap-4 items-center text-center md:text-left flex-col sm:flex-row">
          <div className="w-14 h-14 rounded-full bg-[#94E07B]/10 text-[#94E07B] flex items-center justify-center shrink-0 mx-auto">
            <MessageSquare className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-white">¿Prefieres conversar directamente por WhatsApp?</h3>
            <p className="text-xs sm:text-sm text-gray-400 font-sans mt-1">Nuestra coordinadora etológica te responderá al instante para reservar de forma asistida.</p>
          </div>
        </div>

        <a
          href="https://wa.me/34600000000"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#94E07B] hover:bg-[#94E07B]/95 text-[#0A0A0C] font-display font-black text-xs tracking-wider uppercase px-8 py-4.5 rounded-full transition-all flex items-center gap-2 shrink-0 shadow-lg shadow-[#94E07B]/20 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Phone className="w-4 h-4 fill-current" /> Hablar con Shirley
        </a>
      </section>

    </div>
  );
}
