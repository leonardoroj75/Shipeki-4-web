/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Check, Copy, ArrowRight, Eye, Smile, Star, Phone, ShieldCheck, Heart, Info } from "lucide-react";

export default function PageUiKit() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const colors = [
    { name: "Background", hex: "#FDF8F9", desc: "Cosmic Off-White. Cálido, sutil, excelente contraste ocular.", use: "Lienzo general" },
    { name: "Primary Green", hex: "#94E07B", desc: "Verde fresco de naturaleza y vitalidad canina respetuosa.", use: "Botones principales, CTAs" },
    { name: "Secondary Pink", hex: "#F277B0", desc: "Rosa tierno y empático de conexión afectiva familiar.", use: "Destacados, badges, acentos" },
    { name: "Tertiary Blue", hex: "#5CB4FC", desc: "Azul de confianza clínica, credenciales y seguridad etológica.", use: "Testimonios, certificados" },
    { name: "Deep Charcoal", hex: "#1A1A1A", desc: "Negro suave para máxima legibilidad tipográfica y elegancia.", use: "Títulos principales, cuerpo" },
  ];

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  return (
    <div className="w-full bg-[#FDF8F9] min-h-screen py-20 px-6" id="page-ui-kit">
      
      {/* HEADER SECTION */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <span className="text-xs font-mono text-[#F277B0] tracking-widest uppercase font-semibold block mb-2">
          Documentación UX/UI v2.0
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
          Shipeki UI Kit & Mockups
        </h1>
        <p className="font-sans text-base sm:text-lg text-gray-500 max-w-3xl mx-auto mt-4 leading-relaxed">
          Diseño conceptual bajo la premisa <strong>"El Arte de Entender"</strong>. Sin líneas duras corporativas, abundante espacio para respirar, tipografías elegantes y micro-interacciones lúdicas.
        </p>
        <div className="w-16 h-1 bg-[#94E07B] mx-auto mt-6" />
      </div>

      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* PARTE 1: PALETA DE COLORES ESTRATÉGICA */}
        <section className="bg-white rounded-[40px] p-8 sm:p-12 shadow-[0px_20px_40px_-20px_rgba(26,26,26,0.08)] border border-pink-100/10">
          <div className="mb-10">
            <span className="text-xs font-mono text-[#94E07B] tracking-widest uppercase font-bold block mb-1">01 / Paleta Cromática</span>
            <h2 className="font-display text-2xl font-extrabold text-[#1A1A1A]">Colores de Marca Premium</h2>
            <p className="text-sm text-gray-400 font-sans mt-1">Uso estratégico enfocado en la neuroestética de la calma.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {colors.map((c) => (
              <div key={c.hex} className="bg-[#FDF8F9] rounded-[32px] p-5 border border-pink-100/10 flex flex-col justify-between group relative overflow-hidden">
                <div>
                  {/* Swatch */}
                  <div
                    className="w-full h-24 rounded-2xl shadow-inner mb-4 relative cursor-pointer group-hover:scale-102 transition-transform duration-300 flex items-center justify-center text-white font-mono text-xs font-bold"
                    style={{ backgroundColor: c.hex }}
                    onClick={() => handleCopyColor(c.hex)}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center rounded-2xl">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px]">
                        {copiedColor === c.hex ? <Check className="w-3 h-3 text-[#94E07B]" /> : <Copy className="w-3 h-3" />}
                        {copiedColor === c.hex ? "Copiado" : "Copiar Hex"}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-base text-[#1A1A1A]">{c.name}</h3>
                  <span className="text-xs font-mono font-bold text-[#F277B0] tracking-wider block mt-1">{c.hex}</span>
                  <p className="text-xs text-gray-500 font-sans mt-3 leading-relaxed">{c.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/50">
                  <span className="text-[10px] font-sans font-bold text-[#94E07B] uppercase tracking-wider block">Uso Principal:</span>
                  <span className="text-xs text-gray-700 font-sans mt-0.5 block font-medium">{c.use}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PARTE 2: SISTEMA TIPOGRÁFICO */}
        <section className="bg-white rounded-[40px] p-8 sm:p-12 shadow-[0px_20px_40px_-20px_rgba(26,26,26,0.08)] border border-pink-100/10">
          <div className="mb-10">
            <span className="text-xs font-mono text-[#F277B0] tracking-widest uppercase font-bold block mb-1">02 / Tipografías</span>
            <h2 className="font-display text-2xl font-extrabold text-[#1A1A1A]">La Voz Visual de Shipeki</h2>
            <p className="text-sm text-gray-400 font-sans mt-1">Una combinación editorial, moderna, humana y sumamente legible.</p>
          </div>

          <div className="space-y-10">
            {/* Display Heading */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pb-8 border-b border-gray-100">
              <div className="lg:col-span-4">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-1">Encabezados Principales</span>
                <h4 className="font-display font-extrabold text-lg text-[#1A1A1A]">Plus Jakarta Sans</h4>
                <p className="text-xs text-gray-400 font-sans mt-1">Geométrica, limpia, con gran peso óptico.</p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight">
                  Tu perro no necesita ser perfecto... necesita ser <span className="text-[#94E07B] underline decoration-wavy decoration-[#F277B0] underline-offset-4">comprendido</span>.
                </h2>
              </div>
            </div>

            {/* Editorial / Quotes */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pb-8 border-b border-gray-100">
              <div className="lg:col-span-4">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-1">Citas / Testimonios</span>
                <h4 className="font-serif italic text-lg text-[#1A1A1A]">DM Serif Display</h4>
                <p className="text-xs text-gray-400 font-sans mt-1">Serifada clásica de altísima elegancia emocional.</p>
              </div>
              <div className="lg:col-span-8">
                <p className="font-serif italic text-xl sm:text-2xl text-gray-700 leading-relaxed">
                  "No hay perros rebeldes o 'malos', solo gritos de auxilio incomprendidos por la familia."
                </p>
              </div>
            </div>

            {/* Body text */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-4">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-1">Cuerpo de Texto</span>
                <h4 className="font-sans font-bold text-sm text-[#1A1A1A]">Nunito / Quicksand</h4>
                <p className="text-xs text-gray-400 font-sans mt-1">Con terminaciones redondeadas, amigable y suave.</p>
              </div>
              <div className="lg:col-span-8">
                <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                  Abordamos las conductas difíciles desde la empatía y la ciencia etológica clínica. Entendiendo la mente canina en sus cinco dimensiones, ayudamos a los tutores a forjar vínculos sanos, inquebrantables y duraderos en el tiempo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PARTE 3: BOTONES Y ELEMENTOS INTERACTIVOS */}
        <section className="bg-white rounded-[40px] p-8 sm:p-12 shadow-[0px_20px_40px_-20px_rgba(26,26,26,0.08)] border border-pink-100/10">
          <div className="mb-10">
            <span className="text-xs font-mono text-[#5CB4FC] tracking-widest uppercase font-bold block mb-1">03 / Interactividad</span>
            <h2 className="font-display text-2xl font-extrabold text-[#1A1A1A]">Botones y Estados Premium</h2>
            <p className="text-sm text-gray-400 font-sans mt-1">Micro-interacciones diseñadas para guiar la atención del usuario sin tensión visual.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Primary Button */}
            <div className="space-y-4 text-center p-6 bg-[#FDF8F9] rounded-[32px] border border-pink-100/15">
              <span className="text-[10px] font-mono uppercase text-gray-400 tracking-wider">Botón Primario</span>
              <div className="py-4">
                <button className="bg-[#94E07B] hover:bg-[#94E07B]/90 text-white font-display font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-md hover:scale-[1.03] cursor-pointer flex items-center justify-center gap-1 mx-auto">
                  <span>→ Agenda tu valoración</span>
                </button>
              </div>
              <p className="text-xs text-gray-500 font-sans leading-relaxed">
                Color de marca <strong>Green Primary</strong> con flecha de dirección, sombra suave y escala en hover.
              </p>
            </div>

            {/* Secondary Button */}
            <div className="space-y-4 text-center p-6 bg-[#FDF8F9] rounded-[32px] border border-pink-100/15">
              <span className="text-[10px] font-mono uppercase text-gray-400 tracking-wider">Botón Secundario</span>
              <div className="py-4">
                <button className="bg-transparent text-[#F277B0] hover:bg-[#F277B0]/10 border-2 border-[#F277B0]/60 hover:border-[#F277B0] font-display font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-1 mx-auto cursor-pointer">
                  <span>Ver metodología</span>
                </button>
              </div>
              <p className="text-xs text-gray-500 font-sans leading-relaxed">
                Contorno suave, fondo transparente, acento en <strong>Secondary Pink</strong> de marca en hover.
              </p>
            </div>

            {/* Accent Slide Fill */}
            <div className="space-y-4 text-center p-6 bg-[#FDF8F9] rounded-[32px] border border-pink-100/15">
              <span className="text-[10px] font-mono uppercase text-gray-400 tracking-wider">Micro-Interacción</span>
              <div className="py-4">
                <button className="bg-[#5CB4FC] hover:bg-[#5CB4FC]/90 text-white font-display font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all hover:scale-103 cursor-pointer flex items-center justify-center gap-1.5 mx-auto shadow-md shadow-blue-400/15">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>→ Entender su mundo</span>
                </button>
              </div>
              <p className="text-xs text-gray-500 font-sans leading-relaxed">
                Acento en <strong>Contrast Blue</strong> para llamadas de atención, confianza o descargas de PDF.
              </p>
            </div>

          </div>
        </section>

        {/* PARTE 4: COMPONENTES MOCKUP DE ALTA FIDELIDAD */}
        <section className="bg-white rounded-[40px] p-8 sm:p-12 shadow-[0px_20px_40px_-20px_rgba(26,26,26,0.08)] border border-pink-100/10">
          <div className="mb-10">
            <span className="text-xs font-mono text-[#94E07B] tracking-widest uppercase font-bold block mb-1">04 / Componentes de Alta Fidelidad</span>
            <h2 className="font-display text-2xl font-extrabold text-[#1A1A1A]">Patrones UX/UI en Acción</h2>
            <p className="text-sm text-gray-400 font-sans mt-1">Estructuras visuales optimizadas para la conversión etológica emocional.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* 1. Tarjeta Orgánica Asimétrica */}
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-semibold block">A. Tarjeta Orgánica Asimétrica</span>
              
              <div className="bg-[#FDF8F9] p-8 rounded-[40px] border border-pink-100/20 shadow-xs flex flex-col justify-between h-[280px]">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#94E07B]/15 text-[#94E07B] flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-[#1A1A1A] mb-2">Socialización Amable</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans font-medium">
                    Asociación controlada con perros mentores equilibrados para modelar conductas asertivas.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#F277B0] font-bold uppercase tracking-wider mt-4">Shipeki · Dimensión 02</span>
              </div>
            </div>

            {/* 2. Post-it de "Verdad Revelada" */}
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-semibold block">B. Post-it "Torn-paper / Verdad"</span>
              
              <div className="post-it p-6 border-l-4 border-[#F277B0] flex flex-col justify-between h-[280px]">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono font-bold text-[#F277B0] uppercase tracking-widest">Etología Científica</span>
                  <Sparkles className="w-4 h-4 text-amber-400/80 animate-pulse" />
                </div>
                
                <p className="font-serif italic text-sm text-gray-200 leading-relaxed my-4">
                  "El problema no es que tu perro sea 'terco' o dominante. Simplemente está gritando su malestar o incomprensión de la única forma que conoce."
                </p>

                <span className="text-[9px] font-mono text-gray-400 block">— Shirley Etóloga</span>
              </div>
            </div>

            {/* 3. Polaroid Flip Card (Gamification) */}
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-semibold block">C. Tarjeta Polaroid 3D (Volteo en Hover/Click)</span>
              
              <div className="polaroid-container w-full h-[280px] max-w-[250px] mx-auto">
                <div className="polaroid-inner w-full h-full relative duration-700 transform-3d">
                  
                  {/* Front */}
                  <div className="polaroid-front absolute inset-0 bg-white p-3 pb-6 rounded-lg shadow-md border border-gray-100 flex flex-col justify-between">
                    <div className="w-full aspect-square overflow-hidden rounded-xs bg-gray-50 border border-gray-100">
                      <img
                        src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=250"
                        alt="Demo"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="text-center pt-2">
                      <span className="font-serif italic text-xs text-[#1A1A1A] block">Rocky & Sofía</span>
                      <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest block mt-0.5">Pasa el cursor →</span>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="polaroid-back absolute inset-0 bg-[#5CB4FC] text-white p-4 rounded-lg shadow-md flex flex-col justify-between text-left">
                    <div>
                      <span className="text-[8px] font-mono uppercase tracking-widest text-white/75 block">Dificultad: Miedos</span>
                      <p className="font-serif italic text-[11px] leading-relaxed text-white/95 mt-2">
                        “Recuperamos la paz. Rocky pasea con correa floja y olfatea calmadamente cerca de otros perros.”
                      </p>
                    </div>
                    <span className="text-[8px] font-mono uppercase text-white/60 block border-t border-white/20 pt-2">Familia de Rocky</span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* BACK TO DEMO FLOATING BUTTON */}
      <div className="max-w-4xl mx-auto text-center mt-16 pt-12 border-t border-gray-200/50">
        <p className="text-xs text-gray-400 font-sans mb-4">Esta hoja de componentes está en constante actualización según los refinamientos UX/UI.</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => {
              const el = document.getElementById("page-ui-kit");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-xs font-display font-extrabold text-[#F277B0] uppercase tracking-wider hover:underline flex items-center gap-1 cursor-pointer"
          >
            Subir al inicio del kit
          </button>
        </div>
      </div>

    </div>
  );
}
