/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Smile, Users, GraduationCap, MessageCircleHeart, Activity, Sparkles, CheckCircle } from "lucide-react";

interface PageQueEsShipekiProps {
  onNavigate: (page: string) => void;
}

export default function PageQueEsShipeki({ onNavigate }: PageQueEsShipekiProps) {
  // Active dimension for the interactive selector (0 to 4)
  const [activeDimIdx, setActiveDimIdx] = useState<number>(0);

  const approaches = [
    {
      icon: Smile,
      title: "Bienestar integral",
      desc: "Abordamos la salud física, cognitiva, emocional, comunicativa y social de manera unificada para garantizar estabilidad perdurable."
    },
    {
      icon: Users,
      title: "Familias multiespecie",
      desc: "Construimos entendimiento mutuo y apego saludable para que la relación con tu perro sea de confianza y no de sometimiento."
    },
    {
      icon: GraduationCap,
      title: "Etología científica",
      desc: "Estudiamos el porqué real del comportamiento canino basándonos en la ciencia moderna del aprendizaje, libre de mitos o modas."
    },
    {
      icon: MessageCircleHeart,
      title: "Respeto absoluto",
      desc: "Prohibimos radicalmente el uso de la fuerza, collares de castigo, miedo o intimidación física. Educamos con amor y empatía."
    }
  ];

  const dimensions = [
    {
      num: "01",
      icon: Smile,
      title: "Emocional",
      desc: "Analizamos y regulamos estados de estrés, miedo, frustración y ansiedad. Trabajamos en el origen emocional de la conducta para ayudar a tu perro a encontrar un estado de calma y seguridad.",
      color: "border-[#F277B0] bg-[#F277B0]/10 text-[#F277B0]",
      angle: 0 // Top-center
    },
    {
      num: "02",
      icon: Users,
      title: "Social",
      desc: "Desarrollamos habilidades para una convivencia armónica con otros perros, personas y diferentes entornos, fomentando la autoconfianza y la resiliencia social.",
      color: "border-[#94E07B] bg-[#94E07B]/10 text-[#94E07B]",
      angle: 72
    },
    {
      num: "03",
      icon: GraduationCap,
      title: "Cognitiva",
      desc: "Estimulamos la mente de tu perro mediante la resolución de problemas, el aprendizaje asociativo y el desarrollo de habilidades que potencian su autonomía y capacidad de adaptación.",
      color: "border-[#5CB4FC] bg-[#5CB4FC]/10 text-[#5CB4FC]",
      angle: 144
    },
    {
      num: "04",
      icon: MessageCircleHeart,
      title: "Comunicativa",
      desc: "Te enseñamos a interpretar el lenguaje corporal y las señales de calma de tu perro, facilitando una comunicación clara, bidireccional y sin malentendidos.",
      color: "border-[#F277B0] bg-[#F277B0]/10 text-[#F277B0]",
      angle: 216
    },
    {
      num: "05",
      icon: Activity,
      title: "Fisiológica",
      desc: "Cuidamos el bienestar físico, el descanso adecuado, la propiocepción y las necesidades biológicas de tu perro, reconociendo que un cuerpo sano es la base de una mente equilibrada.",
      color: "border-[#94E07B] bg-[#94E07B]/10 text-[#94E07B]",
      angle: 288
    }
  ];

  return (
    <div className="w-full bg-[#0A0A0C] min-h-screen" id="page-que-es-shipeki">
      
      {/* SECCIÓN 1: INTRODUCCIÓN GENERAL */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <span className="text-xs font-mono text-[#F277B0] tracking-widest uppercase font-semibold block mb-2">
          Capítulo III: La Solución
        </span>
        <h1 className="font-display text-3xl sm:text-4xl md:text-[46px] text-white font-extrabold leading-tight">
          Entender es el primer paso para educar
        </h1>
        <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mt-6 text-left md:text-center">
          En Shipeki no creemos en el adiestramiento tradicional basado en la dominación, la fuerza o la repetición mecánica de órdenes. Creemos que cada perro es un ser único, con emociones, necesidades y una forma particular de comunicarse. Por eso nos especializamos en educación canina respetuosa y etología clínica, un enfoque científico que busca comprender el origen de cada comportamiento para resolverlo desde la raíz. Nuestro propósito es guiarte para que puedas construir una relación basada en la confianza mutua, el respeto y la armonía, transformando la convivencia en casa para siempre.
        </p>
        <div className="w-16 h-1 bg-[#94E07B] mx-auto mt-6" />
      </section>

      {/* SECCIÓN 2: INTERACTIVE PENTAGON (DAS 5 DIMENSIONES) */}
      <section className="py-24 bg-[#121214] rounded-t-[40px] md:rounded-t-[80px] border-t border-white/5 px-6 overflow-hidden relative">
        {/* Glow behind radar */}
        <div className="absolute top-[30%] left-[30%] w-[350px] h-[350px] bg-[#94E07B]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[25%] w-[300px] h-[300px] bg-[#F277B0]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-[#94E07B] tracking-widest uppercase font-bold block mb-2">
              Tecnología y Ciencia Etológica
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-extrabold leading-tight">
              Las 5 Dimensiones del Ser Canino
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 font-sans max-w-xl mx-auto mt-2">
              Haz clic o pasa el mouse en los vértices del radar etológico interactivo para profundizar en cada una de las dimensiones que analizamos de tu perro.
            </p>
            <div className="w-12 h-1 bg-[#F277B0] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (Interactivo Pentagon Visual) - 12 cols total */}
            <div className="lg:col-span-6 flex justify-center items-center relative py-12">
              
              {/* Outer Circular Rings representing the Radar */}
              <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-dashed border-[#F277B0]/20 animate-[spin_60s_linear_infinite]" />
              <div className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-full border border-white/5" />
              <div className="absolute w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] rounded-full border border-white/5" />

              {/* The Interactive Central Radar Wheel / Pentagon Shape */}
              <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] flex items-center justify-center">
                
                {/* SVG connection lines representing the radar structure */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 340 340">
                  {/* Outer Pentagon Lines */}
                  <polygon
                    points="170,30 293,120 246,265 94,265 47,120"
                    fill="rgba(148, 224, 123, 0.02)"
                    stroke="rgba(242, 119, 176, 0.3)"
                    strokeWidth="2"
                  />
                  {/* Internal polygon linking values dynamically or representing connection */}
                  <polygon
                    points="170,50 268,120 231,235 109,235 72,120"
                    fill="rgba(242, 119, 176, 0.04)"
                    stroke="rgba(148, 224, 123, 0.3)"
                    strokeWidth="1.5"
                  />
                  {/* Center lines to points */}
                  <line x1="170" y1="170" x2="170" y2="30" stroke="rgba(242, 119, 176, 0.15)" strokeWidth="1" />
                  <line x1="170" y1="170" x2="293" y2="120" stroke="rgba(242, 119, 176, 0.15)" strokeWidth="1" />
                  <line x1="170" y1="170" x2="246" y2="265" stroke="rgba(242, 119, 176, 0.15)" strokeWidth="1" />
                  <line x1="170" y1="170" x2="94" y2="265" stroke="rgba(242, 119, 176, 0.15)" strokeWidth="1" />
                  <line x1="170" y1="170" x2="47" y2="120" stroke="rgba(242, 119, 176, 0.15)" strokeWidth="1" />
                </svg>

                {/* Central CORE Node representing understanding */}
                <div className="absolute w-20 h-20 rounded-full bg-[#1A1A1E] border-2 border-[#94E07B] shadow-2xl flex flex-col items-center justify-center text-center z-10 p-1 select-none">
                  <span className="font-display font-black text-[#94E07B] text-[10px] tracking-widest uppercase leading-none block mb-0.5">COMPRENDER</span>
                  <span className="text-[7px] font-mono font-semibold text-gray-500 uppercase tracking-widest leading-none block">SHIPEKI</span>
                </div>

                {/* Vertices (Clickable Buttons) */}
                {/* 1. Emocional (Top Center) */}
                <button
                  onClick={() => setActiveDimIdx(0)}
                  className={`absolute -top-3 left-[142px] sm:left-[172px] transform -translate-x-1/2 w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer shadow-xl ${
                    activeDimIdx === 0
                      ? "border-[#F277B0] bg-[#F277B0] text-black scale-110"
                      : "border-white/10 bg-[#1A1A1E] text-[#F277B0] hover:border-[#F277B0] hover:bg-[#202024]"
                  }`}
                >
                  <Smile className="w-6 h-6" />
                </button>

                {/* 2. Social (Top Right) */}
                <button
                  onClick={() => setActiveDimIdx(1)}
                  className={`absolute top-[102px] right-[-14px] w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer shadow-xl ${
                    activeDimIdx === 1
                      ? "border-[#94E07B] bg-[#94E07B] text-black scale-110"
                      : "border-white/10 bg-[#1A1A1E] text-[#94E07B] hover:border-[#94E07B] hover:bg-[#202024]"
                  }`}
                >
                  <Users className="w-6 h-6" />
                </button>

                {/* 3. Cognitiva (Bottom Right) */}
                <button
                  onClick={() => setActiveDimIdx(2)}
                  className={`absolute bottom-[14px] right-[26px] w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer shadow-xl ${
                    activeDimIdx === 2
                      ? "border-[#5CB4FC] bg-[#5CB4FC] text-black scale-110"
                      : "border-white/10 bg-[#1A1A1E] text-[#5CB4FC] hover:border-[#5CB4FC] hover:bg-[#202024]"
                  }`}
                >
                  <GraduationCap className="w-6 h-6" />
                </button>

                {/* 4. Comunicativa (Bottom Left) */}
                <button
                  onClick={() => setActiveDimIdx(3)}
                  className={`absolute bottom-[14px] left-[26px] w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer shadow-xl ${
                    activeDimIdx === 3
                      ? "border-[#F277B0] bg-[#F277B0] text-black scale-110"
                      : "border-white/10 bg-[#1A1A1E] text-[#F277B0] hover:border-[#F277B0] hover:bg-[#202024]"
                  }`}
                >
                  <MessageCircleHeart className="w-6 h-6" />
                </button>

                {/* 5. Motriz (Top Left) */}
                <button
                  onClick={() => setActiveDimIdx(4)}
                  className={`absolute top-[102px] left-[-14px] w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer shadow-xl ${
                    activeDimIdx === 4
                      ? "border-[#94E07B] bg-[#94E07B] text-black scale-110"
                      : "border-white/10 bg-[#1A1A1E] text-[#94E07B] hover:border-[#94E07B] hover:bg-[#202024]"
                  }`}
                >
                  <Activity className="w-6 h-6" />
                </button>

              </div>
            </div>

            {/* Right Column (Dynamic Description Display Panel) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDimIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#1E1E22] p-8 sm:p-10 rounded-[40px] border border-white/5 shadow-2xl relative"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-3xl font-black text-gray-700">
                      {dimensions[activeDimIdx].num}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold border ${dimensions[activeDimIdx].color.split(" ")[0]} ${dimensions[activeDimIdx].color.split(" ")[1]} ${dimensions[activeDimIdx].color.split(" ")[2]}`}>
                      {React.createElement(dimensions[activeDimIdx].icon, { className: "w-6 h-6" })}
                    </div>
                    <h3 className="font-display font-extrabold text-2xl text-white">
                      Dimensión {dimensions[activeDimIdx].title}
                    </h3>
                  </div>

                  <p className="text-base text-gray-300 font-sans leading-relaxed">
                    {dimensions[activeDimIdx].desc}
                  </p>

                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-mono">
                      Ciencias del Aprendizaje Canino Coherente
                    </span>
                    <button
                      onClick={() => onNavigate("agenda")}
                      className="text-xs font-display font-black text-[#94E07B] hover:text-[#94E07B]/90 flex items-center gap-1 transition-colors uppercase tracking-wider cursor-pointer"
                    >
                      Evaluar esta dimensión →
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Selector Dots representing the radar dots */}
              <div className="flex justify-center gap-3 mt-6">
                {dimensions.map((dim, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveDimIdx(idx)}
                    className={`w-3.5 h-3.5 rounded-full transition-all cursor-pointer ${
                      activeDimIdx === idx ? "bg-[#94E07B] w-8" : "bg-white/10 hover:bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECCIÓN 3: EL ENFOQUE SHIPEKI (4 Tarjetas Orgánicas) */}
      <section className="bg-[#0C120D] py-24 px-6 rounded-b-[40px] md:rounded-b-[80px] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-[#F277B0] tracking-widest uppercase font-semibold block mb-2">
              Nuestro ADN Etológico
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-extrabold leading-tight">
              ¿Por qué somos diferentes?
            </h2>
            <div className="w-16 h-1 bg-[#F277B0] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {approaches.map((appr, idx) => {
              const IconComp = appr.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#121214] p-8 sm:p-10 rounded-[36px] border border-white/5 flex flex-col sm:flex-row gap-6 items-start hover:border-[#94E07B]/30 hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#94E07B]/10 text-[#94E07B] flex items-center justify-center shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-2">
                      {appr.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                      {appr.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECCIÓN 4: CALL TO ACTION */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <p className="font-serif italic text-2xl sm:text-3xl text-[#F277B0] leading-relaxed">
          “No buscamos forzar obediencias para calmar al tutor en 5 minutos; educamos para sembrar equilibrio y bienestar duradero para toda la vida del perro.”
        </p>
        <button
          onClick={() => onNavigate("agenda")}
          className="mt-10 bg-[#94E07B] hover:bg-[#94E07B]/95 text-[#0A0A0C] font-display font-black text-xs tracking-wider uppercase px-10 py-4.5 rounded-full transition-all shadow-lg shadow-[#94E07B]/20 hover:scale-105 active:scale-95 cursor-pointer"
        >
          Agenda tu valoración inicial premium
        </button>
      </section>

    </div>
  );
}
