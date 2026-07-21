/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, ShieldCheck, Heart, Brain, Award, Users, Smile, Compass, CheckCircle } from "lucide-react";
// @ts-ignore
import heroImage from "../../assets/images/shipeki_hero_banner_1783696515998.jpg";

interface PageHomeProps {
  onNavigate: (page: string) => void;
}

export default function PageHome({ onNavigate }: PageHomeProps) {
  return (
    <div className="w-full bg-[#0A0A0C]" id="page-home">
      
      {/* SECCIÓN 1: HERO (FULL SCREEN & EMBRACING) */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0A0A0C]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Perro feliz en la naturaleza mirando a la cámara con absoluta confianza"
            className="w-full h-full object-cover object-center select-none opacity-60 scale-102 filter contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
          {/* Glowing Radial Circle in Background */}
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-[#94E07B]/10 rounded-full blur-[120px] pointer-events-none z-10" />
          {/* Overlay: Degradado suave de rosa a verde en muy baja opacidad para ambientación */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0C] via-black/60 to-[#94E07B]/10 z-10 pointer-events-none" />
          {/* Dark overlay specifically for text contrast */}
          <div className="absolute inset-0 bg-black/45 z-20 pointer-events-none" />
        </div>

        {/* Content Container with extreme whitespace */}
        <div className="relative z-30 max-w-6xl mx-auto px-6 text-center py-24 flex flex-col items-center">
          
          {/* Sparkly Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-xs font-semibold uppercase tracking-widest mb-8 shadow-md"
          >
            <Sparkles className="w-4 h-4 text-[#94E07B] animate-pulse" /> 
            <span>El Arte de Entender · Centro de Desarrollo</span>
          </motion.div>

          {/* Huge Title (Clamp size style) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-extrabold leading-tight tracking-tight max-w-5xl"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.2rem)" }}
          >
            Tu perro no necesita ser perfecto... necesita ser <span className="text-[#94E07B] relative inline-block">comprendido<span className="absolute bottom-2 left-0 w-full h-[6px] bg-gradient-to-r from-[#94E07B] to-[#F277B0] rounded-full blur-[1px]"></span></span>.
          </motion.h1>

          {/* Soft Body Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-base sm:text-lg md:text-xl text-white/80 mt-8 leading-relaxed max-w-3xl font-sans font-medium"
          >
            Especialistas en educación canina respetuosa, etología clínica y psicología canina.
          </motion.p>

          {/* Action Buttons with requested Green Primary & Border Secondary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
          >
            <button
              onClick={() => onNavigate("agenda")}
              className="w-full sm:w-auto bg-[#94E07B] hover:bg-[#94E07B]/95 text-[#0A0A0C] font-display font-black text-sm uppercase tracking-wider px-10 py-5 rounded-full transition-all shadow-lg shadow-[#94E07B]/30 hover:scale-[1.03] active:scale-[0.97] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>→ Agenda tu valoración</span>
            </button>
            <button
              onClick={() => onNavigate("metodologia")}
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 font-display font-bold text-sm uppercase tracking-wider px-10 py-4.5 rounded-full transition-all flex items-center justify-center cursor-pointer"
            >
              Conoce nuestra metodología
            </button>
          </motion.div>
        </div>

        {/* Bottom Wave decoration representing organic shapes */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#0A0A0C] z-30 pointer-events-none rounded-t-[40px] md:rounded-t-[80px]" />
      </section>

      {/* SECCIÓN 2: TRUST BADGES */}
      <section className="py-10 bg-[#0A0A0C] relative z-30 -mt-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#121214]/60 backdrop-blur-md p-8 rounded-[40px] border border-white/5 shadow-2xl shadow-black/50 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4 text-gray-300 hover:text-[#94E07B] transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-[#94E07B]/10 flex items-center justify-center text-[#94E07B] shrink-0">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#F277B0] uppercase block">01 / Rigor</span>
                <span className="text-sm font-display font-bold text-white">Psicología Canina</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-300 hover:text-[#F277B0] transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-[#F277B0]/10 flex items-center justify-center text-[#F277B0] shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#F277B0] uppercase block">02 / Respeto</span>
                <span className="text-sm font-display font-bold text-white">Bienestar Clínico</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-300 hover:text-[#94E07B] transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-[#94E07B]/10 flex items-center justify-center text-[#94E07B] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#F277B0] uppercase block">03 / Ética</span>
                <span className="text-sm font-display font-bold text-white">Educación Amable</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-300 hover:text-[#5CB4FC] transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-[#5CB4FC]/10 flex items-center justify-center text-[#5CB4FC] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#F277B0] uppercase block">04 / Experiencia</span>
                <span className="text-sm font-display font-bold text-white">Liderazgo Empático</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: CAPÍTULO 1 - BIENVENIDA EMOCIONAL Y FILOSOFÍA */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative">
        {/* Glow Effects */}
        <div className="absolute top-[40%] right-[10%] w-[350px] h-[350px] bg-[#F277B0]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-[#94E07B]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Visual Storytelling */}
          <div className="relative">
            {/* Organic rounded borders block */}
            <div className="relative z-10 overflow-hidden asymmetric-rounded-1 border-4 border-white/15 shadow-2xl aspect-4/3 bg-gray-900">
              <img
                src={heroImage}
                alt="Conexión familiar canina respetuosa"
                className="w-full h-full object-cover select-none transform hover:scale-105 transition-transform duration-700 filter saturate-[0.95]"
              />
            </div>
            {/* Background shape */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full bg-[#94E07B]/10 -z-10 blur-xl" />
            <div className="absolute -top-6 -right-6 w-64 h-64 rounded-full bg-[#F277B0]/5 -z-10 blur-xl" />
            
            {/* Overlapping Quote with DM Serif Display */}
            <div className="absolute -bottom-10 right-4 sm:-right-8 z-20 max-w-xs post-it p-6 border-l-4 border-[#F277B0]">
              <p className="font-serif italic text-base text-gray-300 leading-relaxed">
                "No hay perros rebeldes, solo gritos de auxilio incomprendidos."
              </p>
              <span className="text-[10px] font-mono text-[#F277B0] tracking-wider uppercase mt-2 block">— Shirley Etóloga</span>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="space-y-6">
            <span className="text-xs font-mono text-[#F277B0] tracking-widest uppercase font-semibold block">
              Capítulo I: El Arte de Entender
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-extrabold leading-tight">
              Un espacio diseñado para transformar su relación
            </h2>
            <div className="w-16 h-1 bg-[#94E07B]" />
            
            <p className="text-base text-gray-300 leading-relaxed font-sans font-medium">
              En Shipeki entendemos que la convivencia con un perro puede ser una de las experiencias más maravillosas, pero también una de las más retadoras. Por eso creamos un espacio diseñado para ayudarte a comprender a tu compañero de vida desde el respeto, la ciencia y la empatía.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed font-sans">
              Aquí no encontrarás adiestramientos tradicionales basados en el miedo o la sumisión, sino un enfoque científico y humano que busca sanar la comunicación y fortalecer el vínculo entre los perros y sus familias.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate("shipeki")}
                className="bg-[#94E07B] hover:bg-[#94E07B]/95 text-[#0A0A0C] font-display font-black text-xs tracking-wider uppercase px-8 py-4 rounded-full transition-all inline-flex items-center gap-2 shadow-lg shadow-[#94E07B]/10 cursor-pointer"
              >
                Conoce más de nosotros <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN 4: LAS 3 CLAVES DIRECTAS */}
      <section className="py-20 bg-gradient-to-b from-[#0A0A0C] to-[#121214] px-6 border-t border-b border-white/5 relative z-30">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <span className="text-xs font-mono text-[#F277B0] tracking-widest uppercase font-semibold block mb-2">
            Nuestros Pilares de Convivencia
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white font-extrabold max-w-2xl mx-auto leading-tight">
            ¿Cómo te ayudamos a sanar la relación?
          </h2>
          <div className="w-12 h-1 bg-[#94E07B] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="organic-card p-8 rounded-[40px]">
            <div className="w-12 h-12 rounded-2xl bg-[#94E07B]/10 text-[#94E07B] flex items-center justify-center mb-6">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-3">Diagnóstico Etológico</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
              Evaluamos las 5 dimensions de tu perro, su biología del estrés y el sistema familiar de apego para estructurar soluciones reales.
            </p>
          </div>

          {/* Card 2 */}
          <div className="organic-card p-8 rounded-[40px]">
            <div className="w-12 h-12 rounded-2xl bg-[#F277B0]/10 text-[#F277B0] flex items-center justify-center mb-6">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-3">Reasociación Emocional</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
              Cambiamos cómo se siente tu perro ante lo que le genera miedo o reactividad, transformando el pánico en total seguridad.
            </p>
          </div>

          {/* Card 3 */}
          <div className="organic-card p-8 rounded-[40px]">
            <div className="w-12 h-12 rounded-2xl bg-[#5CB4FC]/10 text-[#5CB4FC] flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-3">Paseos en Descompresión</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
              Enseñamos técnicas de paseo terapéutico libre de tirones que actúan como descompresión mental natural para el animal.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: EMOTIONAL CLOSING NARRATIVE */}
      <section className="bg-gradient-to-br from-[#060D07] via-[#0E1F0F] to-[#060D07] py-24 text-center text-white relative overflow-hidden px-6 rounded-t-[40px] md:rounded-t-[80px] border-t border-[#94E07B]/10">
        {/* Background blobs for organic sense */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#94E07B]/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#F277B0]/5 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <span className="text-xs font-mono text-[#94E07B] tracking-widest uppercase font-bold mb-4 block">
            Una Promesa de Amor y Ciencia
          </span>
          <p className="font-serif italic text-3xl sm:text-4xl md:text-[42px] text-white leading-tight max-w-3xl">
            "Shipeki no es un lugar donde enseñamos órdenes. Es un lugar donde ayudamos a las familias a comprender a sus perros, fortalecer su vínculo y construir una convivencia basada en el respeto."
          </p>
          <div className="w-12 h-1 bg-white/20 my-8" />
          
          <button
            onClick={() => onNavigate("agenda")}
            className="bg-[#94E07B] hover:bg-[#94E07B]/95 text-[#0A0A0C] font-display font-extrabold text-sm tracking-wider uppercase px-11 py-5 rounded-full transition-all shadow-xl shadow-[#94E07B]/20 hover:scale-103 active:scale-97 cursor-pointer"
          >
            Comenzar la transformación
          </button>
        </div>
      </section>
    </div>
  );
}
